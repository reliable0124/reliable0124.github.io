let currentSubject = 'physics';
let currentVolumeFilter = 'all';
let currentChapterId = '';
let currentSectionId = '';
let sections = [];
let currentUser = null;

// 1. 小节内随堂小测状态（仅限小节内部）
let quizState = { index: 0, questions: [] };

// 2. 独立专项练习中心 & 课件资料库状态
let customPracticeItems = []; // 来自 Firestore 'practice_items' 集合
let editingPracticeItemId = null;
let practiceState = {
    subMode: 'quiz',      // 'quiz' (专项选择题) | 'docs' (PPT/PDF 课件库)
    subjectFilter: 'all', // 'all' | 'physics' | 'math' | 'chemistry' | 'biology'
    questions: [],
    docs: [],
    currentIndex: 0,
    answeredMap: {}       // key: index -> { selected, isCorrect }
};

// 3. 社区讨论区状态
let communityPosts = [];
let currentCommunityFilter = 'all';

/* ========== 0. 内置默认专项题库与示范课件（与课内随堂测验独立） ========== */

const builtInPracticeQuestions = [
    {
        id: 'builtin-q1',
        type: 'question',
        subject: 'physics',
        sourceTitle: '力学综合专项 · 匀变速直线运动',
        question: '一质点做匀加速直线运动，初速度为 $v_0 = 2\\text{ m/s}$，加速度 $a = 3\\text{ m/s}^2$，则它在第 $3\\text{ s}$ 内的位移大小为：',
        options: ['$9.5\\text{ m}$', '$19.5\\text{ m}$', '$11.0\\text{ m}$', '$12.5\\text{ m}$'],
        answerIndex: 0,
        explanation: '第 $3\\text{ s}$ 内的位移等于前 $3\\text{ s}$ 位移减去前 $2\\text{ s}$ 位移：$\\Delta x = x_3 - x_2 = (2\\times 3 + \\frac{1}{2}\\times 3\\times 3^2) - (2\\times 2 + \\frac{1}{2}\\times 3\\times 2^2) = 19.5 - 10 = 9.5\\text{ m}$。'
    },
    {
        id: 'builtin-q2',
        type: 'question',
        subject: 'physics',
        sourceTitle: '流体力学专项 · 伯努利方程应用',
        question: '理想流体在水平变径管中作稳定流动时，在管径较细（横截面积较小）的位置，流体的：',
        options: ['流速较大，压强较大', '流速较大，压强较小', '流速较小，压强较大', '流速与压强均不变'],
        answerIndex: 1,
        explanation: '由连续性方程 $A_1 v_1 = A_2 v_2$ 知截面积小处流速大；再由水平管伯努利方程 $P + \\frac{1}{2}\\rho v^2 = \\text{常量}$，流速大处静压强 $P$ 较小。'
    },
    {
        id: 'builtin-q3',
        type: 'question',
        subject: 'math',
        sourceTitle: '第3章 多项式专项 · 余式定理',
        question: '已知多项式 $f(x) = 2x^3 - ax^2 + x - 5$ 除以 $x - 2$ 的余式为 $5$，则常数 $a$ 的值为：',
        options: ['$1$', '$2$', '$3$', '$-2$'],
        answerIndex: 1,
        explanation: '由余式定理知 $f(2) = 5$，代入得 $2(2)^3 - a(2)^2 + 2 - 5 = 5 \\Rightarrow 16 - 4a - 3 = 5 \\Rightarrow 4a = 8 \\Rightarrow a = 2$。'
    },
    {
        id: 'builtin-q4',
        type: 'question',
        subject: 'math',
        sourceTitle: '第8章 三角学专项 · 同角三角关系',
        question: '若 $\\sin\\theta + \\cos\\theta = \\frac{\\sqrt{2}}{2}$，则 $\\sin\\theta\\cos\\theta$ 的值为：',
        options: ['$-\\frac{1}{4}$', '$\\frac{1}{4}$', '$-\\frac{1}{2}$', '$\\frac{1}{2}$'],
        answerIndex: 0,
        explanation: '将已知等式两边平方：$\\sin^2\\theta + 2\\sin\\theta\\cos\\theta + \\cos^2\\theta = \\frac{1}{2}$，利用 $\\sin^2\\theta + \\cos^2\\theta = 1$ 得 $1 + 2\\sin\\theta\\cos\\theta = \\frac{1}{2} \\Rightarrow \\sin\\theta\\cos\\theta = -\\frac{1}{4}$。'
    },
    {
        id: 'builtin-q5',
        type: 'question',
        subject: 'chemistry',
        sourceTitle: '定性分析专项 · 常见阴离子检验',
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
        id: 'builtin-q6',
        type: 'question',
        subject: 'biology',
        sourceTitle: '细胞代谢专项 · 有氧呼吸电子传递链',
        question: '在有氧呼吸的三个阶段中，产生 $\\text{ATP}$ 数量最多、且需要氧气直接参与的阶段发生在：',
        options: ['细胞质基质（细胞溶胶）', '线粒体基质', '线粒体内膜', '叶绿体类囊体薄膜'],
        answerIndex: 2,
        explanation: '有氧呼吸第三阶段（氧化磷酸化）发生在线粒体内膜上，$\\text{NADH}$ 与 $\\text{FADH}_2$ 传递的电子与 $\\text{O}_2$ 结合生成水，同时合成大量 $\\text{ATP}$。'
    }
];

