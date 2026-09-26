let currentSubject = 'physics';
let currentVolumeFilter = 'all';
let currentChapterId = '';
let currentSectionId = '';
let sections = [];
let currentUser = null;
let quizState = { index: 0, questions: [] };

function navTo(levelId) {
    document.querySelectorAll('.view-page').forEach(el => el.classList.remove('active'));
    document.getElementById(levelId).classList.add('active');
}

/* ========== 1. Google 登录 ========== */

function handleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch(err => alert('登录失败：' + err.message));
}

auth.onAuthStateChanged(user => {
    currentUser = user;
    const statusEl = document.getElementById('user-status');
    const loginBtn = document.getElementById('login-btn');

    if (user) {
        statusEl.innerText = user.displayName || user.email || '已登录';
        loginBtn.innerText = '登出';
        loginBtn.onclick = () => auth.signOut();
    } else {
        statusEl.innerText = '未登录（仅浏览）';
        loginBtn.innerText = 'Google 登录';
        loginBtn.onclick = handleLogin;
    }
    updateEditableUI();
});

// 默认先挂上登录处理，onAuthStateChanged 触发前也能点
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn && !currentUser) loginBtn.onclick = handleLogin;
});

function updateEditableUI() {
    document.querySelectorAll('.requires-login').forEach(el => {
        el.style.display = currentUser ? 'inline-block' : 'none';
    });
    document.querySelectorAll('.status-btn').forEach(b => b.disabled = !currentUser);
}

/* ========== 2. Firestore 实时数据同步 ========== */

db.collection('sections').onSnapshot(snapshot => {
    sections = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    seedMissingDefaults();

    if (typeof updateMainBadges === 'function') updateMainBadges();
    if (document.getElementById('level-2').classList.contains('active')) renderChaptersGrid();
    if (document.getElementById('level-3').classList.contains('active')) renderSectionsGrid();
}, err => {
    console.error('Firestore 同步失败：', err);
});

// 把 physics-data.js 里新增、云端还没有的小节补种进 Firestore；已存在的条目不覆盖
async function seedMissingDefaults() {
    if (typeof defaultSections === 'undefined') return;
    const existingIds = new Set(sections.map(s => s.id));
    const missing = defaultSections.filter(s => !existingIds.has(s.id));
    for (const sec of missing) {
        try {
            await db.collection('sections').doc(sec.id).set(sec);
        } catch (e) {
            console.error('补种失败：', sec.id, e);
        }
    }
}

function getOrderedChapterSections(chapterId) {
    return sections
        .filter(s => s.chapterId === chapterId)
        .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
}

/* ========== 3. 全科进度统计 ========== */

function updateMainBadges() {
    const pCount = sections.length;
    const greenCount = sections.filter(s => s.status === 'green').length;
    const percent = pCount > 0 ? Math.round((greenCount / pCount) * 100) : 0;

    const pBadge = document.getElementById('badge-physics');
    if (pBadge) pBadge.innerText = `27 章 · 已存 ${sections.filter(s => s.subject === 'physics' || !s.subject).length} 节`;

    ['math', 'chemistry', 'biology'].forEach(sub => {
        const badge = document.getElementById(`badge-${sub}`);
        if (badge) {
            const count = sections.filter(s => s.subject === sub).length;
            badge.innerText = `已开启 · ${count} 节`;
        }
    });

    document.getElementById('progress-text').innerText = `已掌握 ${greenCount} 节 / 共 ${pCount} 节小节`;
    document.getElementById('progress-fill').style.width = percent + '%';
    document.getElementById('progress-percent').innerText = percent + '%';
}

/* ========== 4. 跨学科全局搜索 ========== */

