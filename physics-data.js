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
    desc: '力的本质：改变运动状态而非维持运动',
    content:`
        <div class="box-yellow">
            <strong>核心结论：</strong><br>
            <b>力是改变物体运动状态的原因</b>，而不是维持物体运动状态的原因。
        </div>
        
        <h3>一、 深度理解“力的本质”</h3>
        <ul>
            <li>
                <b>1. “运动状态”指的是什么？</b><br>
                物体的运动状态由<b>速度（大小和方向）</b>决定：
                <ul>
                    <li>速度大小改变（如由静止变运动、加速、减速） $\\rightarrow$ 运动状态改变。</li>
                    <li>速度方向改变（如转弯、曲线运动、圆周运动） $\\rightarrow$ 运动状态改变。</li>
                    <li>速度大小和方向同时改变 $\\rightarrow$ 运动状态改变。</li>
                </ul>
            </li>
            <li>
                <b>2. 力与加速度的关系：</b><br>
                物体受到**不为零的合外力**时，一定会产生<b>加速度 ($a$)</b>，从而改变物体的运动状态。
            </li>
        </ul>
        
        <h3>二、 历史观念对比与易错辨析</h3>
        <ul>
            <li>
                ❌ <b>亚里士多德的错误观点：</b> “力是维持物体运动的原因。”（认为撤去外力，物体就会静止）
            </li>
            <li>
                ✅ <b>伽利略与牛顿的正确观点：</b> “物体的运动不需要力来维持。”撤去外力后，物体由于<b>惯性</b>将保持原来的运动状态（匀速直线运动或静止）。
            </li>
        </ul>
        
        <h3>三、 总结速记</h3>
        <div class="box-blue">
            <ul>
                <li><b>无外力（或合外力为 0）：</b> 运动状态<b>不变</b>（静止或匀速直线运动）。</li>
                <li><b>有合外力（合外力不为 0）：</b> 运动状态<b>改变</b>（产生加速度）。</li>
            </ul>
        </div>
    `
},
{
    id: 'sec-402',
    subject: 'physics',
    chapterId: 'p-ch4',
    title: '4.2 力的种类',
    desc: '重力、弹力与摩擦力的概念、方向判断及计算公式',
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
                $$0 < f \\le f_{\\max}$$
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
    desc: '力的本质与伽利略理想斜面实验',
    content: `
        <h3>一、 牛顿第一运动定律（惯性定律）</h3>
        
        <div class="box-yellow">
            <strong>定律内容：</strong><br>
            一切物体总保持<b>匀速直线运动状态</b>或<b>静止状态</b>，直到有外力迫使它改变这种状态为止。
        </div>
        
        <h3>二、 物理内涵与深度理解</h3>
        <ul>
            <li>
                <b>1. 揭示了力的本质：</b><br>
                力<b>不是维持物体运动</b>的原因，而是<b>改变物体运动状态（产生加速度）</b>的原因。
            </li>
            <li>
                <b>2. 揭示了物体的固有属性——惯性 (Inertia)：</b><br>
                <ul>
                    <li>一切物体都具有保持原本运动状态不变的性质，称为<b>惯性</b>。</li>
                    <li><b>质量 (Mass) 是物体惯性大小的唯一量度。</b>质量越大，物体的运动状态越难改变，即惯性越大。</li>
                </ul>
            </li>
            <li>
                <b>3. 理想化实验与逻辑推理：</b><br>
                牛顿第一定律是在<b>伽利略理想斜面实验</b>的基础上，经过科学抽象与逻辑推理得出的，无法直接通过实验完全验证（因为现实中无法完全消除外力）。
            </li>
        </ul>
     `
},
{
    id: 'sec-405',
    subject: 'physics',
    chapterId: 'p-ch4',
    title: '4.5 惯性与质量',
    desc: '惯性的本质、定义与质量的量度关系',
    content: `
        <h3>一、 惯性 (Inertia)</h3>
        <p>物体具有<b>保持原本运动状态（即保持静止或匀速直线运动）不变</b>的固有属性，称为惯性。</p>
        
        <div class="box-yellow">
            <strong>核心理解：</strong><br>
            惯性反映了<b>改变物体运动状态的难易程度</b>。物体惯性越大，其运动状态越难被改变。
        </div>
        
        <h3>二、 质量与惯性的关系</h3>
        <ul>
            <li><b>质量是物体惯性大小的唯一量度。</b></li>
            <li><b>质量越大</b> $\\rightarrow$ 物体运动状态越难改变 $\\rightarrow$ <b>惯性越大</b>。</li>
            <li><b>质量越小</b> $\\rightarrow$ 物体运动状态越容易改变 $\\rightarrow$ <b>惯性越小</b>。</li>
        </ul>
        
        <h3>三、 常见误区辨析</h3>
        <ul>
            <li>❌ <b>误区 1：“速度越大，惯性越大”</b><br>
                <i>纠错：</i> 惯性只与质量有关，与物体的速度大小、是否受力、运动状态均无关。
            </li>
            <li>❌ <b>误区 2：“物体受力大，惯性就变小”</b><br>
                <i>纠错：</i> 外力只能改变物体的运动状态，不能改变物体的惯性。
            </li>
            <li>❌ <b>误区 3：“惯性是一种力”</b><br>
                <i>纠错：</i> 惯性是物体自身的固有属性，不是力，不能说“受到惯性作用”或“惯性力”。
            </li>
        </ul>
     `
},
{
    id: 'sec-406',
    subject: 'physics',
    chapterId: 'p-ch4',
    title: '4.6 动量',
    desc: '动量定义式 p=mv、矢量性与单位',
    content: `
        <h3>一、 动量的基本概念</h3>
        <p>物体的<b>质量 $m$</b> 和<b>速度 $v$</b> 的乘积叫作动量，它反映了<b>物体运动状态的强弱（或运动效应）</b>。</p>
        
        <div class="box-yellow">
            <strong>定义式：</strong><br>
            $$p = mv$$
        </div>
        
        <h3>二、 动量的三要素</h3>
        <ul>
            <li><b>1. 大小：</b> $p = mv$，由物体的质量和速度共同决定。</li>
            <li>
                <b>2. 矢量性：</b><br>
                动量是<b>矢量</b>，其方向与<b>速度 $v$ 的方向相同</b>。
            </li>
            <li>
                <b>3. 单位：</b><br>
                国际单位制中，动量的单位是<b>千克·米每秒</b>，符号为 <b>$\\text{kg}\\cdot\\text{m}\\cdot\\text{s}^{-1}$</b>（或 $\\text{kg}\\cdot\\text{m/s}$）。
                <br><i>注：根据动量定理，动量的单位在数量上与冲量单位等价，即 $1\\text{ kg}\\cdot\\text{m/s} = 1\\text{ N}\\cdot\\text{s}$。</i>
            </li>
        </ul>
        
        <h3>三、 状态量特征</h3>
        <p>动量是描述物体<b>某一时刻（或某一位置）</b>运动状态的<b>状态量</b>。由于速度 $v$ 具有相对性，动量 $p$ 也具有相对性，通常以地面为参考系。</p>
     `
},
{
    id: 'sec-407',
    subject: 'physics',
    chapterId: 'p-ch4',
    title: '4.7 牛顿第二运动定律',
    desc: 'F=ma、动量变化率与加速度的核心性质',
    content:`
        <h3>一、 牛顿第二运动定律的两种表述</h3>
        
        <div class="box-yellow">
            <strong>1. 动量表述（原始表述）：</strong><br>
            物体所受的合外力 $F$ 与物体<b>动量变化率</b>成正比。
            $$F = \\frac{\\Delta p}{\\Delta t}$$
        </div>
        
        <div class="box-yellow" style="margin-top: 10px;">
            <strong>2. 加速度表述（常用形式）：</strong><br>
            物体的加速度 $a$ 跟所受的合外力 $F$ 成正比，跟物体的质量 $m$ 成反比；加速度的方向与合外力的方向相同。
            $$F = ma$$
        </div>
        
        <h3>二、 核心特征与深刻理解</h3>
        <ul>
            <li>
                <b>1. 因果性（力是产生加速度的原因）：</b><br>
                力是改变物体运动状态（即产生加速度 $a$）的根本原因，而不是维持速度的原因。
            </li>
            <li>
                <b>2. 瞬时性（实时对应关系）：</b><br>
                加速度 $a$ 与合外力 $F$ 是<b>同时产生、同时变化、同时消失</b>的：
                <ul>
                    <li>若合外力<b>保持不变</b> $\\rightarrow$ 加速度<b>保持不变</b>（匀变速运动）。</li>
                    <li>若合外力<b>随时间改变</b> $\\rightarrow$ 加速度<b>随时间改变</b>（变加速运动）。</li>
                    <li>若合外力<b>变为 0</b> $\\rightarrow$ 加速度<b>立即变为 0</b>，此时物体将保持静止或匀速直线运动状态（回归牛顿第一定律）。</li>
                </ul>
            </li>
            <li>
                <b>3. 矢量性：</b><br>
                加速度 $a$ 的方向<b>永远与合外力 $F$ 的方向保持一致</b>。
            </li>
            <li>
                <b>4. 独立性（力的独立作用原理）：</b><br>
                作用在物体上的每一个力都会独立产生各自的加速度，物体的总加速度是各个力单独产生的加速度的矢量和。
            </li>
        </ul>
      `
},
{
    id: 'sec-408',
    subject: 'physics',
    chapterId: 'p-ch4',
    title: '4.8 牛顿第三运动定律',
    desc: '作用力与反作用力的性质及与平衡力的区别',
    content: `
        <h3>一、 牛顿第三运动定律</h3>
        
        <div class="box-yellow">
            <strong>定律内容：</strong><br>
            两个物体之间的<b>作用力</b>与<b>反作用力</b>总是大小相等，方向相反，作用在同一条直线上。
        </div>
        
        <h3>二、 作用力与反作用力的性质</h3>
        <p>物体间相互作用的这一对力，具有<b>互相依存、共同存在</b>的特点：</p>
        <ul>
            <li><b>1. 同大小、反方向、共线：</b> 总是成对出现，且大小完全相等，方向相反。</li>
            <li><b>2. 异体性：</b> 作用力和反作用力分别作用在<b>两个不同的物体</b>上（因此<b>不能合成</b>，也不能相互抵消）。</li>
            <li><b>3. 同性质：</b> 作用力是弹力，反作用力就一定是弹力；作用力是引力，反作用力就一定是引力。</li>
            <li><b>4. 同存亡：</b> 同时产生、同时变化、同时消失。</li>
        </ul>
        
        <h3>三、 易错辨析：作用力与反作用力 vs 一对平衡力</h3>
        <table border="1" style="width:100%; border-collapse:collapse; margin-top:10px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>对比维度</th>
                    <th>一对作用力与反作用力</th>
                    <th>一对平衡力</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>作用对象</b></td>
                    <td>作用在<b>两个不同物体</b>上</td>
                    <td>作用在<b>同一物体</b>上</td>
                </tr>
                <tr>
                    <td><b>力的性质</b></td>
                    <td><b>必须相同</b>（同为弹力、摩擦力等）</td>
                    <td><b>不一定相同</b></td>
                </tr>
                <tr>
                    <td><b>时间关系</b></td>
                    <td><b>同时产生、变化、消失</b></td>
                    <td>不一定同时存在或消失</td>
                </tr>
                <tr>
                    <td><b>作用效果</b></td>
                    <td>产生各自的加速度（不能抵消）</td>
                    <td>使物体保持静止或匀速（效果抵消）</td>
                </tr>
            </tbody>
        </table>
    `
},
{
    id: 'sec-501',
    subject: 'physics',
    chapterId: 'p-ch5',
    title: '5.1 共点力作用下物体的平衡',
    desc: '共点力系及其平衡条件', 
    content:`
        <h3>一、 基本概念</h3>
        <ul>
            <li><b>共点力系：</b>作用在物体的<b>同一点</b>，或者作用线<b>相交于同一点</b>的几个力。</li>
            <li><b>平衡状态：</b>物体在共点力的作用下，保持<b>静止</b>或<b>匀速直线运动</b>的状态（此时加速度 $a = 0$）。</li>
        </ul>
        
        <h3>二、 共点力的平衡条件</h3>
        
        <div class="box-yellow">
            <strong>核心条件：</strong><br>
            物体在共点力作用下处于平衡状态的充要条件是<b>所受合力为零</b>。
            $$\\sum \\vec{F} = 0$$
            <i>（注：式中的 $F$ 为矢量，代表各力的矢量和为零）</i>
        </div>
        
        <h3>三、 正交分解法（平面共点力系）</h3>
        <p>当共点力作用在同一个平面内时，通常建立直角坐标系 $(x, y)$，将各力沿两个互相垂直的方向分解。</p>
        
        <p>平衡条件等价于<b>各个力在 $x$ 轴和 $y$ 轴上的投影分量的代数和分别等于零</b>：</p>
        
        <div class="box-blue">
            $$\\begin{cases} \\sum F_x = 0 \\\\ \\sum F_y = 0 \\end{cases}$$
        </div>
        
        <ul>
            <li><b>解题步骤提示：</b>
                <ol>
                    <li>明确研究对象，画出受力分析图；</li>
                    <li>选取合适的方向建立直角坐标系（通常尽量使较多的力落在坐标轴上）；</li>
                    <li>将不在坐标轴上的力分解到 $x$ 轴和 $y$ 轴上；</li>
                    <li>根据 $\\sum F_x = 0$ 和 $\\sum F_y = 0$ 列方程求解。</li>
                </ol>
            </li>
        </ul>
     `
},
{
    id: 'sec-502',
    subject: 'physics',
    chapterId: 'p-ch5',
    title: '5.2 力矩的平衡 平面力系的平衡',
    desc: '力矩 M=FL、转动平衡条件及平面力系平衡',
    content: `
        <h3>一、 转动与力臂</h3>
        <ul>
            <li><b>转动现象：</b>力可以使物体产生转动。物体转动时，各点都围绕同一条直线做圆周运动。</li>
            <li><b>转轴 (Axis of Rotation)：</b>处于各点圆周运动中心的固定直线。</li>
            <li>
                <b>力臂 (Arm of Force, $L$)：</b><b>转轴到力的作用线的垂直距离</b>。
                <br><i>💡 解题技巧：当几何关系较复杂时，可以建立直角坐标系，利用点到直线的距离公式计算力臂 $L$。</i>
            </li>
        </ul>
        
        <h3>二、 力矩 (Torque / Moment of Force)</h3>
        <p>力 $F$ 和力臂 $L$ 的乘积叫作<b>力矩</b>，用符号 $M$ 表示，反映了力使物体产生转动的效应。</p>
        
        <div class="box-yellow">
            <strong>定义式与单位：</strong>
            $$M = FL$$
            单位为<b>牛顿·米</b>（符号：$\\text{N}\\cdot\\text{m}$）。
        </div>
        
        <ul>
            <li>
                <b>正负号规定（转动方向）：</b>
                <ul>
                    <li>使物体沿<b>逆时针方向</b>转动的力矩规定为<b>正值 ($+$)</b>；</li>
                    <li>使物体沿<b>顺时针方向</b>转动的力矩规定为<b>负值 ($-$)</b>。</li>
                </ul>
            </li>
            <li><b>合力矩 ($\\sum M$)：</b>作用在物体上的几个力矩的代数和（共同作用效应）。</li>
        </ul>
        
        <h3>三、 力矩平衡与平面力系平衡条件</h3>
        
        <p><b>1. 转动平衡：</b>物体在力的作用下保持<b>静止</b>或<b>匀速转动</b>的状态。</p>
        
        <div class="box-yellow">
            <strong>力矩平衡条件：</strong><br>
            在多个力矩作用下，物体保持转动平衡的充要条件是<b>合力矩等于零</b>：
            $$\\sum M = 0$$
        </div>
        
        <p><b>2. 平面力系平衡（移动与转动均平衡）：</b></p>
        <p>作用在物体上的各个力的作用线都在同一个平面内时，物体既不发生移动，也不发生转动的完全平衡条件为：</p>
        
        <div class="box-blue">
            $$\\begin{cases} 
                \\sum \\vec{F} = 0 \\quad (合外力为零) \\\\ 
                \\sum M = 0 \\quad (合力矩为零) 
            \\end{cases}$$
        </div>
        
        <p>实际解题中，通常结合<b>正交分解法</b>展开为三个标量方程：</p>
        
        $$\\begin{cases} 
            \\sum F_x = 0 \\\\ 
            \\sum F_y = 0 \\\\ 
            \\sum M = 0 
        \\end{cases}$$
     `
},
{
    id: 'sec-503',
    subject: 'physics',
    chapterId: 'p-ch5',
    title: '5.3 力矩的平衡 平行力系',
    desc: '平行力系平衡条件与力偶矩的独立性特征',
    content: `
        <h3>一、 平行力系</h3>
        <p>由两个或两个以上<b>作用线相互平行</b>的力所组成的受力系统。</p>
        
        <ul>
            <li>
                <b>合力的确定：</b><br>
                求平行力系的合力时，除了确定合力的大小（代数和）和方向外，还必须<b>确定合力作用线的位置</b>。
            </li>
            <li>
                <b>平行力系的平衡条件：</b><br>
                平行力系属于平面力系的特例，其平衡必须同时满足移动与转动平衡：
                <div class="box-blue">
                    $$\\begin{cases} 
                        \\sum F = 0 \\quad (各个力的代数和为零) \\\\ 
                        \\sum M = 0 \\quad (对任意一点的合力矩为零) 
                    \\end{cases}$$
                </div>
            </li>
        </ul>
        
        <h3>二、 力偶与力偶矩</h3>
        
        <div class="box-yellow">
            <strong>力偶 (Couple) 的定义：</strong><br>
            由两个<b>大小相等、方向相反、作用线平行但不重合</b>的力组成的力系称为力偶。
        </div>
        
        <ul>
            <li>
                <b>1. 力偶的作用效果：</b><br>
                力偶的合力为零（$\\sum F = 0$），因此<b>力偶不能使物体发生移动，只能使物体发生转动</b>。
            </li>
            <li>
                <b>2. 力偶矩 (Torque of a Couple, $M$)：</b><br>
                力偶中任意一个力的大小 $F$ 与两条作用线之间垂直距离 $d$（力偶臂）的乘积：
                $$M = F \\cdot d$$
            </li>
            <li>
                <b>3. 核心性质（极易考点）：</b><br>
                <b style="color: #d9534f;">力偶矩的大小和正负与转轴的具体位置无关。</b>无论选择哪一点作为参考轴，力偶对该轴的力矩总等于 $F \\cdot d$。
            </li>
        </ul>
     `
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
