let currentSubject = 'physics';
let currentVolumeFilter = 'all';
let currentChapterId = '';
let currentSectionId = '';
let sections = [];
let currentUser = null;

// 小节内随堂练习状态
let quizState = { index: 0, questions: [] };

// 专项练习中心状态
let practiceState = {
    subjectFilter: 'all',
    questions: [],
    currentIndex: 0,
    answeredMap: {}, // key: index -> { selected, isCorrect }
};

// 社区讨论区状态
let communityPosts = [];
let currentCommunityFilter = 'all';

/* ========== 0. 内置精选理科题库（保底题库 + 汇总各小节 quiz） ========== */
const builtInPracticeQuestions = [
    {
        subject: 'physics',
        sourceTitle: '第3章 直线运动 · 匀变速运动',
        question: '一质点做匀加速直线运动，初速度为 $v_0 = 2\\text{ m/s}$，加速度 $a = 3\\text{ m/s}^2$，则它在第 $3\\text{ s}$ 内的位移大小为：',
        options: ['$9.5\\text{ m}$', '$19.5\\text{ m}$', '$11.0\\text{ m}$', '$12.5\\text{ m}$'],
        answerIndex: 0,
        explanation: '第 $3\\text{ s}$ 内的位移等于前 $3\\text{ s}$ 位移减去前 $2\\text{ s}$ 位移：$\\Delta x = x_3 - x_2 = (2\\times 3 + \\frac{1}{2}\\times 3\\times 3^2) - (2\\times 2 + \\frac{1}{2}\\times 3\\times 2^2) = 19.5 - 10 = 9.5\\text{ m}$。'
    },
    {
        subject: 'physics',
        sourceTitle: '第11章 流体力学 · 伯努利方程',
        question: '理想流体在水平变径管中作稳定流动时，在管径较细（横截面积较小）的位置，流体的：',
        options: ['流速较大，压强较大', '流速较大，压强较小', '流速较小，压强较大', '流速与压强均不变'],
        answerIndex: 1,
        explanation: '由连续性方程 $A_1 v_1 = A_2 v_2$ 知截面积小处流速大；再由水平管伯努利方程 $P + \\frac{1}{2}\\rho v^2 = \\text{常量}$，流速大处静压强 $P$ 较小。'
    },
    {
        subject: 'math',
        sourceTitle: '第三章 函数的概念与性质',
        question: '已知函数 $f(x) = x^3 + ax$ 是定义在 $\\mathbb{R}$ 上的奇函数，若 $f(2) = 14$，则实数 $a$ 的值为：',
        options: ['$-3$', '$3$', '$5$', '$-5$'],
        answerIndex: 1,
        explanation: '代入 $x = 2$ 得 $f(2) = 2^3 + 2a = 8 + 2a = 14$，解得 $2a = 6 \\Rightarrow a = 3$。'
    },
    {
        subject: 'math',
        sourceTitle: '第五章 三角函数 · 同角关系',
        question: '若 $\\sin\\theta + \\cos\\theta = \\frac{\\sqrt{2}}{2}$，则 $\\sin\\theta\\cos\\theta$ 的值为：',
        options: ['$-\\frac{1}{4}$', '$\\frac{1}{4}$', '$-\\frac{1}{2}$', '$\\frac{1}{2}$'],
        answerIndex: 0,
        explanation: '将已知等式两边平方：$\\sin^2\\theta + 2\\sin\\theta\\cos\\theta + \\cos^2\\theta = \\frac{1}{2}$，利用 $\\sin^2\\theta + \\cos^2\\theta = 1$ 得 $1 + 2\\sin\\theta\\cos\\theta = \\frac{1}{2} \\Rightarrow \\sin\\theta\\cos\\theta = -\\frac{1}{4}$。'
    },
    {
        subject: 'chemistry',
        sourceTitle: '第13章/15章 常见阴阳离子定性检验',
        question: '在定性无机分析中，为了检验未知溶液中是否含有 $\\text{SO}_4^{2-}$ 离子，最严密的实验操作顺序是：',
        options: [
            '直接滴加 $\\text{BaCl}_2$ 溶液观察是否有白色沉淀',
            '先加足量稀盐酸酸化无沉淀后，再滴加 $\\text{BaCl}_2$ 溶液',
            '先滴加 $\\text{AgNO}_3$ 溶液，再加入稀硝酸',
            '先加入 $\\text{NaOH}$ 溶液并加热'
        ],
        answerIndex: 1,
        explanation: '先加稀 $\\text{HCl}$ 酸化可排除 $\\text{CO}_3^{2-}$、$\\text{SO}_3^{2-}$ 以及 $\\text{Ag}^+$ 的干扰，若无沉淀产生，再加 $\\text{BaCl}_2$ 产生不溶于酸的白色沉淀 $\\text{BaSO}_4$ 即可确证 $\\text{SO}_4^{2-}$。'
    },
    {
        subject: 'chemistry',
        sourceTitle: '第21章 化学平衡的移动',
        question: '对于放热可逆反应 $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) \\quad \\Delta H < 0$，达到平衡后，下列措施能使平衡向正反应方向移动的是：',
        options: ['升高温度', '减小体系总压强', '加入催化剂铁触媒', '增大压强或降低温度'],
        answerIndex: 3,
        explanation: '正反应是气体分子数减小（$4 \\to 2$）且放热的反应。根据勒夏特列原理，增大压强或降低温度均有利于平衡向生成 $\\text{NH}_3$ 的正反应方向移动。'
    },
    {
        subject: 'biology',
        sourceTitle: '第3章 细胞内物质和能量的转换',
        question: '在有氧呼吸的三个阶段中，产生 $\\text{ATP}$ 数量最多、且需要氧气直接参与的阶段发生在：',
        options: ['细胞质基质（细胞溶胶）', '线粒体基质', '线粒体内膜', '叶绿体类囊体薄膜'],
        answerIndex: 2,
        explanation: '有氧呼吸第三阶段（电子传递链与氧化磷酸化）发生在线粒体内膜上，$\\text{NADH}$ 与 $\\text{FADH}_2$ 传递的电子与 $\\text{O}_2$ 结合生成水，同时合成大量 $\\text{ATP}$。'
    }
];