function handleSearch(keyword) {
    if (!keyword.trim()) {
        if (currentChapterId) navTo('level-3');
        else navTo('level-1');
        return;
    }

    const grid = document.getElementById('search-grid');
    grid.innerHTML = '';
    document.getElementById('search-title').innerText = `搜寻 "${keyword}" 的结果`：;

    const results = sections.filter(s =>
        (s.title || '').toLowerCase().includes(keyword.toLowerCase()) ||
        (s.desc && s.desc.toLowerCase().includes(keyword.toLowerCase())) ||
        (s.content && s.content.toLowerCase().includes(keyword.toLowerCase()))
    );

    if (results.length === 0) {
        grid.innerHTML = `<p style="color:var(--text-muted); grid-column:1/-1;">未找到匹配知识点笔记...</p>`;
    } else {
        results.forEach(sec => {
            const card = document.createElement('div');
            card.className = 'card';
            card.onclick = () => openSectionDetail(sec.id);
            card.innerHTML = <h3>${sec.title}</h3><p>${sec.desc || '点击查看完整笔记...'}</p>;
            grid.appendChild(card);
        });
    }
    navTo('level-search');
}

/* ========== 5. 学科与章节 ========== */

function openSubject(sub) {
    currentSubject = sub;
    const subNames = { physics: '物理', math: '高级数学', chemistry: '化学', biology: '生物' };

    document.getElementById('nav-subject-name').innerText = subNames[sub];
    document.getElementById('nav-subject-link').innerText = subNames[sub];
    document.getElementById('subject-title').innerText = `${subNames[sub]} · 章节目录`;

    const volTabs = document.getElementById('physics-vol-tabs');
    if (volTabs) volTabs.style.display = (sub === 'physics') ? 'flex' : 'none';

    renderChaptersGrid();
    navTo('level-2');
}

function filterVolume(vol, btnEl) {
    currentVolumeFilter = vol;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');
    renderChaptersGrid();
}

function getSubjectChapters(sub) {
    if (sub === 'physics') return (typeof physicsChapters !== 'undefined') ? physicsChapters : [];
    if (sub === 'math') return mathChapters;
    if (sub === 'chemistry') return chemChapters;
    if (sub === 'biology') return bioChapters;
    return [];
}

function renderChaptersGrid() {
    const grid = document.getElementById('chapters-grid');
    grid.innerHTML = '';
    const chapters = getSubjectChapters(currentSubject);

    let filtered = chapters;
    if (currentSubject === 'physics' && currentVolumeFilter !== 'all') {
        filtered = chapters.filter(ch => ch.volume === currentVolumeFilter || ch.vol === currentVolumeFilter);
    }

    filtered.forEach(ch => {
        const count = sections.filter(s => s.chapterId === ch.id).length;
        const card = document.createElement('div');
        card.className = `card subj-${currentSubject === 'chemistry' ? 'chem' : currentSubject === 'biology' ? 'bio' : currentSubject}`;
        card.onclick = () => openChapter(ch.id);
        card.innerHTML = `
            <div>
                <h3>${ch.title}</h3>
                <p>${ch.desc || ''}</p>
            </div>
            <span class="badge" style="background:#eff6ff; color:#2563eb; padding:4px 10px; border-radius:20px; font-size:12px; font-weight:600; align-self:flex-start;">${count} 个已写小节</span>
        `;
        grid.appendChild(card);
    });
}

function openChapter(chId) {
    currentChapterId = chId;
    const chapters = getSubjectChapters(currentSubject);
    const chapter = chapters.find(c => c.id === chId);

    document.getElementById('nav-chapter-name').innerText = chapter.title;
    document.getElementById('chapter-title').innerText = chapter.title;
    renderSectionsGrid();
    navTo('level-3');
}

function renderSectionsGrid() {
    const grid = document.getElementById('sections-grid');
    grid.innerHTML = '';
    const subSections = getOrderedChapterSections(currentChapterId);

    if (subSections.length === 0) {
        grid.innerHTML = `<p style="color:var(--text-muted); grid-column:1/-1;">本章暂无小节，登录后点击右上角"+ 新建小节"添加！</p>`;
    } else {
        subSections.forEach(sec => {
            const card = document.createElement('div');
            card.className = 'card';
            card.onclick = () => openSectionDetail(sec.id);

            let statusDot = '⚪';
            if (sec.status === 'green') statusDot = '🟢';
            if (sec.status === 'yellow') statusDot = '🟡';
            if (sec.status === 'red') statusDot = '🔴';

            card.innerHTML = `
                <h3>${statusDot} ${sec.title}</h3>
                <p>${sec.desc || '点击查看完整笔记...'}</p>
            `;
            grid.appendChild(card);
        });
    }
}

