// physics-data.js

const physicsChapters = [
// 上册 (高一)
{ id: 'p-ch1', volume: 'upper', volName: '上册', title: '第1章 物理学简介', desc: '质点、位移、速度与加速度基础概念' },
{ id: 'p-ch2', volume: 'upper', volName: '上册', title: '第2章 物理量的测量、单位和数据处理', desc: '速度与时间、位移与时间的关系及自由落体' },
{ id: 'p-ch3', volume: 'upper', volName: '上册', title: '第3章 直线运动', desc: '重力、弹力、摩擦力及力的合成与分解' },
{ id: 'p-ch4', volume: 'upper', volName: '上册', title: '第4章 牛顿运动定律', desc: '牛顿第一、二、三定律及其综合应用' },
{ id: 'p-ch5', volume: 'upper', volName: '上册', title: '第5章 静力学', desc: '共点力平衡与胡克定律' },
{ id: 'p-ch6', volume: 'upper', volName: '上册', title: '第6章 平面运动', desc: '平抛运动与圆周运动' },
{ id: 'p-ch7', volume: 'upper', volName: '上册', title: '第7章 功与能', desc: '功、动能定理与机械能守恒定律' },
{ id: 'p-ch8', volume: 'upper', volName: '上册', title: '第8章 动量守恒定律', desc: '冲量、动量定理与动量守恒' },
{ id: 'p-ch9', volume: 'upper', volName: '上册', title: '第9章 转动', desc: '刚体转动与力矩' },
{ id: 'p-ch10', volume: 'upper', volName: '上册', title: '第10章 振动', desc: '简谐运动与单摆' },
{ id: 'p-ch11', volume: 'upper', volName: '中册', title: '第11章 流体力学', desc: '帕斯卡定律与伯努利方程' },

// 中册 (高二)
{ id: 'p-ch12', volume: 'middle', volName: '中册', title: '第12章 物质的性质', desc: '固态、液态与气体性质' },
{ id: 'p-ch13', volume: 'middle', volName: '中册', title: '第13章 温度与热量', desc: '热平衡与比热容' },
{ id: 'p-ch14', volume: 'middle', volName: '中册', title: '第14章 热的传递', desc: '热传导、对流与热辐射' },
{ id: 'p-ch15', volume: 'middle', volName: '中册', title: '第15章 气体定律', desc: '玻意耳定律与理想气体状态方程' },
{ id: 'p-ch16', volume: 'middle', volName: '中册', title: '第16章 气体分子运动论与热力学', desc: '热力学第一、第二定律' },
{ id: 'p-ch17', volume: 'middle', volName: '中册', title: '第17章 机械波', desc: '波的干涉、衍射与多普勒效应' },
{ id: 'p-ch18', volume: 'middle', volName: '中册', title: '第18章 光的反射与折射', desc: '全反射与折射率测量' },
{ id: 'p-ch19', volume: 'middle', volName: '中册', title: '第19章 棱镜和透镜', desc: '透镜成像公式与光学仪器' },
{ id: 'p-ch20', volume: 'middle', volName: '下册', title: '第20章 光的波动性', desc: '双缝干涉与偏振光' },

// 下册 (高三)
{ id: 'p-ch21', volume: 'lower', volName: '下册', title: '第21章 电场', desc: '库仑定律、电场强度与电势能' },
{ id: 'p-ch22', volume: 'lower', volName: '下册', title: '第22章 恒定电流', desc: '欧姆定律与闭合电路欧姆定律' },
{ id: 'p-ch23', volume: 'lower', volName: '下册', title: '第23章 电流与磁场', desc: '安培力与洛伦兹力' },
{ id: 'p-ch24', volume: 'lower', volName: '下册', title: '第24章 电磁感应与交流电', desc: '法拉第电磁感应定律与变压器' },
{ id: 'p-ch25', volume: 'lower', volName: '下册', title: '第25章 量子物理学', desc: '光电效应与能级跃迁' },
{ id: 'p-ch26', volume: 'lower', volName: '下册', title: '第26章 原子与原子核物理学', desc: '衰变、核反应与质能方程' },
{ id: 'p-ch27', volume: 'lower', volName: '下册', title: '第27章 相对论简介', desc: '狭义相对论基本假设' }
];