const builtInPracticeDocs = [
    {
        id: 'builtin-doc-1',
        type: 'document',
        subject: 'physics',
        docFormat: 'pdf',
        sourceTitle: '物理上册 · 力学与流体力学总复习',
        title: '高一理物理上册核心公式与受力分析汇总讲义 (PDF)',
        url: '#',
        desc: '涵盖牛顿运动定律、静力学力矩平衡、动量守恒与伯努利方程推导清单（管理员可登录后上传真实 PDF 链接）。'
    },
    {
        id: 'builtin-doc-2',
        type: 'document',
        subject: 'math',
        docFormat: 'ppt',
        sourceTitle: '高数上册 · 第3章 多项式',
        title: '多项式综合除法、余式定理与部分分式分解专题课件 (PPT)',
        url: '#',
        desc: '包含待定系数法拆分真分式、重因式处理技巧及历年统考典型例题解析。'
    }
];

/* ========== 页面导航与公式渲染辅助 ========== */

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
        initPracticeCenter(practiceState.subjectFilter || 'all');
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

/* ========== 1. Google 登录与权限状态 ========== */

function handleLogin() {
    if (typeof auth === 'undefined') {
        alert('Firebase 尚未初始化，请检查 index.html 底部是否包含 Firebase 配置脚本！');
        return;
    }
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch(err => alert('登录失败：' + err.message));
}

if (typeof auth !== 'undefined') {
    auth.onAuthStateChanged(user => {
        currentUser = user;
        const statusEl = document.getElementById('user-status');
        const loginBtn = document.getElementById('login-btn');

        if (user) {
            if (statusEl) statusEl.innerText = user.displayName || user.email || '已登录';
            if (loginBtn) {
                loginBtn.innerText = '登出';
                loginBtn.onclick = () => auth.signOut();
            }
        } else {
            if (statusEl) statusEl.innerText = '未登录（仅浏览）';
            if (loginBtn) {
                loginBtn.innerText = 'Google 登录';
                loginBtn.onclick = handleLogin;
            }
        }
        updateEditableUI();

        if (document.getElementById('level-community')?.classList.contains('active')) {
            renderCommunityFeed();
        }
        if (document.getElementById('level-practice')?.classList.contains('active')) {
            renderPracticeSubViews();
        }
    });
}

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

/* ========== 2. Firestore 实时数据同步（小节 + 专项库 + 交流区） ========== */

