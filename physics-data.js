// physics-data.js
const defaultSections = [
{
    id: 'sec-301',
    subject: 'physics',
    chapterId: 'p-ch3',
    title: '3.1 机械运动',
    desc: '机械运动分类（平动与转动）及质点模型适用条件',
    content: `
        <h3>一、 机械运动 (Mechanical Motion)</h3>
        <p><b>1. 定义：</b>物体的<b>空间位置随时间变化</b>的运动，称为机械运动，是自然界中最基本、最普遍的运动形式。</p>
        
        <p><b>2. 两种基本运动形式：</b></p>
        <ul>
            <li><b>平动 (Translation)：</b>物体运动时，其上<b>所有点的运动轨道和特征都完全相同</b>（任意两点连线的方向在运动过程中始终保持平行）。</li>
            <li><b>转动 (Rotation)：</b>物体运动时，其上<b>所有的点都绕着同一条固定轴线（转轴）做圆周运动</b>。</li>
        </ul>
        
        <div class="box-blue">
            <strong>运动的合成：</strong><br>
            自然界中宏观物体的复杂机械运动，都可以看作是由<b>平动</b>和<b>转动</b>组合而成的。
        </div>
        
        <h3>二、 质点 (Particle)</h3>
        
        <div class="box-yellow">
            <strong>理想化模型：</strong><br>
            用来代替物体的<b>拥有该物体全部质量的点</b>。质点忽略了物体的形状和大小，是一种理想化的物理模型。
        </div>
        
        <h3>三、 物体看作质点的条件</h3>
        <p>并非所有物体在任何情况下都能看作质点，能否看作质点取决于<b>所研究的问题</b>：</p>
        <ul>
            <li><b>1. 尺寸远小于距离：</b>物体的形状和大小对所研究的问题影响极其微小、可以忽略不计时（例如：研究地球绕太阳公转的轨道）。</li>
            <li><b>2. 各点运动完全一致：</b>物体只做纯平动时，物体上各点的运动情况相同，可以用一个点的运动代表整体（例如：平动的木箱）。</li>
        </ul>
        
        <p><b>❌ 不能看作质点的典型情况：</b></p>
        <ul>
            <li>研究乒乓球的上旋与下旋（转动对结果有直接影响）；</li>
            <li>研究体操运动员在空中的翻滚动作（体型与姿势不可忽略）。</li>
        </ul>
     `
},
{
    id: 'sec-302',
    subject: 'physics',
    chapterId: 'p-ch3',
    title: '3.2 参照物、坐标系和参照系',
    desc: '参照物选择、坐标系定量建系与参考系概念',
    content: `
        <h3>一、 参照物 (Reference Object)</h3>
        
        <div class="box-yellow">
            <strong>定义：</strong><br>
            为了判断某个物体是否运动以及如何运动，<b>事先假定不动</b>并作为参考标准的另一个物体。
        </div>
        
        <ul>
            <li>
                <b>运动的相对性：</b><br>
                一个物体是处于运动还是静止状态，完全取决于所选取的参照物：
                <ul>
                    <li>参照物的选择原则上是<b>任意的</b>（通常以地面或相对地面静止的物体为参照物）。</li>
                    <li>选择不同的参照物，对同一物体运动状态的描述可能会有所不同。</li>
                </ul>
            </li>
        </ul>
        
        <h3>二、 坐标系 (Coordinate System)</h3>
        <p>为了<b>定量地表示</b>物体在各个时刻相对于参照物的位置，需要在参照物上建立适当的坐标系。</p>
        
        <ul>
            <li><b>一维坐标系（直线坐标系）：</b>适用于物体做直线运动（只需要指定原点、正方向和单位长度）。</li>
            <li><b>二维坐标系（平面直角坐标系）：</b>适用于物体在平面内做曲线运动（如平抛运动）。</li>
            <li><b>三维坐标系（空间直角坐标系）：</b>适用于物体在三维空间中的复杂运动。</li>
        </ul>
        
        <h3>三、 参考系 / 参照系 (Reference Frame)</h3>
        
        <div class="box-blue">
            <strong>定义与组成：</strong><br>
            <b>参考系 = 固定在所选参照物上建立的坐标系。</b><br>
            它将参照物的概念与数学坐标系结合起来，用于完整、定量地描述物体的运动。
        </div>
        
        <p><b>总结关系：</b></p>
        <p>参照物（定性选择标准） $\\rightarrow$ 建立坐标系（定量位置描述） $\\rightarrow$ 统称为<b>参考系</b>。</p>
    `
},
{
    id: 'sec-303',
    subject: 'physics',
    chapterId: 'p-ch3',
    title: '3.3 路程与位移',
    desc: '标量/矢量运算法则及路程与位移的对比',
    content: `
        <h3>一、 标量与矢量 (Scalar & Vector)</h3>
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-bottom:15px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>物理量类型</th>
                    <th>核心特征</th>
                    <th>运算法则</th>
                    <th>常见实例</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>标量 (Scalar)</b></td>
                    <td>只有大小，<b>没有方向</b></td>
                    <td>遵从<b>算术/代数相加法则</b></td>
                    <td>路程、质量、时间、温度、功</td>
                </tr>
                <tr>
                    <td><b>矢量 (Vector)</b></td>
                    <td><b>既有大小，又有方向</b></td>
                    <td><b>不遵循代数法则</b><br>遵从<b>平行四边形定则</b>（或三角形定则）</td>
                    <td>位移、速度、加速度、力、动量</td>
                </tr>
            </tbody>
        </table>
        
        <h3>二、 路程与位移 (Path Length & Displacement)</h3>
        
        <p><b>1. 路程 (Path Length / Distance, $s$)：</b></p>
        <ul>
            <li><b>定义：</b>物体运动<b>实际轨迹的长度</b>。</li>
            <li><b>属性：</b><b>标量</b>，只有大小，没有方向，永远非负 ($s \\ge 0$)。</li>
        </ul>
        
        <p><b>2. 位移 (Displacement, $\\vec{s}$ 或 $\\Delta x$)：</b></p>
        <ul>
            <li><b>定义：</b>表示物体（质点）<b>位置的变化</b>。由初位置指向末位置的有向线段。</li>
            <li><b>属性：</b><b>矢量</b>：
                <ul>
                    <li><b>大小：</b>初位置到末位置的直线距离；</li>
                    <li><b>方向：</b>从<b>初位置指向末位置</b>。</li>
                </ul>
            </li>
        </ul>
        
        <div class="box-yellow">
            <strong>核心对比与联系：</strong><br>
            <ul>
                <li><b>大小关系：</b>通常情况下，路程 $\\ge$ 位移的大小（即 $s \\ge |\\Delta x|$）。</li>
                <li><b>等号成立条件：</b>只有当物体做<b>单向直线运动</b>时，路程才等于位移的大小。</li>
                <li><b>闭合轨迹：</b>若物体回到起点（如绕操场跑一圈），其<b>位移为 0</b>，但<b>路程不为 0</b>。</li>
            </ul>
        </div>
     `
},
{
    id: 'sec-304',
    subject: 'physics',
    chapterId: 'p-ch3',
    title: '3.4 匀速直线运动 速度和速率',
    desc: '时刻与时间的区别、速度定义式及与速率的对比',
    content: `
        <h3>一、 时刻与时间 (Time Interval & Instant)</h3>
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-bottom:15px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>概念</th>
                    <th>物理意义</th>
                    <th>在时间轴上的表示</th>
                    <th>常见表述示例</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>时刻 (Instant)</b></td>
                    <td>表示某一<b>瞬间</b></td>
                    <td>时间轴上的<b>一个点</b></td>
                    <td>“8点30分上课”、“第 $3\\text{s}$ 末”</td>
                </tr>
                <tr>
                    <td><b>时间/时间间隔 (Time Interval, $\\Delta t$)</b></td>
                    <td>表示两个时刻之间的<b>间隔/过程</b></td>
                    <td>时间轴上两点间的<b>一段线段</b></td>
                    <td>“一节课 45 分钟”、“前 $3\\text{s}$ 内”</td>
                </tr>
            </tbody>
        </table>
        
        <h3>二、 速度 (Velocity)</h3>
        
        <p><b>1. 定义：</b>衡量物体运动<b>快慢和方向</b>的物理量，由<b>位移与发生该位移所用时间的比值</b>定义。</p>
        
        <div class="box-yellow">
            <strong>定义式与属性：</strong>
            $$v = \\frac{\\Delta x}{\\Delta t}$$
            <ul>
                <li><b>矢量性：</b>速度是<b>矢量</b>，方向与位移 $\\Delta x$ 的方向相同。</li>
                <li><b>单位：</b>国际单位制中为<b>米每秒 ($\\,\\text{m/s}$ 或 $\\text{m}\\cdot\\text{s}^{-1}$)</b>。</li>
            </ul>
        </div>
        
        <p><b>2. 匀速直线运动 (Uniform Linear Motion)：</b></p>
        <ul>
            <li><b>特征：</b>物体在<b>任意相等的时间内发生的位移都相等</b>。</li>
            <li><b>本质：</b>速度 $v$ 的<b>大小和方向都保持不变</b>的运动。</li>
        </ul>
        
        <h3>三、 速率 (Speed)</h3>
        
        <p><b>1. 定义：</b>物体的<b>路程与通过该路程所需时间的比值</b>。</p>
        
        <ul>
            <li><b>属性：</b><b>标量</b>，只有大小，没有方向。</li>
            <li><b>匀速率运动：</b>物体在<b>任意相等时间内通过的路程都相等</b>（例如：匀速圆周运动是匀速率运动，但因方向改变，不是匀速运动）。</li>
        </ul>
        
        <div class="box-blue">
            <strong>易混淆辨析：速度大小 vs 速率</strong><br>
            <ul>
                <li><b>平均速度的大小 $\\neq$ 平均速率：</b>平均速度大小为 $\\frac{|\\Delta x|}{\\Delta t}$（位移/时间），而平均速率为 $\\frac{s}{\\Delta t}$（路程/时间）。只有在<b>单向直线运动</b>中两者才相等。</li>
                <li><b>瞬时速度的大小 $=$ 瞬时速率：</b>当 $\\Delta t \\to 0$ 时，无限短时间内的位移大小等于路程，因此瞬时速度的大小严格等于瞬时速率。</li>
            </ul>
        </div>
     `
},
{
    id: 'sec-305',
    subject: 'physics',
    chapterId: 'p-ch3',
    title: '3.5 匀速直线运动图像',
    desc: 'x-t 与 v-t 图像的斜率、截距及面积的物理意义',
    content: `
        <h3>一、 图像物理意义对比总览</h3>
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-bottom:15px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>图像特征</th>
                    <th>位置-时间图像 ($x$-$t$ 图像)</th>
                    <th>速度-时间图像 ($v$-$t$ 图像)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>纵坐标 (Y轴)</b></td>
                    <td>表示物体的<b>位置 $x$</b></td>
                    <td>表示物体的<b>速度 $v$</b></td>
                </tr>
                <tr>
                    <td><b>斜率 (Slope, $k$)</b></td>
                    <td>表示<b>速度 $v$</b> ($k = \\frac{\\Delta x}{\\Delta t}$)</td>
                    <td>表示<b>加速度 $a$</b> ($k = \\frac{\\Delta v}{\\Delta t}$)</td>
                </tr>
                <tr>
                    <td><b>图线包围“面积”</b></td>
                    <td><b>无物理意义</b></td>
                    <td>表示<b>位移 $\\Delta x$</b><br>（轴上方正位移，下方负位移）</td>
                </tr>
                <tr>
                    <td><b>两图线交点</b></td>
                    <td>表示两物体<b>同一时刻相遇</b></td>
                    <td>表示两物体<b>同一时刻速度相等</b></td>
                </tr>
            </tbody>
        </table>
        
        <h3>二、 直观图解与关键特征</h3>
        
        <div style="display: flex; gap: 15px; flex-wrap: wrap; margin-bottom: 15px;">
            <!-- x-t 图像示意 -->
            <div style="flex: 1; min-width: 260px; border: 1px solid #ccc; padding: 10px; border-radius: 6px; background: #fafafa;">
                <h4 style="margin-top:0; text-align:center;">x-t 图像特征</h4>
                <svg viewBox="0 0 200 120" style="width:100%; height:auto;">
                    <!-- 坐标轴 -->
                    <line x1="20" y1="100" x2="190" y2="100" stroke="#000" stroke-width="2"/>
                    <line x1="20" y1="100" x2="20" y2="10" stroke="#000" stroke-width="2"/>
                    <text x="180" y="115" font-size="10">t</text>
                    <text x="5" y="20" font-size="10">x</text>
                    <!-- 图线 -->
                    <line x1="20" y1="80" x2="160" y2="20" stroke="#007bff" stroke-width="2"/> <!-- 匀速直线 -->
                    <line x1="20" y1="40" x2="180" y2="40" stroke="#28a745" stroke-width="2" stroke-dasharray="4"/> <!-- 静止 -->
                    <path d="M 20 100 Q 80 90 150 30" fill="none" stroke="#dc3545" stroke-width="2"/> <!-- 加速曲线 -->
                </svg>
                <ul style="font-size: 0.85em; padding-left: 15px; margin-bottom: 0;">
                    <li><span style="color:#007bff;">■</span> 倾斜直线：匀速直线运动（斜率 = $v$）</li>
                    <li><span style="color:#28a745;">■</span> 水平直线：静止（$v = 0$）</li>
                    <li><span style="color:#dc3545;">■</span> 曲线：变速运动（切线斜率 = 瞬时速度）</li>
                </ul>
            </div>
        
            <!-- v-t 图像示意 -->
            <div style="flex: 1; min-width: 260px; border: 1px solid #ccc; padding: 10px; border-radius: 6px; background: #fafafa;">
                <h4 style="margin-top:0; text-align:center;">v-t 图像特征</h4>
                <svg viewBox="0 0 200 120" style="width:100%; height:auto;">
                    <!-- 阴影面积 -->
                    <polygon points="20,100 120,40 120,100" fill="rgba(255, 193, 7, 0.4)" />
                    <!-- 坐标轴 -->
                    <line x1="20" y1="100" x2="190" y2="100" stroke="#000" stroke-width="2"/>
                    <line x1="20" y1="100" x2="20" y2="10" stroke="#000" stroke-width="2"/>
                    <text x="180" y="115" font-size="10">t</text>
                    <text x="5" y="20" font-size="10">v</text>
                    <!-- 图线 -->
                    <line x1="20" y1="100" x2="150" y2="22" stroke="#007bff" stroke-width="2"/>
                    <!-- 面积标注线 -->
                    <line x1="120" y1="40" x2="120" y2="100" stroke="#6c757d" stroke-dasharray="2"/>
                    <text x="50" y="85" font-size="10" fill="#856404">面积 = 位移 Δx</text>
                </svg>
                <ul style="font-size: 0.85em; padding-left: 15px; margin-bottom: 0;">
                    <li><span style="color:#007bff;">■</span> 斜率：加速度 $a$ （倾斜直线的倾角）</li>
                    <li><span style="color:#856404;">■</span> 包围面积：位移 $\\Delta x$ （轴上方正，下方负）</li>
                </ul>
            </div>
        </div>
        
        <div class="box-yellow">
            <strong>⚠️ 易错提醒：</strong><br>
            <ul>
                <li>图像上的任何曲线<b>绝不代表物体的运动轨迹</b>，仅代表数值随时间的变化关系。</li>
                <li>计算 $v$-$t$ 图像的“路程”时，将各部分面积<b>绝对值相加</b>；计算“位移”时进行<b>代数相加</b>（上正下负）。</li>
            </ul>
        </div>
     `
},
{
    id: 'sec-306',
    subject: 'physics',
    chapterId: 'p-ch3',
    title: '3.6 变速直线运动 平均速度和瞬时速度',
    desc: '变速运动特征、平均速度（过程量）与瞬时速度（状态量）',
    content: `
        <h3>一、 变速直线运动 (Variable Linear Motion)</h3>
        <p>物体在<b>相等的时间内发生的位移不相等</b>的直线运动，称为变速直线运动（其速度的大小或方向随时间变化）。</p>
        
        <h3>二、 平均速度与瞬时速度</h3>
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-bottom:15px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>对比维度</th>
                    <th>平均速度 (Average Velocity)</th>
                    <th>瞬时速度 (Instantaneous Velocity)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>物理意义</b></td>
                    <td>粗略描述物体在<b>某一段时间或某一段位移</b>内的平均运动快慢</td>
                    <td>精确描述物体在<b>某一时刻或某一位置</b>的运动快慢和方向</td>
                </tr>
                <tr>
                    <td><b>物理属性</b></td>
                    <td><b>过程量</b>（必须指明是哪段时间或哪段位移）</td>
                    <td><b>状态量</b>（必须指明是哪一时刻或哪一位置）</td>
                </tr>
                <tr>
                    <td><b>定义式</b></td>
                    <td>$$\\bar{v} = \\frac{\\Delta x}{\\Delta t}$$</td>
                    <td>$$v = \\lim_{\\Delta t \\to 0} \\frac{\\Delta x}{\\Delta t}$$</td>
                </tr>
                <tr>
                    <td><b>方向判断</b></td>
                    <td>与该段时间内的<b>位移 $\\Delta x$ 方向相同</b></td>
                    <td>与该时刻或位置的<b>运动方向相同</b>（轨迹切线方向）</td>
                </tr>
            </tbody>
        </table>
        
        <div class="box-yellow">
            <strong>⚠️ 解题易错点：</strong><br>
            <ul>
                <li><b>全程平均速度 $\\neq$ 平均速度的代数平均：</b>全程平均速度必须严格用<b>总位移比上总时间</b>计算（$\\bar{v} = \\frac{x_{\\text{总}}}{t_{\\text{总}}}$），绝不能简单将各段速度相加求平均。</li>
                <li><b>瞬时速度的大小叫瞬时速率：</b>汽车仪表盘（速度计）上显示的值即为物体的<b>瞬时速率</b>。</li>
            </ul>
        </div>
    `
},
{
    id: 'sec-307',
    subject: 'physics',
    chapterId: 'p-ch3',
    title: '3.7 变速直线运动的加速度',
    desc: '加速度定义式 a=Δv/Δt、方向判定及平均与瞬时加速度',
    content: `
        <h3>一、 加速度 (Acceleration)</h3>
        
        <p><b>定义：</b>描述<b>速度变化的快慢</b>，是<b>速度的变化量与时间的比值</b>。</p>
        
        <div class="box-yellow">
            <strong>定义式与单位：</strong>
            $$a = \\frac{\\Delta v}{\\Delta t}$$
            <ul>
                <li><b>矢量性：</b>加速度是<b>矢量</b>，方向与速度变化量 $\\Delta v$ 的方向一致。</li>
                <li><b>单位：</b>国际单位制中为<b>米每二次方秒 ($\\,\\text{m/s}^2$ 或 $\\text{m}\\cdot\\text{s}^{-2}$)</b>。</li>
            </ul>
        </div>
        
        <h3>二、 速度增减与方向关系（核心判定）</h3>
        
        <div class="box-blue">
            <ul>
                <li><b>速度增大 $\\rightarrow$ 加速度与速度方向相同</b> ($a \\cdot v > 0$)</li>
                <li><b>速度减小 $\\rightarrow$ 加速度与速度方向相反</b> ($a \\cdot v < 0$)</li>
            </ul>
        </div>
        
        <h3>三、 平均加速度与瞬时加速度</h3>
        
        <ul>
            <li><b>平均加速度：</b><b>一段时间内</b>速度改变的平均快慢程度。</li>
            <li><b>瞬时加速度：</b>物体在<b>任一时刻（或任一位置）</b>的速度变化的快慢程度。</li>
        </ul>
        
        <p>在 $v$-$t$ 图像中，割线的斜率代表平均加速度，而<b>切线的斜率代表瞬时加速度</b>：</p>
        
        <div style="text-align: center; margin: 15px 0;">
            <svg viewBox="0 0 320 160" style="max-width: 360px; width: 100%; height: auto; border: 1px solid #ccc; border-radius: 6px; background: #fafafa;">
                <!-- 坐标轴 -->
                <line x1="30" y1="130" x2="300" y2="130" stroke="#000" stroke-width="2"/>
                <line x1="30" y1="130" x2="30" y2="15" stroke="#000" stroke-width="2"/>
                <text x="290" y="145" font-size="11">t</text>
                <text x="15" y="25" font-size="11">v</text>
                
                <!-- 曲线 v(t) -->
                <path d="M 40 120 Q 150 110 270 30" fill="none" stroke="#007bff" stroke-width="2"/>
                
                <!-- 割线 Δt 较大 -->
                <line x1="100" y1="102" x2="240" y2="48" stroke="#6c757d" stroke-dasharray="3" stroke-width="1.5"/>
                <circle cx="100" cy="102" r="3" fill="#6c757d"/>
                <circle cx="240" cy="48" r="3" fill="#6c757d"/>
                <text x="180" y="90" font-size="10" fill="#6c757d">割线斜率 = 平均加速度 (Δv/Δt)</text>
                
                <!-- 切线 Δt -> 0 -->
                <line x1="120" y1="112" x2="270" y2="28" stroke="#dc3545" stroke-width="2"/>
                <circle cx="190" cy="62" r="4" fill="#dc3545"/>
                <text x="130" y="45" font-size="10" fill="#dc3545" font-weight="bold">切线斜率 = 瞬时加速度 a</text>
            </svg>
        </div>
        
        <h3>四、 三概念对比（避坑指南）</h3>
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-top:10px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>物理量</th>
                    <th>物理意义</th>
                    <th>表达式/符号</th>
                    <th>关键区别</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>速度 $v$</b></td>
                    <td>位置变化的快慢</td>
                    <td>$v = \\frac{\\Delta x}{\\Delta t}$</td>
                    <td>$v$ 大，$a$ 不一定大（如高速匀速飞行的飞机，$a=0$）</td>
                </tr>
                <tr>
                    <td><b>速度变化量 $\\Delta v$</b></td>
                    <td>速度改变的多少</td>
                    <td>$\\Delta v = v_t - v_0$</td>
                    <td>$\\Delta v$ 大，$a$ 不一定大（还取决于所用时间 $\\Delta t$）</td>
                </tr>
                <tr>
                    <td><b>加速度 $a$</b></td>
                    <td>速度变化的快慢</td>
                    <td>$a = \\frac{\\Delta v}{\\Delta t}$</td>
                    <td>$a$ 是 $\\Delta v$ 的变化率（反映速度变化的急剧程度）</td>
                </tr>
            </tbody>
        </table>
     `
},
{
    id: 'sec-308',
    subject: 'physics',
    chapterId: 'p-ch3',
    title: '3.8 匀加速直线运动',
    desc: '匀加速/匀减速定义、三大核心公式及其矢量正方向法则',
    content: `
        <h3>一、 匀变速直线运动 (Uniformly Accelerated Linear Motion)</h3>
        
        <div class="box-yellow">
            <strong>定义与分类：</strong><br>
            沿着直线运动且加速度 $a$ 保持不变的运动。
            <ul>
                <li><b>匀加速直线运动：</b>在相等的时间内<b>速度的增加量相等</b>（$a$ 与 $v_0$ 同向）。</li>
                <li><b>匀减速直线运动：</b>在相等的时间内<b>速度的减少量相等</b>（$a$ 与 $v_0$ 反向）。</li>
            </ul>
        </div>
        
        <h3>二、 三大核心基本公式</h3>
        
        <p>设初速度为 $v_0$，末速度为 $v$，加速度为 $a$，时间为 $t$，位移为 $s$（或 $\\Delta x$）：</p>
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-bottom:15px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>公式名称</th>
                    <th>数学表达式</th>
                    <th>公式特点与适用场景</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>① 速度-时间公式</b></td>
                    <td>$$v = v_0 + at$$</td>
                    <td>不含位移 $s$，用于已知时间求速度</td>
                </tr>
                <tr>
                    <td><b>② 位移-时间公式</b></td>
                    <td>$$s = v_0 t + \\frac{1}{2}at^2$$</td>
                    <td>不含末速度 $v$，用于已知时间求位移</td>
                </tr>
                <tr>
                    <td><b>③ 速度-位移公式</b></td>
                    <td>$$v^2 - v_0^2 = 2as$$</td>
                    <td><b>不含时间 $t$</b>，用于不涉及时间的计算</td>
                </tr>
            </tbody>
        </table>
        
        <h3>三、 辅助计算公式（平均速度法）</h3>
        <p>对于匀变速直线运动，在时间 $t$ 内的<b>平均速度</b>等于初速度与末速度的算术平均值：</p>
        
        <div class="box-blue">
            $$v_{\\text{平}} = \\frac{v_0 + v}{2}$$
            $$\\text{故位移公式也可写作：} \\quad s = v_{\\text{平}} \\cdot t = \\frac{v_0 + v}{2} \\cdot t$$
        </div>
        
        <h3>四、 矢量性与正方向规定（解题关键）</h3>
        <p>公式中的 $v_0$、$v$、$a$、$s$ 均为<b>矢量</b>，求解前必须指定正方向（通常规定以初速度 $v_0$ 的方向为正方向）：</p>
        <ul>
            <li>若物体做<b>匀加速运动</b>：加速度 $a > 0$（带正值代入）；</li>
            <li>若物体做<b>匀减速运动</b>：加速度 $a < 0$（<b>必须带负号代入计算</b>）；</li>
            <li>若位移或末速度方向与正方向相反，则 $s$ 或 $v$ 也应取负值。</li>
        </ul>
    `
},
{
    id: 'sec-309',
    subject: 'physics',
    chapterId: 'p-ch3',
    title: '3.9 自由落体运动',
    desc: '自由落体条件、重力加速度g及相关运动学公式',
    content: `
        <h3>一、 自由落体运动 (Free-Fall Motion)</h3>
        
        <div class="box-yellow">
            <strong>理想化模型与定义：</strong><br>
            物体<b>只在重力作用下</b>由<b>静止开始</b>下落的运动。
            <ul>
                <li><b>初速度条件：</b>$v_0 = 0$</li>
                <li><b>受力条件：</b>只受重力作用（若空气阻力可忽略不计，也可近似看作自由落体运动）。</li>
                <li><b>运动性质：</b>初速度为零的<b>匀加速直线运动</b>。</li>
            </ul>
        </div>
        
        <h3>二、 重力加速度 (Gravitational Acceleration, $g$)</h3>
        
        <ul>
            <li><b>定义：</b>自由落体运动的加速度，用符号 $g$ 表示，方向<b>总是竖直向下</b>。</li>
            <li><b>大小标准值：</b>在地球表面附近，通常取 $g \\approx 9.8\\text{ m/s}^2$（粗略计算时可取 $10\\text{ m/s}^2$）。</li>
            <li>
                <b>分布规律：</b>
                <ul>
                    <li><b>纬度影响：</b>赤道处 $g$ 最小，两极处 $g$ 最大（随纬度升高而增大）。</li>
                    <li><b>高度影响：</b>离地面越高，$g$ 越小（随海拔升高而减小）。</li>
                </ul>
            </li>
        </ul>
        
        <h3>三、 自由落体核心计算公式</h3>
        
        <p>自由落体运动是匀变速直线运动在 $v_0 = 0$、$a = g$、$s = h$ 时的特例：</p>
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-bottom:15px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>公式名称</th>
                    <th>通用匀变速公式</th>
                    <th>自由落体公式</th>
                    <th>应用场景</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>速度-时间公式</b></td>
                    <td>$v = v_0 + at$</td>
                    <td>$$v = gt$$</td>
                    <td>已知下落时间求瞬时速度</td>
                </tr>
                <tr>
                    <td><b>位移-时间公式</b></td>
                    <td>$s = v_0 t + \\frac{1}{2}at^2$</td>
                    <td>$$h = \\frac{1}{2}gt^2$$</td>
                    <td>已知下落时间求下落高度</td>
                </tr>
                <tr>
                    <td><b>速度-位移公式</b></td>
                    <td>$v^2 - v_0^2 = 2as$</td>
                    <td>$$v^2 = 2gh$$</td>
                    <td><b>不含时间 $t$</b>，已知高度求末速度</td>
                </tr>
            </tbody>
        </table>
        
        <div class="box-blue">
            <strong>💡 实用推论：</strong><br>
            <ul>
                <li>由 $h = \\frac{1}{2}gt^2$ 可得下落时间：$$t = \\sqrt{\\frac{2h}{g}}$$</li>
                <li>所有物体在同一地点做自由落体运动时，<b>下落快慢与物体的质量、形状无关</b>。</li>
            </ul>
        </div>
    `
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
    desc: '作用力与反作用力性质、平衡力对比及升降机视重分析',
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
        <table border="1" style="width:100%; border-collapse:collapse; margin-top:10px; margin-bottom:15px; text-align:center;">
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
        
        <h3>四、 升降机问题：超重与失重状态（视重分析）</h3>
        
        <p>当人或物体站在升降机内的体重计上时，<b>体重计的示数（视重）反映的是人对底板的压力 $F_N'$</b>。根据牛顿第三定律，底板对人的支持力 $F_N = F_N'$。</p>
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-bottom:15px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>状态</th>
                    <th>加速度 $a$ 方向</th>
                    <th>运动情况示例</th>
                    <th>支持力/压力公式 ($F_N$)</th>
                    <th>现象与视重关系</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>超重</b><br>(Overweight)</td>
                    <td><b>竖直向上</b> $(\\uparrow)$</td>
                    <td>
                        • 升降机<b>加速上升</b><br>
                        • 升降机<b>减速下降</b>
                    </td>
                    <td>
                        $$F_N - mg = ma$$
                        $$F_N = m(g + a)$$
                    </td>
                    <td><b>$F_N > mg$</b><br>视重大于实重（感觉变重）</td>
                </tr>
                <tr>
                    <td><b>失重</b><br>(Weightlessness)</td>
                    <td><b>竖直向下</b> $(\\downarrow)$</td>
                    <td>
                        • 升降机<b>减速上升</b><br>
                        • 升降机<b>加速下降</b>
                    </td>
                    <td>
                        $$mg - F_N = ma$$
                        $$F_N = m(g - a)$$
                    </td>
                    <td><b>$F_N < mg$</b><br>视重小于实重（感觉变轻）</td>
                </tr>
                <tr>
                    <td><b>完全失重</b></td>
                    <td><b>竖直向下</b>，且 $a = g$</td>
                    <td>升降机钢索断裂<b>自由下落</b></td>
                    <td>
                        $$F_N = m(g - g) = 0$$
                    </td>
                    <td><b>$F_N = 0$</b><br>压力完全消失</td>
                </tr>
            </tbody>
        </table>
        
        <div class="box-blue">
            <strong>💡 避坑要点：</strong><br>
            <ul>
                <li>判断超重还是失重，<b>只取决于加速度 $a$ 的方向</b>，与物体的运动方向（速度 $v$ 的方向）无关：加速度向上即超重，加速度向下即失重。</li>
                <li>无论是超重还是失重，<b>物体受到的真实重力 $G = mg$ 始终保持不变</b>，改变的只是支持力/压力（视重）。</li>
            </ul>
        </div>
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
    desc: '曲线运动的速度方向（切线方向）及合力产生条件与轨迹弯曲规律',
    content: `
        <h3>一、 曲线运动及其性质 (Curvilinear Motion)</h3>
        
        <div class="box-yellow">
            <strong>定义与本质：</strong><br>
            运动路径为<b>曲线</b>的运动。
            <ul>
                <li><b>速度方向：</b>质点在某一点（或某一时刻）的<b>速度方向，沿曲线在这一点的切线方向</b>。</li>
                <li><b>运动性质：</b>由于速度的方向时刻在改变，因此曲线运动<b>必然是变速运动</b>（必定具有加速度 $a \\neq 0$）。</li>
            </ul>
        </div>
        
        <h3>二、 曲线运动的直观矢量图解</h3>
        
        <div style="text-align: center; margin: 15px 0;">
            <svg viewBox="0 0 340 170" style="max-width: 380px; width: 100%; height: auto; border: 1px solid #ccc; border-radius: 6px; background: #fafafa;">
                <!-- 曲线轨迹 -->
                <path d="M 30 140 Q 150 20 310 120" fill="none" stroke="#007bff" stroke-width="3"/>
                
                <!-- P 点标记 -->
                <circle cx="150" cy="53" r="4" fill="#dc3545"/>
                <text x="145" y="40" font-size="12" font-weight="bold" fill="#dc3545">P (质点)</text>
                
                <!-- 速度矢量 v (切线) -->
                <line x1="150" y1="53" x2="230" y2="28" stroke="#28a745" stroke-width="2.5" marker-end="url(#arrow-green)"/>
                <text x="210" y="20" font-size="11" font-weight="bold" fill="#28a745">速度 v (切线方向)</text>
                
                <!-- 合力矢量 F (指向曲线凹侧) -->
                <line x1="150" y1="53" x2="190" y2="105" stroke="#dc3545" stroke-width="2.5" marker-end="url(#arrow-red)"/>
                <text x="195" y="100" font-size="11" font-weight="bold" fill="#dc3545">合力 F (指向凹侧)</text>
                
                <!-- 轨迹弯曲趋势标注 -->
                <text x="50" y="155" font-size="10" fill="#6c757d">轨迹向合力 F 的方向弯曲</text>
        
                <!-- 箭头定义 -->
                <defs>
                    <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#28a745"/>
                    </marker>
                    <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc3545"/>
                    </marker>
                </defs>
            </svg>
        </div>
        
        <h3>三、 曲线运动的产生条件</h3>
        
        <div class="box-blue">
            <strong>核心条件：</strong><br>
            物体所受<b>合外力 $F_{\\text{合}}$ 的方向（或加速度 $a$ 的方向）与速度 $v$ 的方向不在同一条直线上</b>。
        </div>
        
        <h3>四、 轨迹与合力的几何判定法则</h3>
        
        <ul>
            <li><b>弯曲偏转规律：</b>运动轨迹总是向<b>合外力所指的一侧（曲线的凹侧）弯曲</b>。</li>
            <li><b>速率增减法则：</b>
                <ul>
                    <li>若合力 $F_{\\text{合}}$ 与速度 $v$ 夹角为<b>锐角</b> $\\rightarrow$ 速率<b>增大</b>；</li>
                    <li>若合力 $F_{\\text{合}}$ 与速度 $v$ 夹角为<b>钝角</b> $\\rightarrow$ 速率<b>减小</b>；</li>
                    <li>若合力 $F_{\\text{合}}$ 与速度 $v$ <b>垂直</b>（如匀速圆周运动） $\\rightarrow$ 速率<b>不变</b>，仅改变方向。</li>
                </ul>
            </li>
        </ul>
    `
},
{
    id: 'sec-602',
    subject: 'physics',
    chapterId: 'p-ch6',
    title: '6.2 抛射体运动',
    desc: '运动的合成与分解、平抛与斜抛运动的规律及射程公式',
    content: `
        <h3>一、 抛射体运动与运动的合成与分解</h3>
        
        <div class="box-yellow">
            <strong>基本概念：</strong>
            <ul>
                <li><b>抛射体运动：</b>以一定的<b>初速度</b>将物体抛出，且仅在重力作用下（忽略空气阻力）所做的运动。</li>
                <li><b>初速度 ($v_0$)：</b>抛射体开始运动时的速度。</li>
                <li><b>运动的合成与分解：</b>根据<b>矢量运算的平行四边形定则</b>，物体的实际运动（合运动）可以分解为几个独立的并发运动（分运动），合运动的速度/位移即为各分运动速度/位移的矢量和。</li>
            </ul>
        </div>
        
        <h3>二、 平抛运动 (Horizontal Projectile Motion)</h3>
        <p><b>特点：</b>初速度水平（$v_0 \neq 0$），只受重力作用，轨迹为<b>抛物线</b>。</p>
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-bottom:15px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>运动维度</th>
                    <th>运动性质</th>
                    <th>速度公式</th>
                    <th>位移公式</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>水平方向</b></td>
                    <td>匀速直线运动</td>
                    <td>$v_x = v_0$</td>
                    <td>$x = v_0 t$</td>
                </tr>
                <tr>
                    <td><b>竖直方向</b></td>
                    <td>自由落体运动（匀加速直线运动，$v_{0y}=0$）</td>
                    <td>$v_y = gt$</td>
                    <td>$y = \\frac{1}{2}gt^2$</td>
                </tr>
            </tbody>
        </table>
        
        <h3>三、 斜抛运动 (Oblique Projectile Motion)</h3>
        <p><b>特点：</b>初速度与水平方向成 $\\theta$ 角斜向上（或斜向下）抛出，轨迹为开口向下的<b>抛物线</b>。</p>
        
        <p><b>1. 分运动规律（以斜向上抛为例，设初速度与水平方向夹角为 $\\theta$）：</b></p>
        <ul>
            <li>
                <b>水平方向（匀速直线运动）：</b>
                <ul>
                    <li>初速度分量：$$v_x = v_0 \\cos\\theta$$</li>
                    <li>水平位移：$$x = (v_0 \\cos\\theta) t$$</li>
                </ul>
            </li>
            <li>
                <b>竖直方向（匀变速直线运动，取向上为正方向）：</b>
                <ul>
                    <li>速度公式：$$v_y = v_0 \\sin\\theta - gt$$</li>
                    <li>竖直位移：$$y = (v_0 \\sin\\theta) t - \\frac{1}{2}gt^2$$</li>
                </ul>
            </li>
        </ul>
        
        <p><b>2. 射程公式与抛射角关系：</b></p>
        <p>消除时间 $t$ 可推导出斜抛运动落地时的水平最大距离（<b>射程 $x$</b>）：</p>
        
        <div class="box-blue">
            $$x = \\frac{v_0^2 \\sin(2\\theta)}{g}$$
            <ul>
                <li>当 $\\theta < 45^\\circ$ 时：抛射角 $\\theta$ 越大，射程 $x$ 越大；</li>
                <li>当 $\\theta > 45^\\circ$ 时：抛射角 $\\theta$ 越大，射程 $x$ 越小；</li>
                <li>当 <b>$\\theta = 45^\\circ$</b> 时：$\\sin(2\\theta) = \\sin 90^\\circ = 1$，<b>射程达到最大值</b> $x_{\\text{max}} = \\frac{v_0^2}{g}$。</li>
            </ul>
        </div>
     `
},
{
    id: 'sec-603',
    subject: 'physics',
    chapterId: 'p-ch6',
    title: '6.3 匀速圆周运动',
    desc: '线速率、角速率、周期与频率的定义及公式关系',
    content: `
        <h3>一、 匀速率圆周运动 (Uniform Circular Motion)</h3>
        
        <div class="box-yellow">
            <strong>定义与运动性质：</strong><br>
            物体做圆周运动时，在<b>相等的时间内通过的弧长相等</b>。
            <ul>
                <li><b>运动性质：</b>属于<b>变速运动</b>。虽然运动的<i>速率</i>保持不变，但速度的<i>方向时刻在改变</i>（沿轨迹切线方向）。</li>
            </ul>
        </div>
        
        <h3>二、 核心描述物理量</h3>
        
        <p><b>1. 线速率 (Linear Speed, $v$)：</b></p>
        <ul>
            <li><b>定义：</b>描述物体沿圆周运动快慢的物理量，等于通过的<b>弧长 $\\Delta s$ 与所用时间 $\\Delta t$ 的比值</b>。</li>
            <li><b>公式：</b>$$v = \\frac{\\Delta s}{\\Delta t}$$</li>
        </ul>
        
        <p><b>2. 角速率 (Angular Speed, $\\omega$)：</b></p>
        <ul>
            <li><b>定义：</b>描述物体绕圆心转动快慢的物理量，等于半径转过的<b>角度 $\\Delta \\theta$ 与转过该角度所用时间 $\\Delta t$ 的比值</b>。</li>
            <li><b>公式：</b>$$\\omega = \\frac{\\Delta \\theta}{\\Delta t}$$</li>
            <li><b>特点：</b>在匀速圆周运动中，<b>角速率 $\\omega$ 保持恒定不变</b>。</li>
        </ul>
        
        <p><b>3. 周期 ($T$) 与 频率 ($f$)：</b></p>
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-bottom:15px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>物理量</th>
                    <th>物理意义</th>
                    <th>单位</th>
                    <th>相互关系</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>周期 (Period, $T$)</b></td>
                    <td>物体做圆周运动<b>运动一周</b>所用的时间</td>
                    <td>秒 ($\\,\\text{s}$)</td>
                    <td rowspan="2" style="vertical-align:middle;">
                        $$f = \\frac{1}{T} \\quad \\text{或} \\quad T = \\frac{1}{f}$$
                    </td>
                </tr>
                <tr>
                    <td><b>频率 (Frequency, $f$)</b></td>
                    <td>物体在<b>单位时间内转过的圈数</b></td>
                    <td>赫兹 ($\\,\\text{Hz}$)</td>
                </tr>
            </tbody>
        </table>
        
        <h3>三、 各物理量之间的关系（核心推论）</h3>
        
        <p>在半径为 $r$ 的圆周运动中：</p>
        
        <div class="box-blue">
            $$v = \\omega r$$
            $$v = \\frac{2\\pi r}{T} = 2\\pi r f \\quad , \\quad \\omega = \\frac{2\\pi}{T} = 2\\pi f$$
            <ul>
                <li><b>线速率与角速率关系：</b>在半径 $r$ 确定的圆周运动中，<b>线速率 $v$ 与角速率 $\\omega$ 成正比</b>。</li>
                <li><b>同轴转动模型：</b>同轴转动的各点<b>角速率 $\\omega$ 相同</b>，线速率 $v$ 与半径 $r$ 成正比。</li>
                <li><b>皮带/齿轮传动模型：</b>不打滑的边缘各点<b>线速率 $v$ 相同</b>，角速率 $\\omega$ 与半径 $r$ 成反比。</li>
            </ul>
        </div>
    `
},
{
    id: 'sec-604',
    subject: 'physics',
    chapterId: 'p-ch6',
    title: '6.4 向心力',
    desc: '向心加速度/向心力的大小、方向及其效果力属性',
    content: `
        <h3>一、 向心加速度 (Centripetal Acceleration, $a_C$)</h3>
        
        <div class="box-yellow">
            <strong>定义与方向：</strong><br>
            做匀速圆周运动的物体所具有的加速度。
            <ul>
                <li><b>方向：</b>在任意时刻都<b>沿着半径指向圆心</b>（方向时刻在改变）。</li>
                <li><b>运动性质：</b>匀速圆周运动是<b>加速度大小不变、方向时刻改变的变加速曲线运动</b>。</li>
            </ul>
        </div>
        
        <p><b>1. 公式表达：</b></p>
        <p>向心加速度的大小可以用线速率 $v$、角速率 $\\omega$、周期 $T$ 和半径 $r$ 表示：</p>
        
        $$a_C = \\frac{v^2}{r} = \\omega^2 r = \\left(\\frac{2\\pi}{T}\\right)^2 r = 4\\pi^2 f^2 r$$
        
        <h3>二、 向心力 (Centripetal Force, $F_C$)</h3>
        
        <p><b>1. 定义与方向：</b>产生向心加速度的力，方向<b>始终指向圆心</b>（与瞬时速度方向垂直，故<b>向心力不做功</b>）。</p>
        
        <p><b>2. 公式表达：</b></p>
        
        <div class="box-blue">
            $$F_C = m a_C = m \\frac{v^2}{r} = m \\omega^2 r = m \\frac{4\\pi^2}{T^2} r$$
        </div>
        
        <p><b>3. 关键理解（力学属性）：</b></p>
        <ul>
            <li><b>向心力不是一种特殊的力：</b>它不是像重力、弹力、摩擦力那样按性质命名的力，而是<b>根据作用效果命名的“效果力”</b>。</li>
            <li><b>来源：</b>向心力可以由某个具体的力提供（如万有引力提供行星公转向心力），也可以由几个力的合力或某个力的分力提供。</li>
        </ul>
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-top:15px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>常见运动模型</th>
                    <th>向心力的来源</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>太阳系行星公转 / 卫星绕地</b></td>
                    <td>万有引力提供向心力</td>
                </tr>
                <tr>
                    <td><b>汽车在水平路面转弯</b></td>
                    <td>地面对轮胎的静态摩擦力提供向心力</td>
                </tr>
                <tr>
                    <td><b>绳子拴小球在水平面旋转</b></td>
                    <td>绳子的拉力提供向心力</td>
                </tr>
            </tbody>
        </table>
    `
},
{
    id: 'sec-605',
    subject: 'physics',
    chapterId: 'p-ch6',
    title: '6.5 离心运动及其应用',
    desc: '离心运动定义、产生条件及生活中的应用与防范',
    content: `
        <h3>一、 离心运动 (Centrifugal Motion)</h3>
        
        <div class="box-yellow">
            <strong>定义：</strong><br>
            做圆周运动的物体，在<b>合外力突然消失</b>或<b>合外力不足以提供所需的向心力</b>时，物体所做的逐渐<b>远离圆心</b>的运动。
        </div>
        
        <h3>二、 离心运动的受力与运动条件</h3>
        
        <p>设物体做圆周运动时所需的向心力为 $F_{\\text{需}} = m \\frac{v^2}{r} = m \\omega^2 r$，实际受到的合外力为 $F_{\\text{合}}$：</p>
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-bottom:15px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>受力关系</th>
                    <th>运动状态</th>
                    <th>轨迹特征</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>$F_{\\text{合}} = F_{\\text{需}}$</td>
                    <td>做圆周运动</td>
                    <td>保持原圆周轨道运行</td>
                </tr>
                <tr>
                    <td>$F_{\\text{合}} = 0$</td>
                    <td><b>离心运动</b>（完全离心）</td>
                    <td>沿受力消失时刻的<b>切线方向做匀速直线运动</b></td>
                </tr>
                <tr>
                    <td>$F_{\\text{合}} < F_{\\text{需}}$</td>
                    <td><b>离心运动</b>（部分离心）</td>
                    <td>沿<b>切线与原圆周之间的抛物线/曲线</b>逐渐远离圆心</td>
                </tr>
                <tr>
                    <td>$F_{\\text{合}} > F_{\\text{需}}$</td>
                    <td><b>向心运动</b>（近心运动）</td>
                    <td>逐渐向圆心靠拢</td>
                </tr>
            </tbody>
        </table>
        
        <div class="box-blue">
            <strong>⚠️ 关键概念澄清：离心力存在吗？</strong><br>
            <ul>
                <li>离心运动<b>并不是物体受到所谓的“离心力”作用</b>，而是由于物体自身的<b>惯性</b>（物体倾向于保持切线方向的直线运动状态）。</li>
                <li>离心运动的本质是<b>提供的合外力“拉不住”物体</b>了。</li>
            </ul>
        </div>
        
        <h3>三、 生活中的应用与防范</h3>
        
        <ul>
            <li>
                <b>离心运动的应用：</b>
                <ul>
                    <li><b>洗衣机甩干桶：</b>利用离心运动使水滴穿过小孔飞出；</li>
                    <li><b>离心沉淀机/棉花糖机：</b>利用离心运动将不同密度的物质分离或甩出糖丝。</li>
                </ul>
            </li>
            <li>
                <b>离心运动的防范：</b>
                <ul>
                    <li><b>汽车转弯限制车速：</b>速度 $v$ 过快会导致所需的 $m\\frac{v^2}{r}$ 超过最大静摩擦力，从而发生离心侧滑；</li>
                    <li><b>高速公路转弯处建造成外高内低：</b>利用重力和支持力的合力提供部分向心力，防止离心事故。</li>
                </ul>
            </li>
        </ul>
    `
},
{
    id: 'sec-606',
    subject: 'physics',
    chapterId: 'p-ch6',
    title: '6.6 竖直平面上的圆周运动',
    desc: '顶点与底部的受力分析、向心力表达及临界速度',
    content: `
        <h3>一、 竖直平面内圆周运动的受力分析</h3>
        
        <p>物体在竖直平面内做圆周运动时，在<b>最高点（顶点）</b>和<b>最低点（底部）</b>，合外力完全沿半径方向，充当向心力 $F_C$（设重力为 $W = mg$，轨道支持力或绳子拉力为 $F_N$）。</p>
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-bottom:15px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>位置</th>
                    <th>受力方向分析</th>
                    <th>向心力公式 ($F_C$)</th>
                    <th>超/失重状态</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>圆周顶点（最高点）</b></td>
                    <td>重力 $W$ 向下，若支持力 $F_N$ 向上：<br>合力 $F_C = W - F_N$</td>
                    <td>$$F_C = W - F_N = m\\frac{v_{\\text{顶}}^2}{r}$$<br>（此时 $W > F_N$）</td>
                    <td><b>失重状态</b><br>（支持力/压力小于重力）</td>
                </tr>
                <tr>
                    <td><b>圆周底部（最低点）</b></td>
                    <td>支持力/拉力 $F_N$ 向上，重力 $W$ 向下：<br>合力 $F_C = F_N - W$</td>
                    <td>$$F_C = F_N - W = m\\frac{v_{\\text{底}}^2}{r}$$<br>（此时 $F_N > W$）</td>
                    <td><b>超重状态</b><br>（支持力/拉力大于重力）</td>
                </tr>
            </tbody>
        </table>
        
        <h3>二、 两种典型模型的临界条件对比</h3>
        
        <div class="box-yellow">
            <strong>1. 绳/单侧轨道模型（只能提供拉力/支撑力向下）：</strong>
            <ul>
                <li><b>最高点临界条件：</b>当弹力 $F_N = 0$ 时，仅由重力提供向心力 $W = m\\frac{v^2}{r}$。</li>
                <li><b>最小过顶速度：</b>$$v_{\\text{临界}} = \\sqrt{gr}$$</li>
                <li>若 $v < \\sqrt{gr}$，物体将无法到达最高点，提前脱离轨道或掉落。</li>
            </ul>
        </div>
        
        <div class="box-blue">
            <strong>2. 轻杆/双侧管道模型（既能提供拉力，也能提供支持力向上）：</strong>
            <ul>
                <li><b>最高点临界条件：</b>杆对物体的支持力等于重力 $F_N = W$，此时向心力 $F_C = 0$。</li>
                <li><b>最小过顶速度：</b>$$v_{\\text{临界}} = 0$$</li>
                <li>当 $v > \\sqrt{gr}$ 时，杆表现为<b>拉力</b>；当 $v < \\sqrt{gr}$ 时，杆表现为<b>支持力</b>。</li>
            </ul>
        </div>
    `
},
{
    id: 'sec-607',
    subject: 'physics',
    chapterId: 'p-ch6',
    title: '6.7 行星的运动及开普勒定律',
    desc: '开普勒三大定律内容、公式表达及近日点/远日点速度关系',
    content: `
        <h3>一、 开普勒行星运动定律 (Kepler's Laws of Planetary Motion)</h3>
        
        <p>开普勒三大定律揭示了太阳系内行星绕太阳运行的运动规律，是天体物理学的基石。</p>
        
        <div class="box-yellow">
            <strong>1. 开普勒第一定律（轨道定律）：</strong><br>
            所有行星绕太阳运动的轨道都是<b>椭圆</b>，太阳处在椭圆的<b>一个焦点</b>上。
        </div>
        
        <div class="box-blue">
            <strong>2. 开普勒第二定律（面积定律）：</strong><br>
            对每个行星而言，太阳与行星的连线在<b>相等的时间内扫过的面积相等</b>。
            <ul>
                <li><b>推论：</b>行星在距离太阳较近的<b>近日点</b>时运行速度较<b>快</b>；在距离太阳较远的<b>远日点</b>时运行速度较<b>慢</b>。</li>
            </ul>
        </div>
        
        <div class="box-yellow">
            <strong>3. 开普勒第三定律（周期定律）：</strong><br>
            绕太阳运行的所有行星的<b>半长轴的立方与其公转周期的平方成正比</b>。
            <p>数学表达式：</p>
            $$\\frac{a^3}{T^2} = k$$
            <ul>
                <li>$a$：椭圆轨道的半长轴（若近似看作圆轨道，则为圆轨道半径 $r$）；</li>
                <li>$T$：行星绕太阳公转的周期；</li>
                <li>$k$：比例常数。<b>常数 $k$ 的大小只与中心天体（太阳）的质量有关</b>，与围绕其运行的行星无关。</li>
            </ul>
        </div>
        
        <h3>二、 简化计算：圆轨道模型</h3>
        
        <p>在中学物理的大多数天体计算中，常将行星绕太阳的椭圆轨道<b>近似看作匀速圆周运动</b>：</p>
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-top:10px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>椭圆轨道概念</th>
                    <th>近似圆轨道概念</th>
                    <th>开普勒第三定律近似形式</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>半长轴 $a$</td>
                    <td>圆轨道半径 $r$</td>
                    <td rowspan="2" style="vertical-align:middle;">
                        $$\\frac{R^3}{T^2} = k$$
                    </td>
                </tr>
                <tr>
                    <td>焦点位置（太阳）</td>
                    <td>圆心位置（太阳）</td>
                </tr>
            </tbody>
        </table>
    `
},
{
    id: 'sec-608',
    subject: 'physics',
    chapterId: 'p-ch6',
    title: '6.8 万有引力定律',
    desc: '万有引力定律、引力常量G、黄金代换式及三大宇宙速度',
    content: `
        <h3>一、 万有引力定律 (Law of Universal Gravitation)</h3>
        
        <div class="box-yellow">
            <strong>内容与公式：</strong><br>
            自然界中任何两个物体都相互吸引，引力 $F$ 的大小与这两个物体的质量 $m_1$ 和 $m_2$ 的乘积成正比，与它们之间距离 $r$ 的平方成反比。
            $$F = G \\frac{m_1 m_2}{r^2}$$
            <ul>
                <li><b>单位规范：</b>质量 $m$ 的单位为千克 ($\\,\\text{kg}$)，距离 $r$ 的单位为米 ($\\,\\text{m}$)。</li>
                <li><b>引力常量 ($G$)：</b>由卡文迪什通过扭秤实验测定，$G \\approx 6.674 \\times 10^{-11} \\,\\text{N}\\cdot\\text{m}^2/\\text{kg}^2$。</li>
                <li><b>适用特征：</b>一般物体间的引力极小，通常可忽略不计；仅在天体间或微观巨大质量物体间效果显著。</li>
            </ul>
        </div>
        
        <h3>二、 万有引力与重力的关系（黄金代换）</h3>
        
        <p>在地面附近，忽略地球自转影响时，质量为 $m$ 的物体所受的<b>重力等于地球对它的万有引力</b>（设地球质量为 $M$，半径为 $R$）：</p>
        
        $$m g = G \\frac{m M}{R^2}$$
        
        <div class="box-blue">
            <strong>核心推论（黄金代换式）：</strong>
            $$g R^2 = G M \\quad \\implies \\quad M = \\frac{g R^2}{G}$$
            利用此式可以在未知地球质量 $M$ 的情况下，用地面重力加速度 $g$ 和半径 $R$ 进行等效替换。
        </div>
        
        <h3>三、 天体运行与向心力推导</h3>
        
        <p>天体做圆周运动时，<b>万有引力充当向心力</b>：</p>
        
        $$G \\frac{m M}{r^2} = F_C = m a_C = m \\frac{v^2}{r} = m \\omega^2 r = m \\frac{4\\pi^2}{T^2} r$$
        
        <p>推导出线速度与轨道半径的关系：$$v = \\sqrt{\\frac{GM}{r}}$$</p>
        
        <h3>四、 三大宇宙速度</h3>
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-top:10px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>宇宙速度</th>
                    <th>数值大小</th>
                    <th>物理意义与轨迹特征</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>第一宇宙速度</b><br>(环绕速度)</td>
                    <td>$$\\,v_1 = 7.9\\text{ km/s}$$</td>
                    <td>航天器近地沿<b>圆形轨道</b>绕地球运行的线速度。<br>（既是<b>最小发射速度</b>，也是<b>最大环绕速度</b>）</td>
                </tr>
                <tr>
                    <td><b>第二宇宙速度</b><br>(脱离速度)</td>
                    <td>$$\\,v_2 = 11.2\\text{ km/s}$$</td>
                    <td>航天器<b>脱离地球引力</b>束缚、成为绕太阳运行的人造行星所需的最小发射速度。</td>
                </tr>
                <tr>
                    <td><b>第三宇宙速度</b><br>(逃逸速度)</td>
                    <td>$$\\,v_3 = 16.7\\text{ km/s}$$</td>
                    <td>航天器<b>脱离太阳引力</b>束缚、飞出太阳系所需的最小发射速度。</td>
                </tr>
            </tbody>
        </table>
     `
},
{
    id: 'sec-701',
    subject: 'physics',
    chapterId: 'p-ch7',
    title: '7.1 功和功率',
    desc: '功的定义式、正负功判定法则、平均功率与瞬时功率',
    content: `
        <h3>一、 功 (Work, $W$)</h3>
        
        <div class="box-yellow">
            <strong>定义与做功两要素：</strong><br>
            如果一个物体在<b>力的作用下</b>发生<b>位移</b>，且位移方向上存在力的分量，则这个力对物体做了功。
            <ul>
                <li><b>做功的两个必要因素：</b>① 作用在物体上的力 $F$；② 物体在力的方向上发生的位移 $s$。</li>
                <li><b>标量性：</b>功是<b>标量</b>（只有大小，没有方向），单位为<b>焦耳 ($\\,\\text{J}$)</b>，其中 $1\\text{ J} = 1\\text{ N}\\cdot\\text{m}$。</li>
            </ul>
        </div>
        
        <p><b>1. 功的定义式：</b></p>
        
        $$W = F s \\cos\\theta$$
        
        <p>（其中 $F$ 为力的大小，$s$ 为位移的大小，$\\theta$ 为<b>力的方向与位移方向之间的夹角</b>）</p>
        
        <p><b>2. 正功与负功（物理意义）：</b></p>
        <p>功的正负<b>不代表方向</b>，而是代表力对物体运动所起的作用（促进还是阻碍）：</p>
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-bottom:15px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>夹角 $\\theta$ 范围</th>
                    <th>$\\,\\cos\\theta$ 符号</th>
                    <th>功 $W$ 符号</th>
                    <th>物理效果与效果描述</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>$0^\\circ \\le \\theta < 90^\\circ$</td>
                    <td>$\\cos\\theta > 0$</td>
                    <td><b>$W > 0$（正功）</b></td>
                    <td>力对物体的位移起<b>促进作用</b>（使物体动能增加）</td>
                </tr>
                <tr>
                    <td>$\\theta = 90^\\circ$</td>
                    <td>$\\cos\\theta = 0$</td>
                    <td><b>$W = 0$（不做功）</b></td>
                    <td>力与位移垂直，对物体运动无促进或阻碍作用</td>
                </tr>
                <tr>
                    <td>$90^\\circ < \\theta \\le 180^\\circ$</td>
                    <td>$\\cos\\theta < 0$</td>
                    <td><b>$W < 0$（负功）</b></td>
                    <td>力对物体的位移起<b>阻碍作用</b>（也称物体克服该力做功）</td>
                </tr>
            </tbody>
        </table>
        
        <h3>二、 功率 (Power, $P$)</h3>
        
        <div class="box-blue">
            <strong>定义与单位：</strong><br>
            描述物体<b>做功快慢</b>的物理量，等于功 $W$ 与完成这些功所用时间 $t$ 的比值。
            <ul>
                <li><b>单位：</b>国际单位制中为<b>瓦特 ($\\,\\text{W}$)</b>，常用单位还有千瓦 ($\\,\\text{kW}$)。</li>
                <li><b>单位换算：</b>$1\\text{ W} = 1\\text{ J/s} = 1\\text{ J}\\cdot\\text{s}^{-1}$。</li>
            </ul>
        </div>
        
        <p><b>1. 平均功率：</b>描述某段时间内做功的平均快慢。</p>
        
        $$P = \\frac{W}{t}$$
        
        <p><b>2. 瞬时功率：</b>描述某一时刻或某一位置做功的快慢。</p>
        
        $$P = F v \\cos\\theta$$
        
        <ul>
            <li>若力的方向与速度方向相同（$\\theta = 0^\\circ$），则 $P = Fv$；</li>
            <li>对于汽车等牵引机械，当功率 $P$ 恒定且沿直线运动时，牵引力 $F = \\frac{P}{v}$，即速度越大，牵引力越小。</li>
        </ul>
    `
},
{
    id: 'sec-702',
    subject: 'physics',
    chapterId: 'p-ch7',
    title: '7.2 恒力与变力的功',
    desc: '恒力做功公式、变力微元法/积分思想及弹簧弹力做功',
    content: `
        <h3>一、 恒力做功 (Work by a Constant Force)</h3>
        
        <p>当作用在物体上的力的大小和方向都保持不变时，称为<b>恒力做功</b>。</p>
        
        <div class="box-yellow">
            <strong>恒力做功公式：</strong>
            $$W = F s \\cos\\theta$$
            <ul>
                <li>$F$：恒力的大小；</li>
                <li>$s$：物体的位移大小；</li>
                <li>$\\theta$：恒力 $F$ 的方向与位移 $s$ 方向的夹角。</li>
            </ul>
        </div>
        
        <h3>二、 变力做功 (Work by a Variable Force)</h3>
        
        <p>当力的大小或方向随位置/时间变化时，不能直接套用恒力公式，需要采用<b>微元法（微积分思想）</b>。</p>
        
        <div class="box-blue">
            <strong>微元法核心思想：</strong><br>
            把物体的总位移分成很多非常小的小段 $\\Delta s_1, \\Delta s_2, \\dots, \\Delta s_n$。在极小的位移 $\\Delta s_i$ 内，力 $F_i$ 可以看作<b>恒力</b>。<br>
            将每一小段上的功累加起来，当 $\\Delta s \\to 0$ 时，即得到变力做功的总和：
            $$W = \\lim_{\\Delta s \\to 0} \\sum F_i \\Delta s_i \\cos\\theta_i = \\int F \\cdot \\mathrm{d}s$$
        </div>
        
        <p><b>变力做功的常见求解途径：</b></p>
        <ul>
            <li><b>1. $F$-$s$ 图像法：</b>在 $F$-$s$ 图像中，图线与位移轴所围成的<b>面积</b>即表示力所做的功。</li>
            <li><b>2. 平均力法：</b>若力随位移线性均匀变化（如 $F = kx$），可用平均力 $\\bar{F} = \\frac{F_{\\text{初}} + F_{\\text{末}}}{2}$ 代替恒力计算。</li>
            <li><b>3. 动能定理法：</b>用总功等于动能变化量求解（$W_{\\text{变}} + W_{\\text{其它}} = \\Delta E_k$）。</li>
        </ul>
        
        <h3>三、 弹簧弹力做功与弹性势能</h3>
        
        <p>弹簧的弹力 $F = kx$（胡克定律）随形变量 $x$ 改变，属于典型的<b>线性变力</b>。</p>
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-bottom:15px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>物理量</th>
                    <th>公式表达</th>
                    <th>物理意义与说明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>外力克服弹力做功</b><br>（从原长拉伸/压缩 $x$）</td>
                    <td>$$W_{\\text{外}} = \\frac{1}{2} k x^2$$</td>
                    <td>等于 $F$-$x$ 图像中三角形的面积，即外力对弹簧所做的功</td>
                </tr>
                <tr>
                    <td><b>弹簧弹性势能</b> ($E_p$)</td>
                    <td>$$E_p = \\frac{1}{2} k x^2$$</td>
                    <td>形变量为 $x$ 时，弹簧内部储存的能量</td>
                </tr>
                <tr>
                    <td><b>弹簧自身弹力做功</b><br>（从 $x_1$ 到 $x_2$）</td>
                    <td>$$W_{\\text{弹}} = \\frac{1}{2} k x_1^2 - \\frac{1}{2} k x_2^2 = -\\Delta E_p$$</td>
                    <td>弹力做正功，弹性势能减少；<br>弹力做负功（克服弹力做功），弹性势能增加</td>
                </tr>
            </tbody>
        </table>
    `
},
{
    id: 'sec-703',
    subject: 'physics',
    chapterId: 'p-ch7',
    title: '7.3 动能',
    desc: '动能的概念与表达式、动能定理及其物理意义与解题应用',
    content: `
        <h3>一、 动能 (Kinetic Energy, $E_k$)</h3>
        
        <div class="box-yellow">
            <strong>定义与特征：</strong><br>
            物体由于<b>运动</b>而具有的能量称为动能。
            <ul>
                <li><b>标量性：</b>动能是<b>标量</b>，只有大小没有方向，且恒大于或等于零（$E_k \\ge 0$）。</li>
                <li><b>单位：</b>国际单位制中为<b>焦耳 ($\\,\\text{J}$)</b>，即 $1\\text{ J} = 1\\text{ kg}\\cdot\\text{m}^2/\\text{s}^2$。</li>
                <li><b>相对性：</b>速度 $v$ 与参考系的选择有关（通常以地面为参考系），故动能也具有相对性。</li>
            </ul>
        </div>
        
        <p><b>动能定义式：</b></p>
        
        $$E_k = \\frac{1}{2} m v^2$$
        
        <p>（其中 $m$ 为物体的质量，$v$ 为物体的瞬时速度大小）</p>
        
        <h3>二、 动能定理 (Work-Energy Theorem)</h3>
        
        <div class="box-blue">
            <strong>定理内容：</strong><br>
            <b>合外力对物体所做的功，等于物体动能的增量（末动能与初动能之差）。</b>
        </div>
        
        <p><b>1. 表达式：</b></p>
        
        $$W_{\\text{合}} = \\Delta E_k = E_{k2} - E_{k1} = \\frac{1}{2} m v_2^2 - \\frac{1}{2} m v_1^2$$
        
        <p><b>2. 物理意义与状态变化：</b></p>
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-bottom:15px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>合外力做功 $W_{\\text{合}}$</th>
                    <th>动能变化量 $\\Delta E_k$</th>
                    <th>物体的运动状态与能量变化</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>$W_{\\text{合}} > 0$（正功）</b></td>
                    <td>$\\Delta E_k > 0$（$E_{k2} > E_{k1}$）</td>
                    <td>物体的动能<b>增加</b>，速度增大</td>
                </tr>
                <tr>
                    <td><b>$W_{\\text{合}} < 0$（负功）</b></td>
                    <td>$\\Delta E_k < 0$（$E_{k2} < E_{k1}$）</td>
                    <td>物体的动能<b>减少</b>，速度减小（克服合外力做功）</td>
                </tr>
                <tr>
                    <td><b>$W_{\\text{合}} = 0$</b></td>
                    <td>$\\Delta E_k = 0$（$E_{k2} = E_{k1}$）</td>
                    <td>物体的动能<b>不变</b>，速度大小不变（如匀速圆周运动）</td>
                </tr>
            </tbody>
        </table>
        
        <p><b>3. 合外力做功 $W_{\\text{合}}$ 的两种计算方法：</b></p>
        <ul>
            <li><b>先求合力再求功：</b>若物体受恒力作用，先求出合外力 $F_{\\text{合}}$，再计算 $W_{\\text{合}} = F_{\\text{合}} s \\cos\\theta$。</li>
            <li><b>求各力做功的代数和：</b>分别计算各个外力所做的功 $W_1, W_2, \\dots, W_n$，则 $W_{\\text{合}} = W_1 + W_2 + \\dots + W_n$（更推荐，尤其是包含变力时）。</li>
        </ul>
        
        <h3>三、 动能定理的应用优势与步骤</h3>
        
        <div class="box-green">
            <strong>应用优势：</strong><br>
            <ul>
                <li><b>适用范围广：</b>既适用于<b>直线运动</b>，也适用于<b>曲线运动</b>；既适用于<b>恒力做功</b>，也适用于<b>变力做功</b>。</li>
                <li><b>计算简便：</b>只关注<b>初、末状态</b>的动能和整个过程的<b>功</b>，无需关注过程细节，避免求解加速度 $a$ 和时间 $t$。</li>
            </ul>
        </div>
    `
},
{
    id: 'sec-704',
    subject: 'physics',
    chapterId: 'p-ch7',
    title: '7.4 势能',
    desc: '重力势能概念、零势能面、重力做功特点及弹簧弹性势能公式',
    content: `
        <h3>一、 重力势能 (Gravitational Potential Energy, $E_p$)</h3>
        
        <p>物体由于<b>被举高</b>而具有的能量称为重力势能。</p>
        
        <div class="box-yellow">
            <strong>重力势能定义式：</strong>
            $$E_p = mgh$$
            <ul>
                <li>$m$：物体的质量 ($\\,\\text{kg}$)；</li>
                <li>$g$：重力加速度 ($\\,\\text{m/s}^2$ 或 $\\,\\text{N/kg}$)；</li>
                <li>$h$：物体相对于<b>零势能面</b>的高度 ($\\,\\text{m}$)。</li>
            </ul>
        </div>
        
        <p><b>重力势能的核心性质：</b></p>
        <ul>
            <li><b>系统性：</b>重力势能并非物体单独所有，而是由<b>地球与物体所组成的系统</b>共有的能量（习惯上简称为物体的重力势能）。</li>
            <li><b>标量性：</b>重力势能是<b>标量</b>，单位为<b>焦耳 ($\\,\\text{J}$)</b>。正负号仅表示物体处于零势能面之上还是之下，不代表方向。</li>
            <li><b>相对性：</b>$E_p$ 的数值取决于<b>零势能面</b>的选择：
                <ul>
                    <li>选定零势能面后，平面上方 $h > 0 \\implies E_p > 0$；</li>
                    <li>零势能面上 $h = 0 \\implies E_p = 0$；</li>
                    <li>平面下方 $h < 0 \\implies E_p < 0$。</li>
                </ul>
            </li>
        </ul>
        
        <h3>二、 重力做功的特点与势能变化关系</h3>
        
        <div class="box-blue">
            <strong>1. 重力做功的特点：</strong><br>
            重力所做的功只跟物体的<b>初、末位置的高度差</b>有关，而与物体的<b>运动路径无关</b>。<br>
            无论物体沿直线、斜面还是曲线运动，重力做功均为：
            $$W_G = mg \\Delta h = mgh_1 - mgh_2$$
        </div>
        
        <p><b>2. 重力做功与重力势能变化的关系：</b></p>
        
        $$W_G = -\\Delta E_p = E_{p1} - E_{p2}$$
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-bottom:15px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>过程情况</th>
                    <th>重力做功 $W_G$</th>
                    <th>重力势能变化 $\\Delta E_p$</th>
                    <th>能量转化</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>物体<b>下落</b> ($h_1 > h_2$)</td>
                    <td>重力做<b>正功</b> ($W_G > 0$)</td>
                    <td>重力势能<b>减少</b> ($\\,\\Delta E_p < 0$)</td>
                    <td>重力势能转化为其他形式的能（如动能）</td>
                </tr>
                <tr>
                    <td>物体<b>上升</b> ($h_1 < h_2$)</td>
                    <td>重力做<b>负功</b> ($W_G < 0$，即克服重力做功)</td>
                    <td>重力势能<b>增加</b> ($\\,\\Delta E_p > 0$)</td>
                    <td>其他形式的能转化为重力势能</td>
                </tr>
            </tbody>
        </table>
        
        <h3>三、 弹性势能 (Elastic Potential Energy, $E_p$)</h3>
        
        <p>发生<b>弹性形变</b>的物体各部分之间由于弹力的相互作用而具有的能量称为弹性势能。</p>
        
        <div class="box-green">
            <strong>弹簧弹性势能公式：</strong>
            $$E_p = \\frac{1}{2} k x^2$$
            <ul>
                <li>$k$：弹簧的劲度系数 ($\\,\\text{N/m}$)；</li>
                <li>$x$：弹簧的<b>形变量</b>（即相对于原长的拉伸量或压缩量，$\\,\\text{m}$）。</li>
            </ul>
            <strong>物理说明：</strong><br>
            <ul>
                <li>弹性势能的大小决定于弹簧的<b>劲度系数 $k$</b> 和<b>形变量 $x$</b>。在弹簧弹性限度内，$k$ 越大、形变量 $x$ 越大，弹性势能越大。</li>
                <li>弹簧处于<b>原长</b>时，$x = 0$，弹性势能 $E_p = 0$。</li>
                <li>弹簧<b>弹力做功</b>与弹性势能变化的关系：$W_{\\text{弹}} = -\\Delta E_p = E_{p1} - E_{p2}$。</li>
            </ul>
        </div>
    `
},
{
    id: 'sec-705',
    subject: 'physics',
    chapterId: 'p-ch7',
    title: '7.5 机械能守恒定律',
    desc: '机械能的概念、机械能守恒定律及其条件与表达式、能量守恒定律',
    content: `
        <h3>一、 机械能 (Mechanical Energy, $E$)</h3>
        
        <div class="box-yellow">
            <strong>定义与定义式：</strong><br>
            物体的<b>动能 ($E_k$)</b>、<b>重力势能 ($E_{p,\\text{重}}$)</b> 和 <b>弹性势能 ($E_{p,\\text{弹}}$)</b> 的统称称为机械能。
            $$E = E_k + E_p = \\frac{1}{2} m v^2 + mgh + \\frac{1}{2} k x^2$$
            <ul>
                <li><b>标量性与相对性：</b>机械能是<b>标量</b>；由于势能依赖于零势能面的选择，因此机械能的数值也具有<b>相对性</b>。</li>
            </ul>
        </div>
        
        <h3>二、 机械能守恒定律 (Law of Conservation of Mechanical Energy)</h3>
        
        <div class="box-blue">
            <strong>1. 内容：</strong><br>
            在只有重力或弹力做功的物体系统内，动能与势能可以互相转化，而<b>系统的机械能总量保持不变</b>。
        </div>
        
        <p><b>2. 守恒条件（满足其一即可）：</b></p>
        <ul>
            <li>系统<b>只受重力（或弹力）</b>作用，不受其它外力（如自由落体、抛体运动）。</li>
            <li>系统除受重力（或弹力）外，还受其它力作用，但<b>其它力不做功</b>（如绳子拉力垂直于位移的单摆运动、沿光滑斜面下滑的物体）。</li>
            <li>系统除重力（或弹力）外有其它力做功，但<b>其它力做功的代数和为零</b>（如拉力做功与阻力做功相互抵消）。</li>
        </ul>
        
        <p><b>3. 机械能守恒的三种常见书写形式（解题应用）：</b></p>
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-bottom:15px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>视角</th>
                    <th>表达式</th>
                    <th>物理含义与适用场景</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>守恒观点</b><br>（初末状态法）</td>
                    <td>$$E_1 = E_2$$<br>$$E_{k1} + E_{p1} = E_{k2} + E_{p2}$$</td>
                    <td>初状态的机械能等于末状态的机械能；<br>适用于列出完整系统初、末状态能量方程。</td>
                </tr>
                <tr>
                    <td><b>转化观点</b><br>（能量增减法）</td>
                    <td>$$\\Delta E_k = -\\Delta E_p$$<br>$$\\Delta E_{k,\\text{增}} = \\Delta E_{p,\\text{减}}$$</td>
                    <td>系统动能的增加量等于势能的减少量；<br>无需选择零势能面，计算更简便。</td>
                </tr>
                <tr>
                    <td><b>转移观点</b><br>（系统分配法）</td>
                    <td>$$\\Delta E_A = -\\Delta E_B$$<br>$$\\Delta E_{A,\\text{增}} = \\Delta E_{B,\\text{减}}$$</td>
                    <td>由多个物体组成的系统中，A 物体增加的机械能等于 B 物体减少的机械能。</td>
                </tr>
            </tbody>
        </table>
        
        <h3>三、 能量守恒定律 (Law of Conservation of Energy)</h3>
        
        <div class="box-green">
            <strong>1. 定律内容：</strong><br>
            能量既不会凭空产生，也不会凭空消失，它只能<b>从一种形式转化为另一种形式</b>，或者<b>从一个物体转移到别的物体</b>；在转化或转移的过程中，<b>能量的总量保持不变</b>。
        </div>
        
        <p><b>2. 能量转化的表达方式：</b></p>
        
        $$\\Delta E_{\\text{减}} = \\Delta E_{\\text{增}}$$
        
        <p>即某些形式的能量减少，必然伴随着另一些形式能量的等量增加。</p>
        
        <p><b>3. 功与能量的关系（功能关系）：</b></p>
        <ul>
            <li><b>功是能量转化的量度：</b>做功的过程就是能量转化或转移的过程。做了多少功，就有多少能量发生了转化。</li>
            <li><b>常见功能关系总结：</b>
                <ul>
                    <li>合外力做功 $\\implies$ 动能变化（动能定理：$W_{\\text{合}} = \\Delta E_k$）；</li>
                    <li>重力做功 $\\implies$ 重力势能变化（$W_G = -\\Delta E_p$）；</li>
                    <li>弹簧弹力做功 $\\implies$ 弹性势能变化（$W_{\\text{弹}} = -\\Delta E_p$）；</li>
                    <li>除重力/弹力以外的其它力做功 $\\implies$ 机械能变化（$W_{\\text{其它}} = \\Delta E_{\\text{机}}$）；</li>
                    <li>克服摩擦力（滑动摩擦）做功 $\\implies$ 产生的内能（热量 $Q = F_f \\cdot s_{\\text{相对}}$）。</li>
                </ul>
            </li>
        </ul>
     `
},
{
    id: 'sec-706',
    subject: 'physics',
    chapterId: 'p-ch7',
    title: '7.6 质量与能量',
    desc: '狭义相对论基本假设、运动质量随速度变化规律及爱因斯坦质能方程',
    content: `
        <h3>一、 狭义相对论的基本假设</h3>
        
        <div class="box-yellow">
            <strong>爱因斯坦狭义相对论两条基本原理：</strong>
            <ul>
                <li><b>相对性原理：</b>在物理学中，所有的惯性参考系都是等价的（物理规律在所有惯性系中表达形式相同）。</li>
                <li><b>光速不变原理：</b>真空中的光速 $c$ 在任意惯性参考系中都是相同的，与光源或观察者的运动状态无关（$c \\approx 3.0 \\times 10^8 \\text{ m/s}$）。</li>
            </ul>
        </div>
        
        <h3>二、 质速关系 (Mass-Velocity Relationship)</h3>
        
        <p>在经典力学中，物体的质量 $m$ 是固定不变的常数；而在狭义相对论中，<b>物体的质量会随其运动速度的增大而增大</b>。</p>
        
        <div class="box-blue">
            <strong>质速关系公式：</strong>
            $$m = \\frac{m_0}{\\sqrt{1 - \\frac{v^2}{c^2}}}$$
            <ul>
                <li>$m_0$：物体静止时的质量（<b>静止质量</b> / Rest Mass）；</li>
                <li>$m$：物体以速度 $v$ 运动时的质量（<b>动质量</b> / Relativistic Mass）；</li>
                <li>$v$：物体的运动速度；</li>
                <li>$c$：真空中的光速。</li>
            </ul>
        </div>
        
        <p><b>物理意义与结论：</b></p>
        <ul>
            <li>当 $v \\ll c$（远小于光速的低速运动，如日常生活中的宏观物体）时，$\\frac{v^2}{c^2} \\approx 0$，公式可近似为 $m \\approx m_0$，退化为<b>经典牛顿力学</b>。</li>
            <li>当 $v \\to c$ 时，分母接近零，动质量 $m \\to \\infty$。这意味着要使有静止质量的物体达到光速需要无穷大的能量，因此<b>任何有实质量的物体运动速度都不能达到或超越光速 $c$</b>。</li>
        </ul>
        
        <h3>三、 质能关系 (Mass-Energy Relationship)</h3>
        
        <p>爱因斯坦揭示了质量与能量之间深刻的内在联系，提出了著名的<b>质能方程</b>。</p>
        
        <div class="box-green">
            <strong>1. 爱因斯坦质能方程：</strong>
            $$E = m c^2$$
            <ul>
                <li>$E$：物体所具有的总能量（包含静止能量与动能）；</li>
                <li>$m$：物体的动质量。</li>
            </ul>
            当物体静止时（$v = 0$），具有<b>静止能量</b>：
            $$E_0 = m_0 c^2$$
        </div>
        
        <p><b>2. 质量亏损与能量变化公式：</b></p>
        
        $$\\Delta E = \\Delta m \\cdot c^2$$
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-bottom:15px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>符号</th>
                    <th>物理意义</th>
                    <th>说明与应用场景</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>$\\Delta m$</b></td>
                    <td>质量变化量（或<b>质量亏损</b>）</td>
                    <td>指反应前总质量与反应后总质量的差值</td>
                </tr>
                <tr>
                    <td><b>$\\Delta E$</b></td>
                    <td>释放或吸收的能量</td>
                    <td>广泛应用于<b>核裂变、核聚变</b>等核反应中的能量计算</td>
                </tr>
            </tbody>
        </table>
        
        <p><b>物理理解注意事项：</b></p>
        <ul>
            <li>质能方程<b>不意味着“质量可以转化为能量”或“质量消失了”</b>，而是说明**系统的质量与能量是统一的实体**，质量是系统能量大小的一种度量。</li>
            <li>当系统释放能量 $\\Delta E$ 时，其总质量必然相应减少 $\\Delta m = \\frac{\\Delta E}{c^2}$。</li>
        </ul>
     `
},
{
    id: 'sec-801',
    subject: 'physics',
    chapterId: 'p-ch8',
    title: '8.1 冲量与动量的关系',
    desc: '冲量的概念与矢量性、动量定义、动量定理公式及平均力与缓冲应用',
    content: `
        <h3>一、 力的冲量 (Impulse, $I$)</h3>
        
        <p>力与力的作用时间的乘积称为<b>冲量</b>，它是量度力对时间累积效应的物理量。</p>
        
        <div class="box-yellow">
            <strong>恒力冲量定义式：</strong>
            $$I = F \\cdot \\Delta t = F (t' - t)$$
            <ul>
                <li>$F$：作用在物体上的力 ($\\,\\text{N}$)；</li>
                <li>$\\Delta t = t' - t$：力的作用时间区间 ($\\,\\text{s}$)；</li>
                <li><b>矢量性：</b>冲量是<b>矢量</b>，在恒力作用下，冲量的方向与<b>力的方向</b>完全一致；</li>
                <li><b>单位：</b>国际单位制中为<b>牛顿·秒 ($\\,\\text{N}\\cdot\\text{s}$)</b>，与动量单位（$\\text{kg}\\cdot\\text{m/s}$）等价。</li>
            </ul>
        </div>
        
        <p><b>变力冲量的求解方法：</b></p>
        <ul>
            <li><b>$F$-$t$ 图像法：</b>在力-时间 ($F$-$t$) 图像中，图线与时间轴所围成的<b>“面积”</b>即表示该力在对应时间内的冲量大小。</li>
            <li><b>平均力替代法：</b>若知道变力作用时间内的<b>平均力 $\\bar{F}$</b>，则冲量可表示为 $I = \\bar{F} \\cdot \\Delta t$。</li>
        </ul>
        
        <h3>二、 物体的动量 (Momentum, $p$)</h3>
        
        <div class="box-blue">
            <strong>动能与动量对比：</strong><br>
            物体的质量 $m$ 与速度 $v$ 的乘积称为物体的<b>动量</b>。
            $$p = m v$$
            <ul>
                <li><b>状态量：</b>动量是描述物体运动状态的物理量，对应某一时刻的瞬时速度 $v$。</li>
                <li><b>矢量性：</b>动量是<b>矢量</b>，其方向与瞬时速度 $v$ 的方向一致。</li>
                <li><b>动量变化量 ($\\,\\Delta p$)：</b>物体初、末动量的矢量差：
                    $$\\Delta p = p' - p = m v' - m v$$
                    （注意：在一维运动中，必须先规定正方向，用正负号表示动量的方向后再列式计算）
                </li>
            </ul>
        </div>
        
        <h3>三、 动量定理 (Impulse-Momentum Theorem)</h3>
        
        <div class="box-green">
            <strong>定理内容：</strong><br>
            <b>物体所受合外力的冲量，等于物体在此过程中动量的变化量。</b>
        </div>
        
        <p><b>1. 表达式：</b></p>
        
        $$I_{\\text{合}} = \\Delta p$$
        
        $$F_{\\text{合}} \\cdot \\Delta t = p' - p = m v' - m v$$
        
        <p><b>2. 物理意义与平均力解释：</b></p>
        <ul>
            <li><b>合外力的冲量：</b> $I_{\\text{合}}$ 可以是合外力的冲量，也可以是物体所受各个外力冲量的<b>矢量和</b>（$I_{\\text{合}} = I_1 + I_2 + \\dots + I_n$）。</li>
            <li><b>变力与平均力 $\\bar{F}$：</b>在碰撞、打击、爆炸等作用时间极短且力剧烈变化的现象中，利用动量定理公式计算得出的力 $F = \\frac{\\Delta p}{\\Delta t}$，即为变力在作用时间 $\\Delta t$ 内的<b>平均冲击力 $\\bar{F}$</b>。</li>
        </ul>
        
        <p><b>3. 动量定理的应用——缓冲与防护原理：</b></p>
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-bottom:15px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>动量变化量 $\\Delta p$ 确定时</th>
                    <th>时间 $\\Delta t$ 的调整</th>
                    <th>平均作用力 $\\bar{F}$ 的变化</th>
                    <th>实际应用举例</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>定值（动量改变一定）</td>
                    <td><b>延长</b>作用时间 $\\Delta t \\uparrow$</td>
                    <td>减小冲力 $\\bar{F} \\downarrow$</td>
                    <td>海绵垫缓冲、汽车安全气囊、跳远落入沙坑、打包易碎品</td>
                </tr>
                <tr>
                    <td>定值（动量改变一定）</td>
                    <td><b>缩短</b>作用时间 $\\Delta t \\downarrow$</td>
                    <td>增大冲力 $\\bar{F} \\uparrow$</td>
                    <td>铁锤钉钉子、拳击发力、砸石破墙</td>
                </tr>
            </tbody>
        </table>
    `
},
{
    id: 'sec-802',
    subject: 'physics',
    chapterId: 'p-ch8',
    title: '8.2 动量守恒定律',
    desc: '系统、内力与外力的概念，动量守恒定律的内容、守恒条件及表达式应用',
    content: `
        <h3>一、 系统、内力与外力</h3>
        
        <p>在研究两个或多个物体的运动时，通常把这几个物体构成的整体称为<b>系统 (System)</b>。</p>
        
        <div class="box-yellow">
            <strong>内力与外力的区分：</strong>
            <ul>
                <li><b>内力 (Internal Force)：</b>系统内部<b>各物体之间</b>相互作用的力。
                    <br><i>注意：</i>内力只能改变系统内<b>单个物体</b>的动量，但<b>不能改变系统整体的总动量</b>（因为内力总是成对出现且大小相等、方向相反）。
                </li>
                <li><b>外力 (External Force)：</b>系统外部的物体对系统内部物体所施加的力。
                    <br><i>注意：</i><b>只有外力才能改变系统整体的总动量</b>。
                </li>
            </ul>
        </div>
        
        <h3>二、 动量守恒定律 (Law of Conservation of Momentum)</h3>
        
        <div class="box-blue">
            <strong>定律内容：</strong><br>
            一个系统<b>不受外力</b>作用，或者所受<b>合外力为零</b>时，这个系统的<b>总动量保持不变</b>。
        </div>
        
        <p><b>1. 守恒条件（满足下列情况之一即可）：</b></p>
        <ol>
            <li><b>绝对守恒（理想条件）：</b>系统不受外力，或者系统所受合外力矢量和为零（$\\vec{F}_{\\text{合外}} = 0$）。</li>
            <li><b>近似守恒（极短时间/强相互作用）：</b>系统虽然受外力（如重力、摩擦力），但<b>外力远小于系统内部物体间的相互作用内力</b>（如碰撞、爆炸、击打过程），外力的冲量可以忽略不计。</li>
            <li><b>单方向守恒（分方向）：</b>系统整体所受合外力不为零，但在<b>某一特定方向（如 $x$ 轴）上合外力为零</b>，则该方向上的总动量守恒。</li>
        </ol>
        
        <p><b>2. 动量守恒的常见书写形式（以两物体相撞为例）：</b></p>
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-bottom:15px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>视角</th>
                    <th>公式表达式</th>
                    <th>物理含义与解题说明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>状态观点</b><br>（初末状态法）</td>
                    <td>$$p_1 + p_2 = p_1' + p_2'$$<br>$$m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'$$</td>
                    <td>系统相互作用前的总动量等于相互作用后的总动量（最常用形式）。</td>
                </tr>
                <tr>
                    <td><b>变化观点</b><br>（增减法）</td>
                    <td>$$\\Delta p_1 = -\\Delta p_2$$<br>$$\\Delta p_{1,\\text{增}} = \\Delta p_{2,\\text{减}}$$</td>
                    <td>$A$ 物体增加的动量等于 $B$ 物体减少的动量（数值相等、方向相反）。</td>
                </tr>
                <tr>
                    <td><b>整体观点</b><br>（系统变化量）</td>
                    <td>$$\\Delta p_{\\text{系统}} = 0$$</td>
                    <td>系统整体的总动量变化量为零。</td>
                </tr>
            </tbody>
        </table>
        
        <h3>三、 应用动量守恒定律的物理注意事项</h3>
        
        <div class="box-green">
            <strong>解题规范与核心特征：</strong>
            <ul>
                <li><b>矢量性（关键）：</b>动量是矢量。在一维运动中，解题前<b>必须先规定统一的正方向</b>。与正方向同向的速度取正值，反向取负值。</li>
                <li><b>相对性：</b>公式中各物体的速度必须是相对于<b>同一个惯性参考系</b>（通常为地面）。</li>
                <li><b>同时性：</b>公式左边的初速度 $v_1, v_2$ 必须是<b>同一时刻</b>的状态值，右边的末速度 $v_1', v_2'$ 也必须是<b>同一时刻</b>的状态值。</li>
            </ul>
        </div>
    `
},
{
    id: 'sec-803',
    subject: 'physics',
    chapterId: 'p-ch8',
    title: '8.3 反冲作用',
    desc: '反冲运动定义与物理本质、动量守恒推导、火箭飞行决定因素及反击式水轮机应用',
    content: `
        <h3>一、 反冲运动 (Recoil Motion)</h3>
        
        <p>一个静止（或运动）的物体，在<b>内力</b>的作用下分裂为两部分，当其中一部分向某一方向运动时，另一部分<b>必然向相反的方向运动</b>，这种现象称为反冲运动。</p>
        
        <div class="box-yellow">
            <strong>反冲运动的物理本质：</strong>
            <ul>
                <li><b>动力来源：</b>来自于系统<b>内部物体间剧烈的相互作用力（内力）</b>。</li>
                <li><b>物理规律：</b>由于作用时间极短且内力远大于外力，系统整体满足<b>动量守恒定律</b>。</li>
            </ul>
        </div>
        
        <h3>二、 反冲运动的公式推导与模型</h3>
        
        <div class="box-blue">
            <strong>基本数学模型（如炮弹发射、人船模型）：</strong><br>
            设系统总质量为 $M + m$，初始静止（$p_{\\text{初}} = 0$）。当质量为 $m$ 的部分以速度 $v$ 弹出时，主体 $M$ 获得的对地反冲速度 $V$ 满足：
            $$0 = M V + m v \\implies V = -\\frac{m}{M} v$$
            <ul>
                <li><b>负号含义：</b>表示反冲速度 $V$ 的方向与喷出/抛出速度 $v$ 的<b>方向相反</b>。</li>
                <li><b>速度大小：</b>决定于喷出物体的<b>质量占比 $\\frac{m}{M}$</b> 和<b>喷射速度 $v$</b>。</li>
            </ul>
        </div>
        
        <p><b>生活与工程中的典型反冲现象：</b></p>
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-bottom:15px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>现象/应用</th>
                    <th>喷射/抛出部分 ($m, v$)</th>
                    <th>反冲主体 ($M, V$)</th>
                    <th>物理说明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>枪炮开火</b></td>
                    <td>子弹 / 炮弹（向前方高速飞出）</td>
                    <td>枪身 / 炮车（产生向后的<b>后坐力/速度</b>）</td>
                    <td>射击时需靠肩部或驻铲抵挡后坐冲击</td>
                </tr>
                <tr>
                    <td><b>章鱼/乌贼游动</b></td>
                    <td>向后喷出的水流</td>
                    <td>章鱼躯体（向前方快速冲出）</td>
                    <td>利用反冲力的典型生物代表</td>
                </tr>
                <tr>
                    <td><b>农田旋转喷灌头</b></td>
                    <td>弯管切线方向喷出的水流</td>
                    <td>喷水管（向相反方向旋转）</td>
                    <td>反冲力驱动自动旋转</td>
                </tr>
            </tbody>
        </table>
        
        <h3>三、 工业与科技应用：火箭与反击式水轮机</h3>
        
        <p><b>1. 航天领域：火箭 (Rocket)</b></p>
        <div class="box-green">
            靠燃料燃烧产生的高温高压气体从尾部<b>以极高速度向后喷出</b>，使火箭获得向前的巨大反冲速度。
            <ul>
                <li><b>决定速度的两因素：</b>喷气速度 $v_{\\text{喷}}$ 越大、质量比（$\\,\\frac{M_0}{m_{\\text{壳}}}\\,$）越高，火箭速度越快。</li>
                <li><b>多级火箭：</b>燃料用尽后自动脱落壳体以减小质量负担，使火箭达到摆脱地球引力的第一宇宙速度（$7.9\\text{ km/s}$）。</li>
            </ul>
        </div>
        
        <p><b>2. 工业水力：反击式水轮机 (Reaction Turbine)</b></p>
        <div class="box-yellow">
            大坝中的水流在充满封闭叶片的流道中加速向外喷出/流出时，对叶片施加一个<b>相反方向的反击力（反冲力）</b>，推动转轮旋转带动发电机发电。
            <ul>
                <li><b>能量利用：</b>同时利用水流的<b>动能</b>（冲击作用）和<b>压力能</b>（反冲作用，占主导）。</li>
                <li><b>典型代表：</b>三峡水电站采用的<b>混流式水轮机 (Francis Turbine)</b>，适用于中低水头、大流量水电站。</li>
            </ul>
        </div>
     `
},
{
    id: 'sec-804',
    subject: 'physics',
    chapterId: 'p-ch8',
    title: '8.4 碰撞',
    desc: '对心与非对心碰撞区别，弹性碰撞速算公式及其3种极值特例，非弹性与完全非弹性碰撞能量特征',
    content: `
        <h3>一、 碰撞的几何分类：正碰与斜碰</h3>
        
        <table border="1" style="width:100%; border-collapse:collapse; margin-bottom:15px; text-align:center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>分类</th>
                    <th>运动方向与连线关系</th>
                    <th>运动特点</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>正碰（对心碰撞）</b></td>
                    <td>碰撞前两物体的运动速度方向在<b>两球心的连线上</b></td>
                    <td>碰撞后两物体的运动<b>仍沿着这条直线</b>（一维运动）</td>
                </tr>
                <tr>
                    <td><b>斜碰（非对心碰撞）</b></td>
                    <td>碰撞前的速度方向<b>不在两球心连线上</b></td>
                    <td>碰撞后的速度方向<b>均不在原直线上</b>（二维/平面运动）</td>
                </tr>
            </tbody>
        </table>
        
        <h3>二、 碰撞的能量分类与规律</h3>
        
        <div class="box-yellow">
            <strong>碰撞的基本前提：</strong><br>
            无论何种碰撞，系统内力远大于外力，作用时间极短，系统整体<b>动量必定守恒</b>：
            $$m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'$$
        </div>
        
        <h4>1. 弹性碰撞 (Elastic Collision)</h4>
        <p>碰撞过程中发生的是<b>弹性形变</b>，系统<b>没有机械能损失</b>（机械能守恒）。</p>
        
        <div class="box-blue">
            <strong>正碰速算公式（设物体 $m_2$ 初始静止，即 $v_2 = 0$）：</strong><br>
            联立动量守恒与机械能守恒方程：
            $$\\begin{cases} m_1 v_1 = m_1 v_1' + m_2 v_2' \\\\ \\frac{1}{2}m_1 v_1^2 = \\frac{1}{2}m_1 v_1'^2 + \\frac{1}{2}m_2 v_2'^2 \\end{cases}$$
            解得碰撞后的速度解为：
            $$v_1' = \\frac{m_1 - m_2}{m_1 + m_2} v_1, \\quad v_2' = \\frac{2m_1}{m_1 + m_2} v_1$$
        </div>
        
        <p><b>弹性碰撞的三种典型特例（当 $v_2 = 0$ 时）：</b></p>
        
        <ul>
            <li><b>等质量相撞 ($m_1 = m_2$) —— 速度交换：</b>
                $$v_1' = 0, \\quad v_2' = v_1$$
                <i>物理图景：</i>质量相同的两球相撞，$m_1$ 撞后彻底停下，将其速度完全传递给 $m_2$（如牛顿摆）。
            </li>
            <li><b>极轻撞极重 ($m_1 \\ll m_2$) —— 原速反弹：</b>
                $$v_1' \\approx -v_1, \\quad v_2' \\approx 0$$
                <i>物理图景：</i>乒乓球撞击墙壁或重铁球，$m_1$ 以原速率被弹回，$m_2$ 几乎保持静止。
            </li>
            <li><b>极重撞极轻 ($m_1 \\gg m_2$) —— 双倍速飞出：</b>
                $$v_1' \\approx v_1, \\quad v_2' \\approx 2v_1$$
                <i>物理图景：</i>保龄球撞击保龄球瓶，$m_1$ 速度几乎不受影响，轻物体 $m_2$ 以近乎两倍的速度被甩出。
            </li>
        </ul>
        
        <h4>2. 非弹性碰撞与完全非弹性碰撞</h4>
        
        <ul>
            <li><b>非弹性碰撞 (Inelastic Collision)：</b><br>
                发生<b>塑性形变</b>或产生摩擦生热、声能等，系统<b>机械能不守恒</b>，有部分机械能转化为内能（$\\Delta E_k > 0$）。
            </li>
            <li><b>完全非弹性碰撞 (Completely Inelastic Collision)：</b><br>
                碰撞后两物体<b>粘合在一起，以相同的共同速度 $v_{\\text{共}}$ 运动</b>。
                $$\\text{共同速度：} \\quad v_{\\text{共}} = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$$
                <div class="box-green">
                    <strong>核心特征：</strong>完全非弹性碰撞是<b>损失机械能最多</b>的碰撞形态。
                </div>
            </li>
        </ul>
     `
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