/* ========== 6. 详情页 + 上一节 / 下一节 ========== */

function openSectionDetail(secId) {
    currentSectionId = secId;
    const sec = sections.find(s => s.id === secId);
    if (!sec) return;

    document.getElementById('detail-title').innerText = sec.title;
    document.getElementById('detail-content').innerHTML = sec.content;

    document.querySelectorAll('.status-btn').forEach(b => b.classList.remove('active'));
    if (sec.status) {
        const activeBtn = document.getElementById(`btn-status-${sec.status}`);
        if (activeBtn) activeBtn.classList.add('active');
    }

    renderQuizContainer(sec);
    updateSectionNavButtons(sec);
    navTo('level-4');

    if (window.renderMathInElement) {
        renderMathInElement(document.getElementById('detail-content'), {
            delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }],
            throwOnError: false
        });
        renderMathInElement(document.getElementById('quiz-container'), {
            delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }],
            throwOnError: false
        });
    }
}

function updateSectionNavButtons(sec) {
    const list = getOrderedChapterSections(sec.chapterId);
    const idx = list.findIndex(s => s.id === sec.id);
    const prevBtn = document.getElementById('prev-section-btn');
    const nextBtn = document.getElementById('next-section-btn');
    const prevSec = list[idx - 1];
    const nextSec = list[idx + 1];

    if (prevSec) {
        prevBtn.disabled = false;
        prevBtn.innerText = `上一节：${prevSec.title}`;
        prevBtn.onclick = () => openSectionDetail(prevSec.id);
    } else {
        prevBtn.disabled = true;
        prevBtn.innerText = '已是第一节';
        prevBtn.onclick = null;
    }

    if (nextSec) {
        nextBtn.disabled = false;
        nextBtn.innerText = `下一节：${nextSec.title}`;
        nextBtn.onclick = () => openSectionDetail(nextSec.id);
    } else {
        nextBtn.disabled = true;
        nextBtn.innerText = '已是最后一节';
        nextBtn.onclick = null;
    }
}

/* ========== 7. 复习状态标记 ========== */

function setSectionStatus(status) {
    if (!currentUser) { alert('请先登录后再标记复习状态'); return; }
    db.collection('sections').doc(currentSectionId).update({ status })
        .catch(e => alert('保存失败：' + e.message));

    document.querySelectorAll('.status-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`btn-status-${status}`).classList.add('active');
}

/* ========== 8. 练习题（按小节自带的 quiz 数据渲染，没有数据时显示空状态） ==========
   在 physics-data.js 里给某个 section 加上这样的字段即可让练习题生效：

   quiz: [
     {
       question: '关于滑动摩擦力，下列说法正确的是：',
       options: ['与接触面积成正比', '与正压力成正比', '与运动速度成正比', '与物体质量无关'],
       answerIndex: 1,
       explanation: '滑动摩擦力 f = μ·F_N，只与动摩擦因数和正压力有关。'
     }
   ]
*/

function renderQuizContainer(sec) {
    const container = document.getElementById('quiz-container');
    const questions = Array.isArray(sec.quiz) && sec.quiz.length > 0 ? sec.quiz : null;

    if (!questions) {
        container.innerHTML = `
            <div class="quiz-empty">
                <p>本节暂无练习题</p>
                <p style="font-size:13px;">登录后编辑笔记时可以为本节补充 quiz 数据</p>
            </div>
        `;
        return;
    }

    quizState = { index: 0, questions };
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const container = document.getElementById('quiz-container');
    const { index, questions } = quizState;
    const q = questions[index];

    const optionsHtml = q.options.map((opt, i) => `
        <div class="quiz-option" data-index="${i}" onclick="checkAnswer(this, ${i})">
            ${String.fromCharCode(65 + i)}. ${opt}
        </div>
    `).join('');

    container.innerHTML = `
        <div class="quiz-card">
            <p class="quiz-progress">第 ${index + 1} / ${questions.length} 题</p>
            <p style="font-weight:600; font-size:14px; margin-bottom:8px;">${q.question}</p>
            ${optionsHtml}
            <div class="quiz-explanation" id="quiz-explanation">
                <strong>正确答案：${String.fromCharCode(65 + q.answerIndex)}</strong><br>
                ${q.explanation || ''}
            </div>
        </div>
    `;

    if (window.renderMathInElement) {
        renderMathInElement(container, {
            delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }],
            throwOnError: false
        });
    }
}

