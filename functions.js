        let currentSubject = 'physics';
        let currentVolumeFilter = 'all';
        let currentChapterId = '';
        let currentSectionId = '';

        function navTo(levelId) {
            document.querySelectorAll('.view-page').forEach(el => el.classList.remove('active'));
            document.getElementById(levelId).classList.add('active');
        }

        // 3. 统计全科进度
        function updateMainBadges() {
            const pCount = sections.length;
            const greenCount = sections.filter(s => s.status === 'green').length;
            const percent = pCount > 0 ? Math.round((greenCount / pCount) * 100) : 0;

            const pBadge = document.getElementById('badge-physics');
            if (pBadge) pBadge.innerText = `27 章 / 已存 ${sections.filter(s => s.subject === 'physics' || !s.subject).length} 节`;

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

        // 4. 跨学科全局搜索
        function handleSearch(keyword) {
            if (!keyword.trim()) {
                if (currentChapterId) navTo('level-3');
                else navTo('level-1');
                return;
            }

            const grid = document.getElementById('search-grid');
            grid.innerHTML = '';
            document.getElementById('search-title').innerText = `搜寻 "${keyword}" 的结果：`;

            const results = sections.filter(s => 
                s.title.toLowerCase().includes(keyword.toLowerCase()) || 
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
                    card.innerHTML = `<h3>${sec.title}</h3><p>${sec.desc || '点击查看完整笔记...'}</p>`;
                    grid.appendChild(card);
                });
            }
            navTo('level-search');
        }

        // 5. 打开对应学科
        function openSubject(sub) {
            currentSubject = sub;
            const subNames = { physics: '物理', math: '高级数学', chemistry: '化学', biology: '生物' };
            
            document.getElementById('nav-subject-name').innerText = subNames[sub];
            document.getElementById('nav-subject-link').innerText = subNames[sub];
            document.getElementById('subject-title').innerText = `${subNames[sub]} · 章节目录`;

            // 只有物理显示“上中下册”筛选框，其他学科隐藏
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
                card.className = 'card';
                card.onclick = () => openChapter(ch.id);
                card.innerHTML = `
                    <div>
                        <h3>${ch.title}</h3>
                        <p>${ch.desc || ''}</p>
                    </div>
                    <span class="badge" style="background:#eff6ff; color:#2563eb;">${count} 个已写小节</span>
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
            const subSections = sections.filter(s => s.chapterId === currentChapterId);

            if(subSections.length === 0) {
                grid.innerHTML = `<p style="color:var(--text-muted); grid-column:1/-1;">本章暂无小节，请点击右上角“+ 新建小节”添加！</p>`;
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

        // 6. 详情页与题目渲染
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
            navTo('level-4');
        
            if (window.renderMathInElement) {
                renderMathInElement(document.getElementById('detail-content'), {
                    delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}],
                    throwOnError: false
                });
                renderMathInElement(document.getElementById('quiz-container'), {
                    delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}],
                    throwOnError: false
                });
            }
        }

        function setSectionStatus(status) {
            const sec = sections.find(s => s.id === currentSectionId);
            if (sec) {
                sec.status = status;
                localStorage.setItem('all_subjects_sections', JSON.stringify(sections));
                
                document.querySelectorAll('.status-btn').forEach(b => b.classList.remove('active'));
                document.getElementById(`btn-status-${status}`).classList.add('active');
                updateMainBadges();
            }
        }

        function renderQuizContainer(sec) {
            const container = document.getElementById('quiz-container');
            container.innerHTML = `
                <div class="quiz-card">
                    <p style="font-weight:600; font-size:14px; margin-bottom:8px;">[概念检验] 关于本节核心知识点，下列说法正确的是：</p>
                    <div class="quiz-option" onclick="checkAnswer(this, false)">A. 选项概念描述不严谨，忽略了关键适用条件。</div>
                    <div class="quiz-option" onclick="checkAnswer(this, true)">B. 严格遵循公式及定理适用边界，结论正确。</div>
                    <div class="quiz-option" onclick="checkAnswer(this, false)">C. 混淆了基本物理/数学量与推导量。</div>
                    <div class="quiz-explanation">
                        <strong>💡 正确答案：B</strong><br>
                        解析：理科知识推导需特别注意公式的成立前提条件与量纲单位统一。
                    </div>
                </div>
            `;
        }

        function checkAnswer(optEl, isCorrect) {
            const card = optEl.closest('.quiz-card');
            card.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('correct', 'wrong'));
            if (isCorrect) optEl.classList.add('correct');
            else optEl.classList.add('wrong');
            card.querySelector('.quiz-explanation').style.display = 'block';
        }

        // 7. 弹窗新建与修改
        function openAddModal() {
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
            const sec = sections.find(s => s.id === currentSectionId);
            if(!sec) return;
            document.getElementById('modal-heading').innerText = '编辑小节笔记';
            const select = document.getElementById('modal-chapter-select');
            select.innerHTML = '';

            const chapters = getSubjectChapters(sec.subject || currentSubject);
            chapters.forEach(ch => select.innerHTML += `<option value="${ch.id}">${ch.title}</option>`);

            select.value = sec.chapterId;
            document.getElementById('modal-title').value = sec.title;
            document.getElementById('modal-desc').value = sec.desc;
            document.getElementById('modal-content').value = sec.content;
            document.getElementById('modal').style.display = 'flex';
        }

        function closeModal() { document.getElementById('modal').style.display = 'none'; }

        function saveSectionNote() {
            const chapterId = document.getElementById('modal-chapter-select').value;
            const title = document.getElementById('modal-title').value;
            const desc = document.getElementById('modal-desc').value;
            const content = document.getElementById('modal-content').value;

            if(!title) { alert('标题不能为空！'); return; }

            if(currentSectionId) {
                const sec = sections.find(s => s.id === currentSectionId);
                sec.chapterId = chapterId; sec.title = title; sec.desc = desc; sec.content = content;
                openSectionDetail(currentSectionId);
            } else {
                const newSec = { 
                    id: 'sec-' + Date.now(), 
                    subject: currentSubject,
                    chapterId, title, desc, content, status: 'red' 
                };
                sections.unshift(newSec);
                currentChapterId = chapterId;
                openChapter(chapterId);
            }

            localStorage.setItem('all_subjects_sections', JSON.stringify(sections));
            closeModal();
            updateMainBadges();
        }