async function initAndListen() {
    if (typeof db === 'undefined') {
        console.error('Firestore db 未定义，请确认 index.html 已正确引入 Firebase SDK。');
        return;
    }

    try {
        const snap = await db.collection('sections').get({ source: 'server' });
        const existingIds = new Set(snap.docs.map(d => d.id));

        if (typeof defaultSections !== 'undefined' && Array.isArray(defaultSections)) {
            const missing = defaultSections.filter(s => !existingIds.has(s.id));
            for (const sec of missing) {
                await db.collection('sections').doc(sec.id).set(sec);
            }
        }
    } catch (e) {
        console.warn('初始播种检查跳过或受限：', e);
    }

    // 2.1 监听小节笔记变化
    db.collection('sections').onSnapshot(snapshot => {
        sections = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        updateMainBadges();
        if (document.getElementById('level-2')?.classList.contains('active')) renderChaptersGrid();
        if (document.getElementById('level-3')?.classList.contains('active')) renderSectionsGrid();
        if (document.getElementById('level-4')?.classList.contains('active') && currentSectionId) {
            const updatedSec = sections.find(s => s.id === currentSectionId);
            if (updatedSec) renderSectionComments(updatedSec);
        }
    }, err => console.error('Firestore sections 同步失败：', err));

    // 2.2 监听独立专项题库与课件资料变化（前端按时间倒序，避免缺失字段被过滤）
    db.collection('practice_items').onSnapshot(snapshot => {
        customPracticeItems = snapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() }))
            .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        if (document.getElementById('level-practice')?.classList.contains('active')) {
            initPracticeCenter(practiceState.subjectFilter);
        }
    }, err => {
        console.warn('专项题库集合读取提示：', err);
    });

    // 2.3 监听社区讨论帖变化（前端按时间倒序）
    db.collection('discussions').onSnapshot(snapshot => {
        communityPosts = snapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() }))
            .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        if (document.getElementById('level-community')?.classList.contains('active')) {
            renderCommunityFeed();
        }
    }, err => {
        console.warn('社区讨论集合读取提示：', err);
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

    const chapterCounts = {
        math: (typeof mathChapters !== 'undefined') ? mathChapters.length : 13,
        chemistry: (typeof chemChapters !== 'undefined') ? chemChapters.length : 35,
        biology: (typeof bioChapters !== 'undefined') ? bioChapters.length : 19
    };

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
                    <span>🎯 ${quizCount} 道随堂题</span>
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

/* ========== 6. 详情页 + 删除小节 + 上下节切换 ========== */

function openSectionDetail(secId) {
    currentSectionId = secId;
    const sec = sections.find(s => s.id === secId);
    if (!sec) return;

    if (sec.chapterId) currentChapterId = sec.chapterId;
    if (sec.subject) currentSubject = sec.subject;

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

function deleteCurrentSection() {
    if (!currentUser) {
        alert('请先登录后再执行删除操作！');
        return;
    }
    const sec = sections.find(s => s.id === currentSectionId);
    if (!sec) return;

    if (!confirm(`确定要彻底删除小节「${sec.title}」吗？删除后不可恢复。`)) return;

    const targetChapterId = sec.chapterId || currentChapterId;
    db.collection('sections').doc(currentSectionId).delete().then(() => {
        currentSectionId = '';
        if (targetChapterId) {
            openChapter(targetChapterId);
        } else {
            switchMainTab('level-1');
        }
    }).catch(err => {
        alert('删除小节失败：' + err.message);
    });
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

/* ========== 8. 小节内随堂小测（仅限本节内部，不混入专项库） ========== */

function renderQuizContainer(sec) {
    const container = document.getElementById('quiz-container');
    const questions = Array.isArray(sec.quiz) && sec.quiz.length > 0 ? sec.quiz : null;

    if (!questions) {
        container.innerHTML = `
            <div class="quiz-card" style="text-align:center; color:var(--text-muted);">
                <p>📭 本节暂无随堂小测题</p>
                <p style="font-size:12.5px; margin-top:4px;">登录后点击「+ 管理本节随堂题」即可为本节添加课内巩固题</p>
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
                <span class="quiz-progress-badge">随堂第 ${index + 1} / ${questions.length} 题</span>
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

/* ========== 9. 独立专项练习 & PPT/PDF 课件中心（Practice Center） ========== */

function getIndependentPracticeQuestions(subjectFilter = 'all') {
    const customQs = customPracticeItems
        .filter(item => item.type === 'question' || !item.type)
        .map(item => ({
            id: item.id,
            isCustom: true,
            subject: item.subject || 'physics',
            sourceTitle: item.sourceTitle || '自定义专项题',
            question: item.question,
            options: Array.isArray(item.options) ? item.options : ['', '', '', ''],
            answerIndex: Number(item.answerIndex || 0),
            explanation: item.explanation || ''
        }));

    const combined = [...customQs, ...builtInPracticeQuestions];
    if (subjectFilter === 'all') return combined;
    return combined.filter(q => q.subject === subjectFilter);
}

function getIndependentPracticeDocs(subjectFilter = 'all') {
    const customDocs = customPracticeItems
        .filter(item => item.type === 'document')
        .map(item => ({
            id: item.id,
            isCustom: true,
            subject: item.subject || 'physics',
            docFormat: item.docFormat || 'pdf',
            sourceTitle: item.sourceTitle || '复习讲义',
            title: item.title || '未命名课件资料',
            url: item.url || '#',
            desc: item.desc || ''
        }));

    const combined = [...customDocs, ...builtInPracticeDocs];
    if (subjectFilter === 'all') return combined;
    return combined.filter(d => d.subject === subjectFilter);
}

function initPracticeCenter(subjectFilter = 'all') {
    practiceState.subjectFilter = subjectFilter;
    practiceState.questions = getIndependentPracticeQuestions(subjectFilter);
    practiceState.docs = getIndependentPracticeDocs(subjectFilter);
    practiceState.currentIndex = 0;
    practiceState.answeredMap = {};

    updatePracticeCountsAndBadges();
    renderPracticeSubViews();
}

function switchPracticeSubMode(mode) {
    practiceState.subMode = mode;
    document.getElementById('mode-card-quiz')?.classList.toggle('active', mode === 'quiz');
    document.getElementById('mode-card-docs')?.classList.toggle('active', mode === 'docs');

    const quizView = document.getElementById('practice-subview-quiz');
    const docsView = document.getElementById('practice-subview-docs');

    if (quizView) quizView.style.display = mode === 'quiz' ? 'block' : 'none';
    if (docsView) docsView.style.display = mode === 'docs' ? 'block' : 'none';

    renderPracticeSubViews();
}

function renderPracticeSubViews() {
    updatePracticeCountsAndBadges();
    if (practiceState.subMode === 'docs') {
        renderPracticeDocsGrid();
    } else {
        updatePracticeStatsUI();
        renderPracticeHubQuestion();
    }
}

function updatePracticeCountsAndBadges() {
    const qBadge = document.getElementById('badge-mode-quiz');
    const dBadge = document.getElementById('badge-mode-docs');
    if (qBadge) qBadge.innerText = `${practiceState.questions.length} 题`;
    if (dBadge) dBadge.innerText = `${practiceState.docs.length} 份`;
}

function filterPracticeSubject(sub, btnEl) {
    document.querySelectorAll('#practice-subj-tabs .tab-btn').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    initPracticeCenter(sub);
}

function openPracticeForCurrentSubject() {
    switchMainTab('level-practice');
    const subOrder = ['all', 'physics', 'math', 'chemistry', 'biology'];
    const tabs = document.querySelectorAll('#practice-subj-tabs .tab-btn');
    tabs.forEach((b, idx) => {
        b.classList.toggle('active', subOrder[idx] === currentSubject);
    });
    initPracticeCenter(currentSubject);
}

function startRandomPractice(count = 5) {
    switchPracticeSubMode('quiz');
    const pool = getIndependentPracticeQuestions(practiceState.subjectFilter);
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    practiceState.questions = shuffled.slice(0, Math.min(count, shuffled.length));
    practiceState.currentIndex = 0;
    practiceState.answeredMap = {};
    updatePracticeCountsAndBadges();
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

    const totalEl = document.getElementById('prac-total-count');
    const ansEl = document.getElementById('prac-answered-count');
    const corrEl = document.getElementById('prac-correct-count');
    const rateEl = document.getElementById('prac-accuracy-rate');

    if (totalEl) totalEl.innerText = total;
    if (ansEl) ansEl.innerText = answeredCount;
    if (corrEl) corrEl.innerText = correctCount;
    if (rateEl) rateEl.innerText = `${rate}%`;
}

function renderPracticeHubQuestion() {
    const container = document.getElementById('practice-hub-container');
    if (!container) return;

    const { questions, currentIndex, answeredMap } = practiceState;
    if (questions.length === 0) {
        container.innerHTML = `<p style="color:var(--text-muted); text-align:center; padding:30px;">当前筛选下暂无专项练习题，登录后可点击右上角「+ 新增专项题 / 上传 PPT·PDF」添加！</p>`;
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

    const adminActionsHtml = (currentUser && q.isCustom) ? `
        <button class="action-chip" onclick="openPracticeItemModal('${q.id}')">✏️ 编辑此题</button>
        <button class="action-chip" style="color:#f87171;" onclick="deletePracticeItem('${q.id}')">🗑 删除此题</button>
    ` : '';

    container.innerHTML = `
        <div class="quiz-top-meta">
            <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                ${subTagMap[q.subject] || ''}
                <span style="font-size:12.5px; color:var(--text-muted);">来源：${q.sourceTitle || '专项题库'}</span>
                ${adminActionsHtml}
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

function renderPracticeDocsGrid() {
    const grid = document.getElementById('practice-docs-grid');
    if (!grid) return;

    const docs = practiceState.docs;
    if (docs.length === 0) {
        grid.innerHTML = `<p style="color:var(--text-muted); grid-column:1/-1; text-align:center; padding:36px;">暂无该学科的 PPT / PDF 讲义课件，登录后点击右上角「+ 新增专项题 / 上传 PPT·PDF」即可分享！</p>`;
        return;
    }

    const formatBadgeMap = {
        pdf: '<span class="doc-type-badge doc-pdf">PDF 讲义/试卷</span>',
        ppt: '<span class="doc-type-badge doc-ppt">PPT 课件</span>',
        other: '<span class="doc-type-badge doc-other">复习资料</span>'
    };

    const subTagMap = {
        physics: '<span class="post-tag tag-physics">⚛ 物理</span>',
        math: '<span class="post-tag tag-math">∫ 高数</span>',
        chemistry: '<span class="post-tag tag-chemistry">🧪 化学</span>',
        biology: '<span class="post-tag tag-biology">🧬 生物</span>'
    };

    grid.innerHTML = docs.map(doc => {
        const badge = formatBadgeMap[doc.docFormat] || formatBadgeMap.pdf;
        const subTag = subTagMap[doc.subject] || '';
        const isSafeUrl = doc.url && doc.url !== '#';

        return `
            <div class="doc-resource-card">
                <div>
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-bottom:10px;">
                        ${subTag}
                        ${badge}
                    </div>
                    <div style="font-size:11.5px; color:var(--primary-color); font-weight:600; margin-bottom:4px;">${doc.sourceTitle || ''}</div>
                    <h3 style="font-size:16px; color:#fff; margin-bottom:8px; line-height:1.45;">${doc.title}</h3>
                    <p style="font-size:13px; color:var(--text-muted); line-height:1.6;">${doc.desc || '点击下方按钮在线预览或下载该课件资料。'}</p>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:12px; border-top:1px solid rgba(255,255,255,0.06);">
                    ${isSafeUrl
                        ? `<a href="${doc.url}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="text-decoration:none; display:inline-block;">📥 打开 / 下载课件</a>`
                        : `<button class="btn-secondary" onclick="alert('该示范条目暂未绑定外部文件链接，你可以点击右上角新增/编辑上传你自己的 PDF 或 PPT 链接！')">📎 示范条目</button>`
                    }
                    ${(currentUser && doc.isCustom) ? `
                        <div style="display:flex; gap:6px;">
                            <button class="action-chip" onclick="openPracticeItemModal('${doc.id}')">✏️</button>
                            <button class="action-chip" style="color:#f87171;" onclick="deletePracticeItem('${doc.id}')">🗑</button>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
}

/* ========== 9.2 独立专项练习弹窗（新增/修改专项题或 PPT/PDF） ========== */

function togglePracticeModalFields() {
    const typeEl = document.getElementById('pm-type');
    const qFields = document.getElementById('pm-question-fields');
    const dFields = document.getElementById('pm-document-fields');
    if (!typeEl || !qFields || !dFields) return;

    if (typeEl.value === 'document') {
        qFields.style.display = 'none';
        dFields.style.display = 'block';
    } else {
        qFields.style.display = 'block';
        dFields.style.display = 'none';
    }
}

function openPracticeItemModal(editId = null) {
    if (!currentUser) {
        alert('请先点击右上角 Google 登录后再添加专项题或课件！');
        return;
    }

    editingPracticeItemId = editId;
    const modal = document.getElementById('practice-modal');
    if (!modal) return;

    const heading = document.getElementById('prac-modal-heading');
    const subjEl = document.getElementById('pm-subject');
    const typeEl = document.getElementById('pm-type');
    const sourceEl = document.getElementById('pm-source');

    if (editId) {
        const item = customPracticeItems.find(x => x.id === editId);
        if (!item) return;
        if (heading) heading.innerText = '编辑专项练习 / 课件资料';
        if (subjEl) subjEl.value = item.subject || 'physics';
        if (typeEl) typeEl.value = item.type || 'question';
        if (sourceEl) sourceEl.value = item.sourceTitle || '';

        if (item.type === 'document') {
            if (document.getElementById('pm-doc-title')) document.getElementById('pm-doc-title').value = item.title || '';
            if (document.getElementById('pm-doc-format')) document.getElementById('pm-doc-format').value = item.docFormat || 'pdf';
            if (document.getElementById('pm-doc-url')) document.getElementById('pm-doc-url').value = item.url || '';
            if (document.getElementById('pm-doc-desc')) document.getElementById('pm-doc-desc').value = item.desc || '';
        } else {
            const opts = Array.isArray(item.options) ? item.options : ['', '', '', ''];
            if (document.getElementById('pm-question')) document.getElementById('pm-question').value = item.question || '';
            if (document.getElementById('pm-opt-0')) document.getElementById('pm-opt-0').value = opts[0] || '';
            if (document.getElementById('pm-opt-1')) document.getElementById('pm-opt-1').value = opts[1] || '';
            if (document.getElementById('pm-opt-2')) document.getElementById('pm-opt-2').value = opts[2] || '';
            if (document.getElementById('pm-opt-3')) document.getElementById('pm-opt-3').value = opts[3] || '';
            if (document.getElementById('pm-answer')) document.getElementById('pm-answer').value = String(item.answerIndex ?? 0);
            if (document.getElementById('pm-explanation')) document.getElementById('pm-explanation').value = item.explanation || '';
        }
    } else {
        if (heading) heading.innerText = '新增专项练习 / 上传 PPT·PDF 课件';
        if (subjEl) subjEl.value = practiceState.subjectFilter !== 'all' ? practiceState.subjectFilter : currentSubject;
        if (typeEl) typeEl.value = practiceState.subMode === 'docs' ? 'document' : 'question';
        if (sourceEl) sourceEl.value = '';

        ['pm-question', 'pm-opt-0', 'pm-opt-1', 'pm-opt-2', 'pm-opt-3', 'pm-explanation', 'pm-doc-title', 'pm-doc-url', 'pm-doc-desc'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.value = '';
        });
        if (document.getElementById('pm-answer')) document.getElementById('pm-answer').value = '0';
        if (document.getElementById('pm-doc-format')) document.getElementById('pm-doc-format').value = 'pdf';
    }

    togglePracticeModalFields();
    modal.style.display = 'flex';
}

function closePracticeItemModal() {
    const modal = document.getElementById('practice-modal');
    if (modal) modal.style.display = 'none';
    editingPracticeItemId = null;
}

function savePracticeItem() {
    if (!currentUser) { alert('请先登录后再保存'); return; }

    const subject = document.getElementById('pm-subject')?.value || 'physics';
    const type = document.getElementById('pm-type')?.value || 'question';
    const sourceTitle = document.getElementById('pm-source')?.value.trim() || '专项练习';

    let payload = {
        subject,
        type,
        sourceTitle,
        authorUid: currentUser.uid,
        updatedAt: Date.now()
    };

    if (type === 'document') {
        const title = document.getElementById('pm-doc-title')?.value.trim() || '';
        const docFormat = document.getElementById('pm-doc-format')?.value || 'pdf';
        const url = document.getElementById('pm-doc-url')?.value.trim() || '';
        const desc = document.getElementById('pm-doc-desc')?.value.trim() || '';

        if (!title || !url) {
            alert('请填写课件标题与文件链接（如仓库路径 files/xxx.pdf 或云盘分享链接）！');
            return;
        }
        payload = { ...payload, title, docFormat, url, desc };
    } else {
        const question = document.getElementById('pm-question')?.value.trim() || '';
        const opt0 = document.getElementById('pm-opt-0')?.value.trim() || '';
        const opt1 = document.getElementById('pm-opt-1')?.value.trim() || '';
        const opt2 = document.getElementById('pm-opt-2')?.value.trim() || '';
        const opt3 = document.getElementById('pm-opt-3')?.value.trim() || '';
        const answerIndex = Number(document.getElementById('pm-answer')?.value || 0);
        const explanation = document.getElementById('pm-explanation')?.value.trim() || '';

        if (!question || !opt0 || !opt1) {
            alert('请完整填写专项题题干和至少两个选项！');
            return;
        }
        payload = {
            ...payload,
            question,
            options: [opt0, opt1, opt2, opt3],
            answerIndex,
            explanation
        };
    }

    if (editingPracticeItemId) {
        db.collection('practice_items').doc(editingPracticeItemId).update(payload)
            .then(() => {
                closePracticeItemModal();
                switchPracticeSubMode(type === 'document' ? 'docs' : 'quiz');
            })
            .catch(err => alert('更新失败：' + err.message));
    } else {
        payload.createdAt = Date.now();
        db.collection('practice_items').add(payload)
            .then(() => {
                closePracticeItemModal();
                switchPracticeSubMode(type === 'document' ? 'docs' : 'quiz');
            })
            .catch(err => alert('保存失败：' + err.message));
    }
}

function deletePracticeItem(itemId) {
    if (!currentUser) return;
    if (!confirm('确定要从专项库中删除此条目吗？')) return;
    db.collection('practice_items').doc(itemId).delete()
        .catch(err => alert('删除失败：' + err.message));
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

        const likedBy = Array.isArray(post.likedBy) ? post.likedBy : [];
        const hasLiked = Boolean(currentUser && likedBy.includes(currentUser.uid));
        const likeCount = typeof post.likes === 'number' ? post.likes : likedBy.length;

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
                    <button class="action-chip ${hasLiked ? 'liked' : ''}" onclick="likeCommunityPost('${post.id}')">
                        ${hasLiked ? '❤️ 已赞' : '🤍 点赞'} (${likeCount})
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
    if (!currentUser) {
        alert('请先点击右上角 Google 登录后再点赞！');
        return;
    }

    const post = communityPosts.find(p => p.id === postId);
    if (!post) return;

    const uid = currentUser.uid;
    const likedBy = Array.isArray(post.likedBy) ? [...post.likedBy] : [];
    const currentLikes = typeof post.likes === 'number' ? post.likes : likedBy.length;
    const userIndex = likedBy.indexOf(uid);

    let updatedLikedBy;
    let updatedLikes;

    if (userIndex > -1) {
        likedBy.splice(userIndex, 1);
        updatedLikedBy = likedBy;
        updatedLikes = Math.max(0, currentLikes - 1);
    } else {
        likedBy.push(uid);
        updatedLikedBy = likedBy;
        updatedLikes = currentLikes + 1;
    }

    // 乐观更新本地状态，点击零延迟
    post.likedBy = updatedLikedBy;
    post.likes = updatedLikes;
    renderCommunityFeed();

    db.collection('discussions').doc(postId).update({
        likedBy: updatedLikedBy,
        likes: updatedLikes
    }).catch(err => {
        console.error('点赞同步失败：', err);
        alert('点赞保存失败：' + err.message);
    });
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
    }).catch(err => {
        alert('回复失败：' + err.message);
    });
}

function deleteCommunityPost(postId) {
    if (!confirm('确定要删除这条讨论吗？')) return;
    db.collection('discussions').doc(postId).delete().catch(err => {
        alert('删除失败：' + err.message);
    });
}

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

/* ========== 11. 弹窗 1：小节笔记与课内随堂小测管理 ========== */

function renderModalQuizBuilder(quizArray = []) {
    const container = document.getElementById('modal-quiz-list');
    if (!container) return;
    container.innerHTML = '';
    quizArray.forEach((q, idx) => appendModalQuizDOM(q, idx));
}

function appendModalQuizDOM(q = { question: '', options: ['', '', '', ''], answerIndex: 0, explanation: '' }) {
    const container = document.getElementById('modal-quiz-list');
    if (!container) return;
    const item = document.createElement('div');
    item.className = 'quiz-builder-item';

    const opts = Array.isArray(q.options) && q.options.length === 4 ? q.options : ['', '', '', ''];

    item.innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
            <strong style="font-size:12.5px; color:var(--text-muted);">随堂选择题项</strong>
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
    document.getElementById('modal-heading').innerText = '新建小节笔记与随堂小测';
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
    document.getElementById('modal-heading').innerText = '编辑小节笔记与随堂小测';
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
window.deleteCurrentSection = deleteCurrentSection;
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

// 独立专项练习区与 PPT/PDF 课件资料库全局函数
window.switchPracticeSubMode = switchPracticeSubMode;
window.filterPracticeSubject = filterPracticeSubject;
window.openPracticeForCurrentSubject = openPracticeForCurrentSubject;
window.startRandomPractice = startRandomPractice;
window.resetPracticeSession = resetPracticeSession;
window.submitPracticeAnswer = submitPracticeAnswer;
window.jumpPracticeQuestion = jumpPracticeQuestion;
window.openPracticeItemModal = openPracticeItemModal;
window.closePracticeItemModal = closePracticeItemModal;
window.togglePracticeModalFields = togglePracticeModalFields;
window.savePracticeItem = savePracticeItem;
window.deletePracticeItem = deletePracticeItem;

// 交流区与评论全局函数
window.createCommunityPost = createCommunityPost;
window.filterCommunityPosts = filterCommunityPosts;
window.likeCommunityPost = likeCommunityPost;
window.toggleReplyBox = toggleReplyBox;
window.submitCommunityReply = submitCommunityReply;
window.deleteCommunityPost = deleteCommunityPost;
window.submitSectionComment = submitSectionComment;