function checkAnswer(optEl, selectedIndex) {
    const card = optEl.closest('.quiz-card');
    const q = quizState.questions[quizState.index];

    card.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('correct', 'wrong'));

    if (selectedIndex === q.answerIndex) {
        optEl.classList.add('correct');
    } else {
        optEl.classList.add('wrong');
        const correctEl = card.querySelector(`.quiz-option[data-index="${q.answerIndex}"`]);
        if (correctEl) correctEl.classList.add('correct');
    }
    card.querySelector('.quiz-explanation').style.display = 'block';

    const existingNext = card.querySelector('.quiz-next-btn');
    if (existingNext) existingNext.remove();

    if (quizState.index < quizState.questions.length - 1) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'quiz-next-btn';
        nextBtn.innerText = '下一题';
        nextBtn.onclick = () => { quizState.index++; renderQuizQuestion(); };
        card.appendChild(nextBtn);
    }
}

/* ========== 9. 弹窗新建与修改 ========== */

function openAddModal() {
    if (!currentUser) { alert('请先登录后再新建小节'); return; }
    currentSectionId = null;
    document.getElementById('modal-heading').innerText = '新建小节笔记';
    const select = document.getElementById('modal-chapter-select');
    select.innerHTML = '';

    const chapters = getSubjectChapters(currentSubject);
    chapters.forEach(ch => {
        select.innerHTML += `<option value="${ch.id}">${ch.title}</option>`;
    });

    document.getElementById('modal-title').value = '';
    document.getElementById('modal-desc').value = '';
    document.getElementById('modal-content').value = '';
    document.getElementById('modal').style.display = 'flex';
}

function openEditModal() {
    if (!currentUser) { alert('请先登录后再编辑'); return; }
    const sec = sections.find(s => s.id === currentSectionId);
    if (!sec) return;
    document.getElementById('modal-heading').innerText = '编辑小节笔记';
    const select = document.getElementById('modal-chapter-select');
    select.innerHTML = '';

    const chapters = getSubjectChapters(sec.subject || currentSubject);
    chapters.forEach(ch => select.innerHTML += `<option value="${ch.id}">${ch.title}</option>`);

    select.value = sec.chapterId;
    document.getElementById('modal-title').value = sec.title;
    document.getElementById('modal-desc').value = sec.desc || '';
    document.getElementById('modal-content').value = sec.content;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() { document.getElementById('modal').style.display = 'none'; }

function saveSectionNote() {
    if (!currentUser) { alert('请先登录后再保存'); return; }

    const chapterId = document.getElementById('modal-chapter-select').value;
    const title = document.getElementById('modal-title').value;
    const desc = document.getElementById('modal-desc').value;
    const content = document.getElementById('modal-content').value;

    if (!title) { alert('标题不能为空！'); return; }

    if (currentSectionId) {
        db.collection('sections').doc(currentSectionId).update({ chapterId, title, desc, content })
            .then(() => openSectionDetail(currentSectionId))
            .catch(e => alert('保存失败：' + e.message));
    } else {
        const newId = 'sec-' + Date.now();
        db.collection('sections').doc(newId).set({
            subject: currentSubject, chapterId, title, desc, content, status: 'red', custom: true
        }).then(() => {
            currentChapterId = chapterId;
            openChapter(chapterId);
        }).catch(e => alert('保存失败：' + e.message));
    }

    closeModal();
}
