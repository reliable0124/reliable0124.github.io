// physics-data.js
const defaultSections = [
{
id: 'sec-101',
subject: 'physics',
chapterId: 'p-ch1',
title: '1.1 质点 参考系',
desc: '理解理想化模型与参考系的相对性',
content: `
<h3>一、质点 (Particle)</h3>
<p>用来代替物体的有质量的点。质点是一种<b>理想化物理模型</b>。</p>
<div class="box-yellow">
<strong>物体可看作质点的条件：</strong><br>
物体的形状和大小对所研究的问题没有影响，或影响可以忽略不计时。
</div>
<h3>二、参考系 (Reference Frame)</h3>
<p>为了研究物体的运动而假定不动的物体。运动和静止都是相对参考系而言的。</p>
`
},
{
    id: 'sec-301',
    subject: 'physics',
    chapterId: 'p-ch3',
    title: '3.1 机械运动',
    desc: '-',
    content: `<p>笔记正文...</p>`
},
{
    id: 'sec-302',
    subject: 'physics',
    chapterId: 'p-ch3',
    title: '3.2 参照物、坐标系和参照系',
    desc: '-',
    content: `<p>笔记正文...</p>`
},
{
    id: 'sec-303',
    subject: 'physics',
    chapterId: 'p-ch3',
    title: '3.3 路程与位移',
    desc: '-',
    content: `<p>笔记正文...</p>`
},
{
    id: 'sec-304',
    subject: 'physics',
    chapterId: 'p-ch3',
    title: '3.4 匀速直线运动 速度和速率',
    desc: '-',
    content: `<p>笔记正文...</p>`
},
{
    id: 'sec-305',
    subject: 'physics',
    chapterId: 'p-ch3',
    title: '3.5 匀速直线运动图像',
    desc: '-',
    content: `<p>笔记正文...</p>`
},
{
    id: 'sec-306',
    subject: 'physics',
    chapterId: 'p-ch3',
    title: '3.6 变速直线运动 平均速度和瞬时速度',
    desc: '-',
    content: `<p>笔记正文...</p>`
},
{
    id: 'sec-307',
    subject: 'physics',
    chapterId: 'p-ch3',
    title: '3.7 变速直线运动的加速度',
    desc: '-',
    content: `<p>笔记正文...</p>`
},
{
    id: 'sec-308',
    subject: 'physics',
    chapterId: 'p-ch3',
    title: '3.8 匀加速直线运动',
    desc: '-',
    content: `<p>笔记正文...</p>`
},
{
    id: 'sec-401',
    subject: 'physics',
    chapterId: 'p-ch4',
    title: '4.1 力与运动',
    desc: '-',
    content: `
        <div class="box-yellow">
        <strong>力是改变物体运动状态的原因。</strong><br>
        </div>
    `
},
{
    id: 'sec-402',
    subject: 'physics',
    chapterId: 'p-ch4',
    title: '4.2 力的种类',
    desc: '力的基本概念与常见的三种力',
    content: `
        <h3>一、 力的基本概念</h3>
        <ul>
            <li><b>力的三要素：</b>大小、方向、作用点</li>
            <li><b>测量工具：</b>测力计（弹簧测力计）</li>
            <li><b>单位：</b>牛顿（符号：$\\text{N}$）</li>
            <li><b>力的图示：</b>用带有箭头的有向线段表示，线段的长度按一定比例画出，代表力的大小。</li>
        </ul>
        
        <h3>二、 重力 (Gravity)</h3>
        <p>物体由于地球的吸引而受到的力。</p>
        <ul>
            <li><b>重力公式：</b>物体所受的重力 $W$ 与其质量 $m$ 成正比：
                $$W = mg$$
            </li>
            <li><b>重力加速度/重力场强度 $g$：</b>在地球表面附近，$g \\approx 9.8\\text{ N/kg}$（或$\\text{m/s}^2$）。</li>
            <li><b>重心：</b>物体各部分受到的重力集中作用的等效作用点。</li>
            <li><b>质心：</b>物体质量分布的等效中心（几何中心与质量分布共同决定）。</li>
        </ul>

        <h3>三、 弹力 (Elastic Force)</h3>
        <p><b>1. 形变与弹性：</b></p>
        <ul>
            <li><b>形变：</b>物体在力的作用下形状或体积发生改变。</li>
            <li><b>弹性形变：</b>撤去外力后，物体能够完全恢复原状的形变。</li>
            <li><b>弹性限度：</b>超过此限度后，撤去外力物体将不能完全恢复原状。</li>
        </ul>

        <p><b>2. 弹力的方向与大小：</b></p>
        <div class="box-yellow">
            <strong>方向判断：</strong> 物体因想要恢复原状而产生弹力，因此<b>弹力的方向总是与外力施加的形变方向相反</b>，且垂直于接触面。
        </div>
        <ul>
            <li><b>胡克定律 (Hooke's Law)：</b>在弹性限度内，弹簧发生弹性形变时，弹力的大小 $F$ 与弹簧的伸长量（或缩短量）$x$ 成正比：
                $$F = kx$$
            </li>
            <li><b>劲度系数 $k$：</b>表示弹簧形变单位长度（如 $1\\text{m}$）所产生的弹力大小，单位为 $\\text{N/m}$。$k$ 的大小由弹簧自身的材料、长度和粗细决定。</li>
        </ul>

        <h3>四、 摩擦力 (Friction Force)</h3>
        <p>两个相互接触的物体，当它们发生相对运动或具有相对运动趋势时，在接触面上产生的阻碍相对运动或相对运动趋势的力。</p>

        <p><b>1. 滑动摩擦力 (Sliding Friction)：</b></p>
        <ul>
            <li><b>方向：</b>沿接触面切线方向，且与物体的<b>相对运动方向相反</b>。</li>
            <li><b>计算公式：</b>滑动摩擦力的大小与正压力 $F_N$ 成正比：
                $$f = \\mu_k F_N$$
            </li>
            <li><b>动摩擦因数 $\\mu_k$：</b>无单位，其大小取决于接触面材料及粗糙程度，与接触面积和运动速度无关。</li>
        </ul>
    
        <p><b>2. 静摩擦力 (Static Friction)：</b></p>
        <ul>
            <li><b>产生条件：</b>两物体相对静止，但存在<b>相对运动趋势</b>。</li>
            <li><b>实际静摩擦力范围：</b>由外力平衡条件决定，范围为：
                $$0 < f \le f_{\\max}$$
            </li>
            <li><b>最大静摩擦力 $f_{\\max}$：</b>当拉力增大到某一临界值时，物体即将滑动时的静摩擦力。最大静摩擦力与正压力 $F_N$ 成正比：
                $$f_{\\max} = \\mu_s F_N$$
                <i>（其中 $\\mu_s$ 为静摩擦因数，通常略大于动摩擦因数 $\\mu_k$）</i>
            </li>
        </ul>
    `
},
{
    id: 'sec-403',
    subject: 'physics',
    chapterId: 'p-ch4',
    title: '4.3 力的合成与分解',
    desc: '合力与分力概念、平行四边形定则及矢量与标量区别',
    content: `
        <h3>一、 合力与分力 (等效替代思想)</h3>
        <p><b>等效替代关系：</b>当几个力共同作用的效果，与某一个力单独作用的效果完全相同时，这几个力与那一个力互为替代关系。</p>
        <ul>
            <li><b>分力：</b>共同作用的那几个力。</li>
            <li><b>合力：</b>单独作用并能产生相同效果的那一个力。</li>
        </ul>

        <h3>二、 力的合成与分解</h3>

        <p><b>1. 力的合成 (Composition of Forces)</b></p>
        <p>求几个力的合力的过程叫作力的合成。力的合成遵循<b>矢量的相加法则</b>。</p>

        <div class="box-blue">
            <strong>合成法则：</strong>
            <ul>
                <li><b>平行四边形定则：</b>以表示两个分力的线段为邻边作平行四边形，这两个邻边之间的对角线就表示合力的大小和方向。</li>
                <li><b>三角形定则：</b>将表示两个分力的矢量首尾相接，从第一个矢量的起点指向第二个矢量的终点的有向线段即表示合力。</li>
                <li><b>多边形定则：</b>适用于多个力的合成，将多个力依次首尾相接，由起点指向终点的矢量即为合力。</li>
            </ul>
        </div>

        <p><b>2. 力的分解 (Resolution of Forces)</b></p>
        <p>求一个力的分力的过程叫作力的分解。力的分解同样遵循平行四边形定则（是力的合成的逆运算）。</p>

        <div class="box-yellow">
            <strong>力的正交分解法 (Orthogonal Resolution)：</strong><br>
            将一个或多个力沿<b>相互垂直的两个方向（通常为 $x$ 轴和 $y$ 轴）</b>进行分解。
            <br><i>（这是解决复杂受力分析与多力平衡问题最常用、最不易出错的方法）</i>
        </div>

        <!-- 矢量图组件：力的正交分解示意图 -->
        <div style="text-align: center; margin: 20px 0; background: #fafafa; padding: 16px; border-radius: 12px; border: 1px solid var(--border-color);">
            <svg width="280" height="220" viewBox="0 0 280 220" style="max-width: 100%; height: auto;">
                <!-- 坐标轴 -->
                <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/>
                    </marker>
                    <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/>
                    </marker>
                    <marker id="arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626"/>
                    </marker>
                </defs>
                
                <!-- x, y 轴 -->
                <line x1="30" y1="180" x2="250" y2="180" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)" />
                <line x1="40" y1="190" x2="40" y2="20" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)" />
                <text x="255" y="185" font-size="14" fill="#64748b" font-weight="bold">x</text>
                <text x="35" y="15" font-size="14" fill="#64748b" font-weight="bold">y</text>
                <text x="25" y="195" font-size="13" fill="#64748b">O</text>

                <!-- 虚线投影 -->
                <line x1="200" y1="60" x2="200" y2="180" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4" />
                <line x1="200" y1="60" x2="40" y2="60" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4" />

                <!-- 分力 Fx, Fy -->
                <line x1="40" y1="180" x2="195" y2="180" stroke="#2563eb" stroke-width="3" marker-end="url(#arrow-blue)" />
                <line x1="40" y1="180" x2="40" y2="65" stroke="#2563eb" stroke-width="3" marker-end="url(#arrow-blue)" />
                <text x="110" y="200" font-size="14" fill="#2563eb" font-weight="bold">Fx = F·cosθ</text>
                <text x="48" y="120" font-size="14" fill="#2563eb" font-weight="bold">Fy = F·sinθ</text>

                <!-- 合力 F -->
                <line x1="40" y1="180" x2="196" y2="63" stroke="#dc2626" stroke-width="3.5" marker-end="url(#arrow-red)" />
                <text x="120" y="105" font-size="16" fill="#dc2626" font-weight="bold">F</text>

                <!-- 夹角 θ -->
                <path d="M 80 180 A 40 40 0 0 0 74 155" fill="none" stroke="#dc2626" stroke-width="1.5" />
                <text x="88" y="172" font-size="13" fill="#dc2626">θ</text>
            </svg>
            <p style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">力的正交分解几何图示</p>
        </div>

        <h3>三、 矢量与标量 (Vectors & Scalars)</h3>
        <ul>
            <li>
                <b>矢量 (Vector)：</b>既有大小、又有方向，相加时<b>遵从平行四边形定则</b>的物理量。<br>
                <i>常见矢量：力（$F$）、位移（$s$）、速度（$v$）、加速度（$a$）等。</i>
            </li>
            <li>
                <b>标量 (Scalar)：</b>只有大小、没有方向，求和时<b>按照算术法则（代数加减）</b>相加的物理量。<br>
                <i>常见标量：质量（$m$）、时间（$t$）、路程（$s$）、能量（$E$）、温度（$T$）等。</i>
            </li>
        </ul>
    `
},
{
    id: 'sec-404',
    subject: 'physics',
    chapterId: 'p-ch4',
    title: '4.4 牛顿第一运动定律',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-405',
    subject: 'physics',
    chapterId: 'p-ch4',
    title: '4.5 牛顿第一运动定律',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-406',
    subject: 'physics',
    chapterId: 'p-ch4',
    title: '4.6 动量',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-407',
    subject: 'physics',
    chapterId: 'p-ch4',
    title: '4.7 牛顿第二运动定律',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-408',
    subject: 'physics',
    chapterId: 'p-ch4',
    title: '4.8 牛顿第三运动定律',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-501',
    subject: 'physics',
    chapterId: 'p-ch5',
    title: '5.1 共点力作用下物体的平衡',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-502',
    subject: 'physics',
    chapterId: 'p-ch5',
    title: '5.2 力矩的平衡 平面力系的平衡',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-503',
    subject: 'physics',
    chapterId: 'p-ch5',
    title: '5.3 力矩的平衡 平行力系',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-601',
    subject: 'physics',
    chapterId: 'p-ch6',
    title: '6.1 曲线运动',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-602',
    subject: 'physics',
    chapterId: 'p-ch6',
    title: '6.2 抛射体运动',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-603',
    subject: 'physics',
    chapterId: 'p-ch6',
    title: '6.3 匀速圆周运动',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-604',
    subject: 'physics',
    chapterId: 'p-ch6',
    title: '6.4 向心力',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-605',
    subject: 'physics',
    chapterId: 'p-ch6',
    title: '6.5 离心运动及其应用',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-606',
    subject: 'physics',
    chapterId: 'p-ch6',
    title: '6.6 竖直平面上的圆周运动',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-607',
    subject: 'physics',
    chapterId: 'p-ch6',
    title: '6.7 行星的运动及开普勒定律',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-608',
    subject: 'physics',
    chapterId: 'p-ch6',
    title: '6.8 万有引力定律',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-701',
    subject: 'physics',
    chapterId: 'p-ch7',
    title: '7.1 功和功率',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-702',
    subject: 'physics',
    chapterId: 'p-ch7',
    title: '7.2 恒力与变力的功',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-703',
    subject: 'physics',
    chapterId: 'p-ch7',
    title: '7.3 动能',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-704',
    subject: 'physics',
    chapterId: 'p-ch7',
    title: '7.4 势能',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-705',
    subject: 'physics',
    chapterId: 'p-ch7',
    title: '7.5 机械能守恒定律',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-706',
    subject: 'physics',
    chapterId: 'p-ch7',
    title: '7.6 质量与能量',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-801',
    subject: 'physics',
    chapterId: 'p-ch8',
    title: '8.1 冲量与动量的关系',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-802',
    subject: 'physics',
    chapterId: 'p-ch8',
    title: '8.2 动量守恒定律',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-803',
    subject: 'physics',
    chapterId: 'p-ch8',
    title: '8.3 反冲作用',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-804',
    subject: 'physics',
    chapterId: 'p-ch8',
    title: '8.4 碰撞',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-901',
    subject: 'physics',
    chapterId: 'p-ch9',
    title: '9.1 刚体及其转动',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-902',
    subject: 'physics',
    chapterId: 'p-ch9',
    title: '9.2 刚体的转动惯量',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-903',
    subject: 'physics',
    chapterId: 'p-ch9',
    title: '9.3 刚体滚动时的动能',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-904',
    subject: 'physics',
    chapterId: 'p-ch9',
    title: '9.4 刚体的转动定律',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-905',
    subject: 'physics',
    chapterId: 'p-ch9',
    title: '9.5 角动量',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-906',
    subject: 'physics',
    chapterId: 'p-ch9',
    title: '9.6 角动量守恒定律',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1001',
    subject: 'physics',
    chapterId: 'p-ch10',
    title: '10.1 振动现象',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1002',
    subject: 'physics',
    chapterId: 'p-ch10',
    title: '10.2 简谐运动',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1003',
    subject: 'physics',
    chapterId: 'p-ch10',
    title: '10.3 简谐运动方程',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1004',
    subject: 'physics',
    chapterId: 'p-ch10',
    title: '10.4 简谐运动的图像',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1005',
    subject: 'physics',
    chapterId: 'p-ch10',
    title: '10.5 简谐运动的能量',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1006',
    subject: 'physics',
    chapterId: 'p-ch10',
    title: '10.6 受迫振动 共振',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1101',
    subject: 'physics',
    chapterId: 'p-ch11',
    title: '11.1 流体的性质',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1102',
    subject: 'physics',
    chapterId: 'p-ch11',
    title: '11.2 液体的压强',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1103',
    subject: 'physics',
    chapterId: 'p-ch11',
    title: '11.3 阿基米德原理',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1104',
    subject: 'physics',
    chapterId: 'p-ch11',
    title: '11.4 大气压强',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1105',
    subject: 'physics',
    chapterId: 'p-ch11',
    title: '11.5 稳定流动和连续性方程式',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1106',
    subject: 'physics',
    chapterId: 'p-ch11',
    title: '11.6 伯努利方程式',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1107',
    subject: 'physics',
    chapterId: 'p-ch11',
    title: '11.7 伯努利方程式的应用',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1108',
    subject: 'physics',
    chapterId: 'p-ch11',
    title: '11.8 物体在真实流体中的运动',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
];