const defaultSections = [
//1
{
id: 'sec-101',
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
    chapterId: 'p-ch3',
    title: '3.1 机械运动',
    desc: '-',
    content: `<p>笔记正文...</p>`
},
{
    id: 'sec-302',
    chapterId: 'p-ch3',
    title: '3.2 参照物、坐标系和参照系',
    desc: '-',
    content: `<p>笔记正文...</p>`
},
{
    id: 'sec-303',
    chapterId: 'p-ch3',
    title: '3.3 路程与位移',
    desc: '-',
    content: `<p>笔记正文...</p>`
},
{
    id: 'sec-304',
    chapterId: 'p-ch3',
    title: '3.4 匀速直线运动 速度和速率',
    desc: '-',
    content: `<p>笔记正文...</p>`
},
{
    id: 'sec-305',
    chapterId: 'p-ch3',
    title: '3.5 匀速直线运动图像',
    desc: '-',
    content: `<p>笔记正文...</p>`
},
{
    id: 'sec-306',
    chapterId: 'p-ch3',
    title: '3.6 变速直线运动 平均速度和瞬时速度',
    desc: '-',
    content: `<p>笔记正文...</p>`
},
{
    id: 'sec-307',
    chapterId: 'p-ch3',
    title: '3.7 变速直线运动的加速度',
    desc: '-',
    content: `<p>笔记正文...</p>`
},
{
    id: 'sec-308',
    chapterId: 'p-ch3',
    title: '3.8 匀加速直线运动',
    desc: '-',
    content: `<p>笔记正文...</p>`
},
{
    id: 'sec-401',
    chapterId: 'p-ch4',
    title: '4.1 力与运动',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-402',
    chapterId: 'p-ch4',
    title: '4.2 力的种类',
    desc: '力的三要素、力的图示、力的种类',
    content: `<h3>一、 力的基本概念</h3>
    <ul>
        <li><b>力的三要素：</b>大小、方向、作用点</li>
        <li><b>测量工具：</b>测力计（弹簧测力计）</li>
        <li><b>单位：</b>牛顿（符号：$\text{N}$）</li>
        <li><b>力的图示：</b>用带有箭头的有向线段表示，线段的长度按一定比例画出，代表力的大小。</li>
    </ul>
    
    <h3>二、 重力 (Gravity)</h3>
    <p>物体由于地球的吸引而受到的力。</p>
    <ul>
        <li><b>重力公式：</b>物体所受的重力 $W$ 与其质量 $m$ 成正比：
            $$W = mg$$
        </li>
        <li><b>重力加速度/重力场强度 $g$：</b>在地球表面附近，$g \approx 9.8\text{ N/kg}$（或 $\text{m/s}^2$）。</li>
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
        <li><b>劲度系数 $k$：</b>表示弹簧形变单位长度（如 $1\text{m}$）所产生的弹力大小，单位为 $\text{N/m}$。$k$ 的大小由弹簧自身的材料、长度和粗细决定。</li>
    </ul>

    <h3>四、 摩擦力 (Friction Force)</h3>
    <p>两个相互接触的物体，当它们发生相对运动或具有相对运动趋势时，在接触面上产生的阻碍相对运动或相对运动趋势的力。</p>

    <p><b>1. 滑动摩擦力 (Sliding Friction)：</b></p>
    <ul>
        <li><b>方向：</b>沿接触面切线方向，且与物体的<b>相对运动方向相反</b>。</li>
        <li><b>计算公式：</b>滑动摩擦力的大小与正压力 $F_N$ 成正比：
            $$f = \mu_k F_N$$
        </li>
        <li><b>动摩擦因数 $\mu_k$：</b>无单位，其大小取决于接触面材料及粗糙程度，与接触面积和运动速度无关。</li>
    </ul>
    
    <p><b>2. 静摩擦力 (Static Friction)：</b></p>
    <ul>
        <li><b>产生条件：</b>两物体相对静止，但存在<b>相对运动趋势</b>。</li>
        <li><b>实际静摩擦力范围：</b>由外力平衡条件决定，范围为：
            $$0 < f \le f_{\max}$$
        </li>
        <li><b>最大静摩擦力 $f_{\max}$：</b>当拉力增大到某一临界值时，物体即将滑动时的静摩擦力。最大静摩擦力与正压力 $F_N$ 成正比：
            $$f_{\max} = \mu_s F_N$$
            <i>（其中 $\mu_s$ 为静摩擦因数，通常略大于动摩擦因数 $\mu_k$）</i>
        </li>
    </ul>
    },
{
    id: 'sec-403',
    chapterId: 'p-ch4',
    title: '4.3 力的合成与分解',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-404',
    chapterId: 'p-ch4',
    title: '4.4 牛顿第一运动定律',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-405',
    chapterId: 'p-ch4',
    title: '4.5 牛顿第一运动定律',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-406',
    chapterId: 'p-ch4',
    title: '4.6 动量',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-407',
    chapterId: 'p-ch4',
    title: '4.7 牛顿第二运动定律',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-408',
    chapterId: 'p-ch4',
    title: '4.8 牛顿第三运动定律',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-501',
    chapterId: 'p-ch5',
    title: '5.1 共点力作用下物体的平衡',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-502',
    chapterId: 'p-ch5',
    title: '5.2 力矩的平衡 平面力系的平衡',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-503',
    chapterId: 'p-ch5',
    title: '5.3 力矩的平衡 平行力系',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-601',
    chapterId: 'p-ch6',
    title: '6.1 曲线运动',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-602',
    chapterId: 'p-ch6',
    title: '6.2 抛射体运动',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-603',
    chapterId: 'p-ch6',
    title: '6.3 匀速圆周运动',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-604',
    chapterId: 'p-ch6',
    title: '6.4 向心力',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-605',
    chapterId: 'p-ch6',
    title: '6.5 离心运动及其应用',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-606',
    chapterId: 'p-ch6',
    title: '6.6 竖直平面上的圆周运动',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-607',
    chapterId: 'p-ch6',
    title: '6.7 行星的运动及开普勒定律',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-608',
    chapterId: 'p-ch6',
    title: '6.8 万有引力定律',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-701',
    chapterId: 'p-ch7',
    title: '7.1 功和功率',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-702',
    chapterId: 'p-ch7',
    title: '7.2 恒力与变力的功',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-703',
    chapterId: 'p-ch7',
    title: '7.3 动能',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-704',
    chapterId: 'p-ch7',
    title: '7.4 势能',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-705',
    chapterId: 'p-ch7',
    title: '7.5 机械能守恒定律',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-706',
    chapterId: 'p-ch7',
    title: '7.6 质量与能量',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-801',
    chapterId: 'p-ch8',
    title: '8.1 冲量与动量的关系',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-802',
    chapterId: 'p-ch8',
    title: '8.2 动量守恒定律',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-803',
    chapterId: 'p-ch8',
    title: '8.3 反冲作用',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-804',
    chapterId: 'p-ch8',
    title: '8.4 碰撞',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-901',
    chapterId: 'p-ch9',
    title: '9.1 刚体及其转动',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-902',
    chapterId: 'p-ch9',
    title: '9.2 刚体的转动惯量',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-903',
    chapterId: 'p-ch9',
    title: '9.3 刚体滚动时的动能',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-904',
    chapterId: 'p-ch9',
    title: '9.4 刚体的转动定律',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-905',
    chapterId: 'p-ch9',
    title: '9.5 角动量',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-906',
    chapterId: 'p-ch9',
    title: '9.6 角动量守恒定律',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1001',
    chapterId: 'p-ch10',
    title: '10.1 振动现象',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1002',
    chapterId: 'p-ch10',
    title: '10.2 简谐运动',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1003',
    chapterId: 'p-ch10',
    title: '10.3 简谐运动方程',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1004',
    chapterId: 'p-ch10',
    title: '10.4 简谐运动的图像',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1005',
    chapterId: 'p-ch10',
    title: '10.5 简谐运动的能量',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1006',
    chapterId: 'p-ch10',
    title: '10.6 受迫振动 共振',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1101',
    chapterId: 'p-ch11',
    title: '11.1 流体的性质',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1102',
    chapterId: 'p-ch11',
    title: '11.2 液体的压强',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1103',
    chapterId: 'p-ch11',
    title: '11.3 阿基米德原理',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1104',
    chapterId: 'p-ch11',
    title: '11.4 大气压强',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1105',
    chapterId: 'p-ch11',
    title: '11.5 稳定流动和连续性方程式',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1106',
    chapterId: 'p-ch11',
    title: '11.6 伯努利方程式',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1107',
    chapterId: 'p-ch11',
    title: '11.7 伯努利方程式的应用',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
{
    id: 'sec-1108',
    chapterId: 'p-ch11',
    title: '11.8 物体在真实流体中的运动',
    desc: '-',
    content: `<div class="box-yellow">
    <strong>力是改变物体运动状态的原因。</strong><br>
    </div>`
},
];