/* ========== 页面与主导航切换 ========== */

function navTo(levelId) {
    document.querySelectorAll('.view-page').forEach(el => el.classList.remove('active'));
    const target = document.getElementById(levelId);
    if (target) target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchMainTab(levelId) {
    document.querySelectorAll('.nav-pill').forEach(b => b.classList.remove('active'));
    if (levelId === 'level-1') {
        document.getElementById('nav-tab-home')?.classList.add('active');
        document.documentElement.style.setProperty('--primary-color', '#38bdf8');
    } else if (levelId === 'level-practice') {
        document.getElementById('nav-tab-practice')?.classList.add('active');
        initPracticeCenter('all');
    } else if (levelId === 'level-community') {
        document.getElementById('nav-tab-community')?.classList.add('active');
        renderCommunityFeed();
    }
    navTo(levelId);
}

function renderLatexIn(element) {
    if (!element || !window.renderMathInElement) return;
    renderMathInElement(element, {
        delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
        ],
        throwOnError: false
    });
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

/* ========== 2. Firestore 实时数据同步（小节 + 社区交流区） ========== */

async function initAndListen() {
    try {
        const snap = await db.collection('sections').get({ source: 'server' });
        const existingIds = new Set(snap.docs.map(d => d.id));

        if (typeof defaultSections !== 'undefined') {
            const missing = defaultSections.filter(s => !existingIds.has(s.id));
            for (const sec of missing) {
                await db.collection('sections').doc(sec.id).set(sec);
            }
        }
    } catch (e) {
        console.error('初始播种检查失败：', e);
    }

    // 监听小节笔记变化
    db.collection('sections').onSnapshot(snapshot => {
        sections = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        updateMainBadges();
        if (document.getElementById('level-2').classList.contains('active')) renderChaptersGrid();
        if (document.getElementById('level-3').classList.contains('active')) renderSectionsGrid();
        if (document.getElementById('level-4').classList.contains('active') && currentSectionId) {
            const updatedSec = sections.find(s => s.id === currentSectionId);
            if (updatedSec) renderSectionComments(updatedSec);
        }
    }, err => console.error('Firestore 同步失败：', err));

    // 监听社区讨论帖变化
    db.collection('discussions').orderBy('createdAt', 'desc').onSnapshot(snapshot => {
        communityPosts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        if (document.getElementById('level-community').classList.contains('active')) {
            renderCommunityFeed();
        }
    }, err => {
        console.warn('社区讨论集合尚未初始化或受权限限制，使用本地缓存模式：', err);
    });
}

initAndListen();

function getOrderedChapterSections(chapterId) {
    return sections
        .filter(s => s.chapterId === chapterId)
        .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
}

/* ========== 3. 全科进度统计 ========== */

function updateMainBadges() {
    const pCount = sections.length;
    const greenCount = sections.filter(s => s.status === 'green').length;
    const yellowCount = sections.filter(s => s.status === 'yellow').length;
    const redCount = sections.filter(s => s.status === 'red' || !s.status).length;
    const percent = pCount > 0 ? Math.round((greenCount / pCount) * 100) : 0;

    const greenEl = document.getElementById('stat-green-count');
    const yellowEl = document.getElementById('stat-yellow-count');
    const redEl = document.getElementById('stat-red-count');
    if (greenEl) greenEl.innerText = greenCount;
    if (yellowEl) yellowEl.innerText = yellowCount;
    if (redEl) redEl.innerText = redCount;

    const pBadge = document.getElementById('badge-physics');
    if (pBadge) pBadge.innerText = `27 章 · 已存 ${sections.filter(s => s.subject === 'physics' || !s.subject).length} 节`;

    const chapterCounts = { math: 9, chemistry: 35, biology: 19 };
    ['math', 'chemistry', 'biology'].forEach(sub => {
        const badge = document.getElementById(`badge-${sub}`);
        if (badge) {
            const count = sections.filter(s => s.subject === sub).length;
            badge.innerText = `${chapterCounts[sub]} 章 · 已存 ${count} 节`;
        }
    });

    const textEl = document.getElementById('progress-text');
    const fillEl = document.getElementById('progress-fill');
    const percentEl = document.getElementById('progress-percent');

    if (textEl) textEl.innerText = `已掌握 ${greenCount} 节 / 共 ${pCount} 节云端笔记`;
    if (fillEl) fillEl.style.width = percent + '%';
    if (percentEl) percentEl.innerText = percent + '%';
}

/* ========== 4. 跨学科全局搜索 ========== */

function handleSearch(keyword) {
    if (!keyword.trim()) {
        if (currentChapterId) navTo('level-3');
        else switchMainTab('level-1');
        return;
    }

    const grid = document.getElementById('search-grid');
    grid.innerHTML = '';
    document.getElementById('search-title').innerText = `🔍 搜寻 "${keyword}" 的结果：`;

    const kw = keyword.toLowerCase();
    const results = sections.filter(s =>
        (s.title || '').toLowerCase().includes(kw) ||
        (s.desc && s.desc.toLowerCase().includes(kw)) ||
        (s.content && s.content.toLowerCase().includes(kw))
    );

    if (results.length === 0) {
        grid.innerHTML = `<p style="color:var(--text-muted); grid-column:1/-1;">未找到匹配的知识点笔记，试试换个关键词...</p>`;
    } else {
        results.forEach(sec => {
            const card = document.createElement('div');
            card.className = 'card';
            card.onclick = () => openSectionDetail(sec.id);
            card.innerHTML = `
                <div>
                    <h3>${sec.title}</h3>
                    <p>${sec.desc || '点击查看完整笔记与推导公式...'}</p>
                </div>
                <span style="font-size:12px; color:var(--primary-color); font-weight:600;">进入阅读 →</span>
            `;
            grid.appendChild(card);
        });
    }
    navTo('level-search');
}

/* ========== 5. 学科与章节目录 ========== */

function openSubject(sub) {
    currentSubject = sub;
    currentVolumeFilter = 'all';

    const subNames = { physics: '物理', math: '高级数学', chemistry: '化学', biology: '生物' };
    const accentColors = { physics: '#38bdf8', math: '#a855f7', chemistry: '#fb923c', biology: '#4ade80' };

    document.documentElement.style.setProperty('--primary-color', accentColors[sub] || '#38bdf8');

    const navName = document.getElementById('nav-subject-name');
    const navLink = document.getElementById('nav-subject-link');
    const subTitle = document.getElementById('subject-title');

    if (navName) navName.innerText = subNames[sub];
    if (navLink) navLink.innerText = subNames[sub];
    if (subTitle) subTitle.innerText = `${subNames[sub]} · 章节目录`;

    updateVolumeTabLabels();

    document.querySelectorAll('#vol-tabs .tab-btn').forEach(b => b.classList.remove('active'));
    const tabAll = document.getElementById('tab-vol-all');
    if (tabAll) tabAll.classList.add('active');

    renderChaptersGrid();
    navTo('level-2');
}

function openChapter(chapterId) {
    currentChapterId = chapterId;
    const chapters = getSubjectChapters(currentSubject);
    const chapter = chapters.find(c => c.id === chapterId);

    if (chapter) {
        const navChapterName = document.getElementById('nav-chapter-name');
        const chapterTitle = document.getElementById('chapter-title');
        if (navChapterName) navChapterName.innerText = chapter.title;
        if (chapterTitle) chapterTitle.innerText = `${chapter.title} · 小节列表`;
    }

    renderSectionsGrid();
    navTo('level-3');
}

function filterVolume(vol, btnEl) {
    currentVolumeFilter = vol;
    document.querySelectorAll('#vol-tabs .tab-btn').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');
    renderChaptersGrid();
}

function getSubjectChapters(sub) {
    if (sub === 'physics') return (typeof physicsChapters !== 'undefined') ? physicsChapters : [];
    if (sub === 'math') return (typeof mathChapters !== 'undefined') ? mathChapters : [];
    if (sub === 'chemistry') return (typeof chemChapters !== 'undefined') ? chemChapters : [];
    if (sub === 'biology') return (typeof bioChapters !== 'undefined') ? bioChapters : [];
    return [];
}

function renderChaptersGrid() {
    const grid = document.getElementById('chapters-grid');
    if (!grid) return;
    grid.innerHTML = '';
    const chapters = getSubjectChapters(currentSubject);

    let filtered = chapters;
    if (currentVolumeFilter !== 'all') {
        filtered = chapters.filter(ch => ch.volume === currentVolumeFilter || ch.vol === currentVolumeFilter);
    }

    filtered.forEach(ch => {
        const chSections = sections.filter(s => s.chapterId === ch.id);
        const count = chSections.length;
        const greenCount = chSections.filter(s => s.status === 'green').length;

        const card = document.createElement('div');
        const subClassMap = { physics: 'physics', math: 'math', chemistry: 'chem', biology: 'bio' };
        card.className = `card subj-${subClassMap[currentSubject] || 'physics'}`;
        card.onclick = () => openChapter(ch.id);

        card.innerHTML = `
            <div>
                <span style="font-size:11px; color:var(--primary-color); font-weight:700; letter-spacing:0.5px;">${ch.volName || ''}</span>
                <h3 style="margin-top:4px;">${ch.title}</h3>
                <p>${ch.desc || '点击进入查看本章核心概念与公式推导'}</p>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">
                <span class="badge" style="background:rgba(255,255,255,0.06); color:#fff; padding:4px 10px; border-radius:20px; font-size:12px; font-weight:600;">📚 ${count} 节笔记</span>
                ${count > 0 ? `<span style="font-size:11px; color:#4ade80;">🟢 已掌握 ${greenCount}/${count}</span>` : ''}
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderSectionsGrid() {
    const grid = document.getElementById('sections-grid');
    if (!grid) return;
    grid.innerHTML = '';
    const subSections = getOrderedChapterSections(currentChapterId);

    if (subSections.length === 0) {
        grid.innerHTML = `<p style="color:var(--text-muted); grid-column:1/-1; padding: 24px; background: rgba(255,255,255,0.03); border-radius: 12px;">本章暂无小节笔记，登录后可点击右上角「+ 新建笔记」添加！</p>`;
    } else {
        subSections.forEach(sec => {
            const card = document.createElement('div');
            card.className = 'card';
            card.onclick = () => openSectionDetail(sec.id);

            let statusDot = '⚪';
            if (sec.status === 'green') statusDot = '🟢';
            if (sec.status === 'yellow') statusDot = '🟡';
            if (sec.status === 'red') statusDot = '🔴';

            const quizCount = Array.isArray(sec.quiz) ? sec.quiz.length : 0;
            const commentCount = Array.isArray(sec.comments) ? sec.comments.length : 0;

            card.innerHTML = `
                <div>
                    <h3>${statusDot} ${sec.title}</h3>
                    <p>${sec.desc || '点击查看完整笔记...'}</p>
                </div>
                <div style="display:flex; gap:10px; font-size:11.5px; color:var(--text-muted);">
                    <span>🎯 ${quizCount} 道练习</span>
                    <span>💬 ${commentCount} 条讨论</span>
                </div>
            `;
            grid.appendChild(card);
        });
    }
}

function updateVolumeTabLabels() {
    const chapters = getSubjectChapters(currentSubject);
    const countAll = chapters.length;
    const countUpper = chapters.filter(c => c.volume === 'upper' || c.vol === 'upper').length;
    const countMiddle = chapters.filter(c => c.volume === 'middle' || c.vol === 'middle').length;
    const countLower = chapters.filter(c => c.volume === 'lower' || c.vol === 'lower').length;

    const tabAll = document.getElementById('tab-vol-all');
    const tabUpper = document.getElementById('tab-vol-upper');
    const tabMiddle = document.getElementById('tab-vol-middle');
    const tabLower = document.getElementById('tab-vol-lower');

    if (tabAll) tabAll.innerText = `全部 (${countAll}章)`;
    if (tabUpper) tabUpper.innerText = `上册 (${countUpper}章)`;
    if (tabMiddle) tabMiddle.innerText = `中册 (${countMiddle}章)`;
    if (tabLower) tabLower.innerText = `下册 (${countLower}章)`;
}

/* ========== 6. 详情页 + 随堂练习 + 随堂评论 ========== */

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
    renderSectionComments(sec);
    updateSectionNavButtons(sec);
    navTo('level-4');

    renderLatexIn(document.getElementById('detail-content'));
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
        prevBtn.innerText = `← 上一节：${prevSec.title}`;
        prevBtn.onclick = () => openSectionDetail(prevSec.id);
    } else {
        prevBtn.disabled = true;
        prevBtn.innerText = '已是本章第一节';
        prevBtn.onclick = null;
    }

    if (nextSec) {
        nextBtn.disabled = false;
        nextBtn.innerText = `下一节：${nextSec.title} →`;
        nextBtn.onclick = () => openSectionDetail(nextSec.id);
    } else {
        nextBtn.disabled = true;
        nextBtn.innerText = '已是本章最后一节';
        nextBtn.onclick = null;
    }
}

/* ========== 7. 复习状态标记 ========== */

function setSectionStatus(status) {
    if (!currentUser) { alert('请先登录后再标记复习状态'); return; }
    db.collection('sections').doc(currentSectionId).update({ status })
        .catch(e => alert('保存失败：' + e.message));

    document.querySelectorAll('.status-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`btn-status-${status}`)?.classList.add('active');
}

/* ========== 8. 小节内随堂练习题（优化升级版） ========== */

function renderQuizContainer(sec) {
    const container = document.getElementById('quiz-container');
    const questions = Array.isArray(sec.quiz) && sec.quiz.length > 0 ? sec.quiz : null;

    if (!questions) {
        container.innerHTML = `
            <div class="quiz-card" style="text-align:center; color:var(--text-muted);">
                <p>📭 本节暂无随堂练习题</p>
                <p style="font-size:12.5px; margin-top:4px;">登录后点击右上角「编辑笔记与习题」即可可视化添加选择题</p>
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

    const dotsHtml = questions.map((_, i) => `
        <button class="quiz-dot ${i === index ? 'active' : ''}" onclick="jumpToSectionQuiz(${i})">${i + 1}</button>
    `).join('');

    const optionsHtml = q.options.map((opt, i) => `
        <div class="quiz-option" data-index="${i}" onclick="checkAnswer(this, ${i})">
            <strong style="color:var(--primary-color);">${String.fromCharCode(65 + i)}.</strong>
            <span>${opt}</span>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="quiz-card">
            <div class="quiz-top-meta">
                <span class="quiz-progress-badge">第 ${index + 1} / ${questions.length} 题</span>
                <div class="quiz-dots">${dotsHtml}</div>
            </div>
            <p style="font-weight:600; font-size:15px; margin-bottom:12px; line-height:1.6;">${q.question}</p>
            ${optionsHtml}
            <div class="quiz-explanation" id="quiz-explanation">
                <strong>✅ 正确答案：${String.fromCharCode(65 + Number(q.answerIndex))}</strong><br>
                <div style="margin-top:6px;">${q.explanation || '暂无详细解析'}</div>
            </div>
            <div class="quiz-actions-bar">
                <button class="btn-secondary" ${index === 0 ? 'disabled' : ''} onclick="jumpToSectionQuiz(${index - 1})">上一题</button>
                <button class="btn-secondary" ${index === questions.length - 1 ? 'disabled' : ''} onclick="jumpToSectionQuiz(${index + 1})">下一题</button>
            </div>
        </div>
    `;

    renderLatexIn(container);
}

function jumpToSectionQuiz(idx) {
    if (idx < 0 || idx >= quizState.questions.length) return;
    quizState.index = idx;
    renderQuizQuestion();
}

function checkAnswer(optEl, selectedIndex) {
    const card = optEl.closest('.quiz-card');
    const q = quizState.questions[quizState.index];
    const ansIdx = Number(q.answerIndex);

    card.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('correct', 'wrong'));

    if (selectedIndex === ansIdx) {
        optEl.classList.add('correct');
    } else {
        optEl.classList.add('wrong');
        const correctEl = card.querySelector(`.quiz-option[data-index="${ansIdx}"]`);
        if (correctEl) correctEl.classList.add('correct');
    }
    card.querySelector('.quiz-explanation').style.display = 'block';
}

/* ========== 9. 专项练习区（Practice Center）逻辑 ========== */

function getAllPracticeQuestions(subjectFilter = 'all') {
    const dynamicQuestions = [];
    sections.forEach(sec => {
        if (Array.isArray(sec.quiz)) {
            sec.quiz.forEach(q => {
                dynamicQuestions.push({
                    subject: sec.subject || 'physics',
                    sourceTitle: sec.title,
                    sectionId: sec.id,
                    question: q.question,
                    options: q.options,
                    answerIndex: Number(q.answerIndex),
                    explanation: q.explanation || ''
                });
            });
        }
    });

    const combined = [...dynamicQuestions, ...builtInPracticeQuestions];
    if (subjectFilter === 'all') return combined;
    return combined.filter(q => q.subject === subjectFilter);
}

function initPracticeCenter(subjectFilter = 'all') {
    practiceState.subjectFilter = subjectFilter;
    practiceState.questions = getAllPracticeQuestions(subjectFilter);
    practiceState.currentIndex = 0;
    practiceState.answeredMap = {};
    updatePracticeStatsUI();
    renderPracticeHubQuestion();
}

function filterPracticeSubject(sub, btnEl) {
    btnEl.parentElement.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');
    initPracticeCenter(sub);
}

function openPracticeForCurrentSubject() {
    switchMainTab('level-practice');
    const tabs = document.querySelectorAll('#level-practice .volume-tabs .tab-btn');
    tabs.forEach(b => b.classList.remove('active'));
    initPracticeCenter(currentSubject);
}

function startRandomPractice(count = 5) {
    const pool = getAllPracticeQuestions(practiceState.subjectFilter);
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    practiceState.questions = shuffled.slice(0, Math.min(count, shuffled.length));
    practiceState.currentIndex = 0;
    practiceState.answeredMap = {};
    updatePracticeStatsUI();
    renderPracticeHubQuestion();
}

function resetPracticeSession() {
    practiceState.currentIndex = 0;
    practiceState.answeredMap = {};
    updatePracticeStatsUI();
    renderPracticeHubQuestion();
}

function updatePracticeStatsUI() {
    const total = practiceState.questions.length;
    const answeredList = Object.values(practiceState.answeredMap);
    const answeredCount = answeredList.length;
    const correctCount = answeredList.filter(a => a.isCorrect).length;
    const rate = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

    document.getElementById('prac-total-count').innerText = total;
    document.getElementById('prac-answered-count').innerText = answeredCount;
    document.getElementById('prac-correct-count').innerText = correctCount;
    document.getElementById('prac-accuracy-rate').innerText = `${rate}%`;
}

function renderPracticeHubQuestion() {
    const container = document.getElementById('practice-hub-container');
    if (!container) return;

    const { questions, currentIndex, answeredMap } = practiceState;
    if (questions.length === 0) {
        container.innerHTML = `<p style="color:var(--text-muted); text-align:center; padding:30px;">该科目下暂无练习题，快去小节笔记中添加吧！</p>`;
        return;
    }

    const q = questions[currentIndex];
    const record = answeredMap[currentIndex];
    const subTagMap = {
        physics: '<span class="post-tag tag-physics">⚛ 物理</span>',
        math: '<span class="post-tag tag-math">∫ 高数</span>',
        chemistry: '<span class="post-tag tag-chemistry">🧪 化学</span>',
        biology: '<span class="post-tag tag-biology">🧬 生物</span>'
    };

    const dotsHtml = questions.map((_, i) => {
        let extraStyle = '';
        if (answeredMap[i]) {
            extraStyle = answeredMap[i].isCorrect
                ? 'border-color:#4ade80; color:#4ade80;'
                : 'border-color:#fb923c; color:#fb923c;';
        }
        return `<button class="quiz-dot ${i === currentIndex ? 'active' : ''}" style="${extraStyle}" onclick="jumpPracticeQuestion(${i})">${i + 1}</button>`;
    }).join('');

    const optionsHtml = q.options.map((opt, i) => {
        let cls = 'quiz-option';
        if (record) {
            if (i === Number(q.answerIndex)) cls += ' correct';
            else if (i === record.selected) cls += ' wrong';
        }
        return `
            <div class="${cls}" onclick="submitPracticeAnswer(${i})">
                <strong style="color:var(--primary-color);">${String.fromCharCode(65 + i)}.</strong>
                <span>${opt}</span>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div class="quiz-top-meta">
            <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                ${subTagMap[q.subject] || ''}
                <span style="font-size:12.5px; color:var(--text-muted);">来源：${q.sourceTitle || '综合题库'}</span>
                ${q.sectionId ? `<button class="action-chip" onclick="openSectionDetail('${q.sectionId}')">📖 查看对应笔记</button>` : ''}
            </div>
            <div class="quiz-dots">${dotsHtml}</div>
        </div>

        <div class="quiz-card" style="margin-top:10px;">
            <p style="font-weight:700; font-size:16px; margin-bottom:14px; line-height:1.65;">
                ${currentIndex + 1}. ${q.question}
            </p>
            ${optionsHtml}
            <div class="quiz-explanation" style="display: ${record ? 'block' : 'none'};">
                <strong>✅ 正确答案：${String.fromCharCode(65 + Number(q.answerIndex))}</strong><br>
                <div style="margin-top:6px;">${q.explanation || '暂无详细解析'}</div>
            </div>

            <div class="quiz-actions-bar">
                <button class="btn-secondary" ${currentIndex === 0 ? 'disabled' : ''} onclick="jumpPracticeQuestion(${currentIndex - 1})">← 上一题</button>
                <span style="font-size:12px; color:var(--text-muted);">进度 ${currentIndex + 1} / ${questions.length}</span>
                <button class="btn-primary" ${currentIndex === questions.length - 1 ? 'disabled' : ''} onclick="jumpPracticeQuestion(${currentIndex + 1})">下一题 →</button>
            </div>
        </div>
    `;

    renderLatexIn(container);
}

function submitPracticeAnswer(selectedIdx) {
    const idx = practiceState.currentIndex;
    const q = practiceState.questions[idx];
    const isCorrect = selectedIdx === Number(q.answerIndex);

    practiceState.answeredMap[idx] = { selected: selectedIdx, isCorrect };
    updatePracticeStatsUI();
    renderPracticeHubQuestion();
}

function jumpPracticeQuestion(idx) {
    if (idx < 0 || idx >= practiceState.questions.length) return;
    practiceState.currentIndex = idx;
    renderPracticeHubQuestion();
}

/* ========== 10. 学术交流区（Community）与小节随堂评论 ========== */

function formatTimeAgo(timestamp) {
    if (!timestamp) return '刚刚';
    const diff = Math.floor((Date.now() - timestamp) / 1000);
    if (diff < 60) return '刚刚';
    if (diff < 3600) return `${Math.floor(diff / 60)} 分钟前`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} 小时前`;
    const d = new Date(timestamp);
    return `${d.getMonth() + 1}月${d.getDate()}日`;
}

// 10.1 发布全局讨论帖
function createCommunityPost() {
    if (!currentUser) {
        alert('请先点击右上角 Google 登录后再发布讨论！');
        return;
    }

    const subject = document.getElementById('post-subject-select').value;
    const title = document.getElementById('post-title-input').value.trim();
    const content = document.getElementById('post-content-input').value.trim();

    if (!title || !content) {
        alert('请填写讨论标题和具体内容！');
        return;
    }

    const newPost = {
        subject,
        title,
        content,
        authorName: currentUser.displayName || currentUser.email || '理科同学',
        authorUid: currentUser.uid,
        createdAt: Date.now(),
        likes: 0,
        likedBy: [],
        replies: []
    };

    db.collection('discussions').add(newPost).then(() => {
        document.getElementById('post-title-input').value = '';
        document.getElementById('post-content-input').value = '';
    }).catch(err => {
        alert('发布失败：' + err.message);
    });
}

function filterCommunityPosts(sub, btnEl) {
    currentCommunityFilter = sub;
    btnEl.parentElement.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');
    renderCommunityFeed();
}

function renderCommunityFeed() {
    const feedEl = document.getElementById('community-posts-feed');
    if (!feedEl) return;

    let list = communityPosts;
    if (currentCommunityFilter !== 'all') {
        list = list.filter(p => p.subject === currentCommunityFilter);
    }

    if (list.length === 0) {
        feedEl.innerHTML = `
            <div class="discussion-card" style="text-align:center; color:var(--text-muted); padding:36px;">
                <p style="font-size:15px;">💬 暂无该分类下的讨论帖</p>
                <p style="font-size:12.5px; margin-top:6px;">来发布第一条公式推导或疑难问题吧！</p>
            </div>
        `;
        return;
    }

    const tagMap = {
        physics: { label: '⚛ 物理', cls: 'tag-physics' },
        math: { label: '∫ 高数', cls: 'tag-math' },
        chemistry: { label: '🧪 化学', cls: 'tag-chemistry' },
        biology: { label: '🧬 生物', cls: 'tag-biology' },
        general: { label: '💡 综合', cls: 'tag-general' }
    };

    feedEl.innerHTML = list.map(post => {
        const tag = tagMap[post.subject] || tagMap.general;
        const initial = (post.authorName || '理')[0].toUpperCase();
        const replies = Array.isArray(post.replies) ? post.replies : [];
        const isAuthor = currentUser && currentUser.uid === post.authorUid;

        const repliesHtml = replies.map(r => `
            <div class="reply-item">
                <strong style="color:var(--primary-color);">${r.authorName}：</strong>
                <span>${r.text}</span>
                <span style="font-size:11px; color:var(--text-muted); margin-left:8px;">${formatTimeAgo(r.createdAt)}</span>
            </div>
        `).join('');

        return `
            <div class="discussion-card">
                <div class="post-meta-header">
                    <div class="post-author-info">
                        <div class="avatar-circle">${initial}</div>
                        <div>
                            <div style="font-size:13.5px; font-weight:700; color:#fff;">${post.authorName}</div>
                            <div style="font-size:11.5px; color:var(--text-muted);">${formatTimeAgo(post.createdAt)}</div>
                        </div>
                    </div>
                    <span class="post-tag ${tag.cls}">${tag.label}</span>
                </div>

                <div class="post-title">${post.title}</div>
                <div class="post-body">${post.content}</div>

                <div class="post-footer-actions">
                    <button class="action-chip" onclick="likeCommunityPost('${post.id}')">
                        👍 赞 (${post.likes || 0})
                    </button>
                    <button class="action-chip" onclick="toggleReplyBox('${post.id}')">
                        💬 回复 (${replies.length})
                    </button>
                    ${isAuthor ? `<button class="action-chip" style="color:#f87171;" onclick="deleteCommunityPost('${post.id}')">🗑 删除</button>` : ''}
                </div>

                <div class="replies-box" id="reply-box-${post.id}" style="display: ${replies.length > 0 ? 'block' : 'none'};">
                    <div id="replies-list-${post.id}">${repliesHtml}</div>
                    <div class="reply-input-row">
                        <input type="text" id="reply-input-${post.id}" class="composer-input" style="flex:1; padding:6px 12px; font-size:12.5px;" placeholder="写下你的解答或补充（支持 $LaTeX$）...">
                        <button class="btn-primary" style="padding:6px 14px; font-size:12px;" onclick="submitCommunityReply('${post.id}')">回复</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    renderLatexIn(feedEl);
}

function toggleReplyBox(postId) {
    const box = document.getElementById(`reply-box-${postId}`);
    if (box) {
        box.style.display = box.style.display === 'none' ? 'block' : 'none';
    }
}

function likeCommunityPost(postId) {
    if (!currentUser) { alert('请先登录后再点赞'); return; }
    const post = communityPosts.find(p => p.id === postId);
    if (!post) return;

    const newLikes = (post.likes || 0) + 1;
    db.collection('discussions').doc(postId).update({ likes: newLikes });
}

function submitCommunityReply(postId) {
    if (!currentUser) { alert('请先登录后再参与回复'); return; }
    const input = document.getElementById(`reply-input-${postId}`);
    const text = input ? input.value.trim() : '';
    if (!text) return;

    const post = communityPosts.find(p => p.id === postId);
    if (!post) return;

    const updatedReplies = [...(post.replies || []), {
        authorName: currentUser.displayName || currentUser.email || '理科同学',
        authorUid: currentUser.uid,
        text,
        createdAt: Date.now()
    }];

    db.collection('discussions').doc(postId).update({ replies: updatedReplies }).then(() => {
        input.value = '';
    });
}

function deleteCommunityPost(postId) {
    if (!confirm('确定要删除这条讨论吗？')) return;
    db.collection('discussions').doc(postId).delete();
}

// 10.2 小节底部随堂评论
function renderSectionComments(sec) {
    const listEl = document.getElementById('sec-comments-list');
    if (!listEl) return;

    const comments = Array.isArray(sec.comments) ? sec.comments : [];
    if (comments.length === 0) {
        listEl.innerHTML = `<p style="font-size:13px; color:var(--text-muted);">暂无随堂提问，成为第一个在本节留下思考的同学吧！</p>`;
        return;
    }

    listEl.innerHTML = comments.map(c => `
        <div class="reply-item" style="background:rgba(0,0,0,0.2); padding:10px 14px; border-radius:8px; margin-bottom:8px;">
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                <strong style="color:var(--primary-color); font-size:13px;">${c.authorName}</strong>
                <span style="font-size:11px; color:var(--text-muted);">${formatTimeAgo(c.createdAt)}</span>
            </div>
            <div style="font-size:13.5px; color:#e2e8f0;">${c.text}</div>
        </div>
    `).join('');

    renderLatexIn(listEl);
}

function submitSectionComment() {
    if (!currentUser) { alert('请先登录后再发表评论'); return; }
    const input = document.getElementById('sec-comment-input');
    const text = input ? input.value.trim() : '';
    if (!text) return;

    const sec = sections.find(s => s.id === currentSectionId);
    if (!sec) return;

    const updatedComments = [...(sec.comments || []), {
        authorName: currentUser.displayName || currentUser.email || '理科同学',
        authorUid: currentUser.uid,
        text,
        createdAt: Date.now()
    }];

    db.collection('sections').doc(currentSectionId).update({ comments: updatedComments })
        .then(() => { input.value = ''; })
        .catch(e => alert('评论发送失败：' + e.message));
}

/* ========== 11. 弹窗新建与修改（含可视化随堂练习题编辑器） ========== */

function renderModalQuizBuilder(quizArray = []) {
    const container = document.getElementById('modal-quiz-list');
    container.innerHTML = '';
    quizArray.forEach((q, idx) => appendModalQuizDOM(q, idx));
}

function appendModalQuizDOM(q = { question: '', options: ['', '', '', ''], answerIndex: 0, explanation: '' }) {
    const container = document.getElementById('modal-quiz-list');
    const item = document.createElement('div');
    item.className = 'quiz-builder-item';

    const opts = Array.isArray(q.options) && q.options.length === 4 ? q.options : ['', '', '', ''];

    item.innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
            <strong style="font-size:12.5px; color:var(--text-muted);">选择题项</strong>
            <button type="button" style="background:none; border:none; color:#f87171; cursor:pointer; font-size:12px;" onclick="this.closest('.quiz-builder-item').remove()">✕ 移除此题</button>
        </div>
        <input type="text" class="qb-question" placeholder="题干描述（支持 $LaTeX$ 公式）" value="${(q.question || '').replace(/"/g, '&quot;')}">
        <div class="quiz-builder-grid">
            <input type="text" class="qb-opt-0" placeholder="选项 A" value="${(opts[0] || '').replace(/"/g, '&quot;')}">
            <input type="text" class="qb-opt-1" placeholder="选项 B" value="${(opts[1] || '').replace(/"/g, '&quot;')}">
            <input type="text" class="qb-opt-2" placeholder="选项 C" value="${(opts[2] || '').replace(/"/g, '&quot;')}">
            <input type="text" class="qb-opt-3" placeholder="选项 D" value="${(opts[3] || '').replace(/"/g, '&quot;')}">
        </div>
        <div class="quiz-builder-grid">
            <select class="qb-answer">
                <option value="0" ${Number(q.answerIndex) === 0 ? 'selected' : ''}>正确答案：A</option>
                <option value="1" ${Number(q.answerIndex) === 1 ? 'selected' : ''}>正确答案：B</option>
                <option value="2" ${Number(q.answerIndex) === 2 ? 'selected' : ''}>正确答案：C</option>
                <option value="3" ${Number(q.answerIndex) === 3 ? 'selected' : ''}>正确答案：D</option>
            </select>
            <input type="text" class="qb-explanation" placeholder="答案解析（支持 $LaTeX$ 公式）" value="${(q.explanation || '').replace(/"/g, '&quot;')}">
        </div>
    `;
    container.appendChild(item);
}

function addModalQuizItem() {
    appendModalQuizDOM();
}

function collectModalQuizItems() {
    const items = document.querySelectorAll('#modal-quiz-list .quiz-builder-item');
    const quizList = [];
    items.forEach(el => {
        const question = el.querySelector('.qb-question').value.trim();
        const opt0 = el.querySelector('.qb-opt-0').value.trim();
        const opt1 = el.querySelector('.qb-opt-1').value.trim();
        const opt2 = el.querySelector('.qb-opt-2').value.trim();
        const opt3 = el.querySelector('.qb-opt-3').value.trim();
        const answerIndex = Number(el.querySelector('.qb-answer').value);
        const explanation = el.querySelector('.qb-explanation').value.trim();

        if (question && (opt0 || opt1)) {
            quizList.push({
                question,
                options: [opt0, opt1, opt2, opt3],
                answerIndex,
                explanation
            });
        }
    });
    return quizList;
}

function openAddModal() {
    if (!currentUser) { alert('请先登录后再新建小节'); return; }
    currentSectionId = null;
    document.getElementById('modal-heading').innerText = '新建小节笔记与随堂练习';
    const select = document.getElementById('modal-chapter-select');
    select.innerHTML = '';

    const chapters = getSubjectChapters(currentSubject);
    chapters.forEach(ch => {
        select.innerHTML += `<option value="${ch.id}" ${ch.id === currentChapterId ? 'selected' : ''}>${ch.title}</option>`;
    });

    document.getElementById('modal-title').value = '';
    document.getElementById('modal-desc').value = '';
    document.getElementById('modal-content').value = '';
    renderModalQuizBuilder([]);
    document.getElementById('modal').style.display = 'flex';
}

function openEditModal() {
    if (!currentUser) { alert('请先登录后再编辑'); return; }
    const sec = sections.find(s => s.id === currentSectionId);
    if (!sec) return;
    document.getElementById('modal-heading').innerText = '编辑小节笔记与随堂练习';
    const select = document.getElementById('modal-chapter-select');
    select.innerHTML = '';

    const chapters = getSubjectChapters(sec.subject || currentSubject);
    chapters.forEach(ch => select.innerHTML += `<option value="${ch.id}">${ch.title}</option>`);

    select.value = sec.chapterId;
    document.getElementById('modal-title').value = sec.title;
    document.getElementById('modal-desc').value = sec.desc || '';
    document.getElementById('modal-content').value = sec.content;
    renderModalQuizBuilder(Array.isArray(sec.quiz) ? sec.quiz : []);
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function saveSectionNote() {
    if (!currentUser) { alert('请先登录后再保存'); return; }

    const chapterId = document.getElementById('modal-chapter-select').value;
    const title = document.getElementById('modal-title').value.trim();
    const desc = document.getElementById('modal-desc').value.trim();
    const content = document.getElementById('modal-content').value;
    const quiz = collectModalQuizItems();

    if (!title) { alert('小节标题不能为空！'); return; }

    if (currentSectionId) {
        db.collection('sections').doc(currentSectionId).update({ chapterId, title, desc, content, quiz })
            .then(() => openSectionDetail(currentSectionId))
            .catch(e => alert('保存失败：' + e.message));
    } else {
        const newId = 'sec-' + Date.now();
        db.collection('sections').doc(newId).set({
            subject: currentSubject,
            chapterId,
            title,
            desc,
            content,
            quiz,
            comments: [],
            status: 'red',
            custom: true
        }).then(() => {
            currentChapterId = chapterId;
            openChapter(chapterId);
        }).catch(e => alert('保存失败：' + e.message));
    }

    closeModal();
}

/* ========== 12. 显式挂载到全局 window 对象 ========== */
window.navTo = navTo;
window.switchMainTab = switchMainTab;
window.openSubject = openSubject;
window.openChapter = openChapter;
window.openSectionDetail = openSectionDetail;
window.filterVolume = filterVolume;
window.handleSearch = handleSearch;
window.checkAnswer = checkAnswer;
window.jumpToSectionQuiz = jumpToSectionQuiz;
window.setSectionStatus = setSectionStatus;
window.openAddModal = openAddModal;
window.openEditModal = openEditModal;
window.closeModal = closeModal;
window.saveSectionNote = saveSectionNote;
window.addModalQuizItem = addModalQuizItem;

// 练习区与交流区全局函数
window.filterPracticeSubject = filterPracticeSubject;
window.openPracticeForCurrentSubject = openPracticeForCurrentSubject;
window.startRandomPractice = startRandomPractice;
window.resetPracticeSession = resetPracticeSession;
window.submitPracticeAnswer = submitPracticeAnswer;
window.jumpPracticeQuestion = jumpPracticeQuestion;

window.createCommunityPost = createCommunityPost;
window.filterCommunityPosts = filterCommunityPosts;
window.likeCommunityPost = likeCommunityPost;
window.toggleReplyBox = toggleReplyBox;
window.submitCommunityReply = submitCommunityReply;
window.deleteCommunityPost = deleteCommunityPost;
window.submitSectionComment = submitSectionComment;
