// 题库数据，供主页面引用
const questionDatabase = {
    "01代数": [
        {
            question: "3\\sqrt{x^2-9}+4\\sqrt{x^2-16}+5\\sqrt{x^2-25}=\\frac{120}{x}",
            answers: ["24"],
            type: "代数"
        },
        {
            question: "已知x, y, z是大于1的正整数，且\\left(x+\\frac{1}{y}\\right)\\left(y+\\frac{1}{z}\\right)\\left(z+\\frac{1}{x}\\right)为整数，则x+y+z=\\_\\_\\_\\_。",
            answers: ["12"],
            type: "代数"
        },
        {
            question: "若实数a,b满足a^2+b^2=4,则\\sqrt[3]{a(b-4)}+\\sqrt{ab-3a+2b-6}的值为\\_\\_\\_\\_。",
            answers: ["2"],
            type: "代数"
        },
        {
            question: "2024\\cdot南京自主招生 A=\\frac{1}{2024}+\\frac{1}{2025}+\\cdots+\\frac{1}{2040}，则\\frac{1}{A}的整数部分为()",
            answers: ["119"],
            type: "代数"
        },
        {
            question: "已知x=3+2\\sqrt{2}，求：x^{2}+\\frac{1}{x^{2}}+6x+\\frac{6}{x}+7的值。",
            answers: ["77"],
            type: "代数"
        },
        // 补充代数题目
        {
            question: "若a+b=5, ab=6, 求a^3 + b^3的值。",
            answers: ["35"],
            type: "代数"
        },
        {
            question: "已知x^2 - 3x + 1 = 0, 求x^4 + \\frac{1}{x^4}的值。",
            answers: ["47"],
            type: "代数"
        },
        {
            question: "解方程组: \\begin{cases} x + y = 7 \\\\ x^2 + y^2 = 29 \\end{cases}",
            answers: ["(2,5)", "(5,2)"],
            type: "代数"
        },
        {
            question: "化简: \\sqrt{12+\\sqrt{140}} - \\sqrt{7-2\\sqrt{10}}",
            answers: ["\\sqrt{5}"],
            type: "代数"
        },
        {
            question: "若a,b,c满足a+b+c=6, a^2+b^2+c^2=14, 求ab+bc+ca的值。",
            answers: ["11"],
            type: "代数"
        }
    ],
    "02方程": [
        {
            question: "\\begin{array}{l}已知a=(\\sqrt{5}−\\sqrt{3})/(\\sqrt{5}+\\sqrt{3})，b=(\\sqrt{5}+\\sqrt{3})/(\\sqrt{5}−\\sqrt{3})，\\\\ 则二次根式\\sqrt{(a³b+ab³)+19}的值是\\_\\_\\_\\_。 \\end{array}",
            answers: ["9"],
            type: "方程"
        },
        {
            question: "\\begin{array}{l}若a + b - 2\\sqrt{a-1} - 4\\sqrt{b-2} = 3\\sqrt{c-3} - \\frac{1}{2}c - 5,则(b-c)^a的值为\\_\\_\\_\\_。 \\end{array}",
            answers: ["2500"],
            type: "方程"
        },
        {
            question: "解方程:3\\sqrt{x^2-9}+4\\sqrt{x^2-16}+5\\sqrt{x^2-25}=\\frac{120}{x}",
            answers: ["24"],
            type: "方程"
        },
        {
            question: "解方程:设[t]表示不超过实数t的最大整数，令\\{t\\}=t-[t].已知实数x满足x^3+\\frac{1}{x^3}=18，求\\{x\\}+\\left\\{\\frac{1}{x}\\right\\}的值.",
            answers: ["1"],
            type: "方程"
        },
        {
            question: "方程 \\sqrt{x-\\frac{1}{x}}+\\sqrt{1-\\frac{1}{x}}=x 的解为\\_\\_\\_\\_。",
            answers: ["\\frac{\\sqrt{5}+1}{2}", "\\frac{1+\\sqrt{5}}{2}"],
            type: "方程"
        },
        {
            question: "解方程:\\left\\{\\begin{array}{l}x - 5y + 18\\sqrt{2y} = 44 \\quad (1) \\\\6\\sqrt{2x} - x - 5y = 8 \\quad (2)\\end{array}\\right.",
            answers: ["18,2", "18;2", "x=18,y=2", "x=18;y=2"],
            type: "方程"
        },
        {
            question: "\\begin{array}{l}已知a,b是方程t^2-t-1=0的两根，解关于x,y的方程组：\\\\\\left\\{\\begin{array}{l}\\frac{x}{a}+\\frac{y}{b}=x+1 \\\\ \\frac{x}{b}+\\frac{y}{a}=y+1\\end{array}\\right.\\end{array}",
            answers: ["x=-\\frac{1}{2},y=-\\frac{1}{2}", "x=-\\frac{1}{2};y=-\\frac{1}{2}", "-1/2,-1/2","-1/2;-1/2","x=-\\frac{1}{2},y=-\\frac{1}{2}", "x=-\\frac{1}{2};y=-\\frac{1}{2}"],
            type: "方程"
        },
        {
            question: "设x、y都是正整数，且\\sqrt{x-116}+\\sqrt{x+100}=y，求y的最大值。",
            answers: ["108"],
            type: "方程"
        },
        {
           question: " (2024\\cdot 江门校级自主招生) 已知x^{4}-4x^{3}+7x^{2}-8x+4=0，则x+\\frac{2}{x}的值为\\_\\_\\_\\_。",
           answers: ["3"],
           type: "方程"
        },
        // 补充方程题目
        {
            question: "解方程: \\frac{x}{x-1} + \\frac{x-1}{x} = \\frac{5}{2}",
            answers: ["\\frac{2}{3}", "2"],
            type: "方程"
        },
        {
            question: "解方程: \\sqrt{x+3} - \\sqrt{x-2} = 1",
            answers: ["6"],
            type: "方程"
        },
        {
            question: "若方程x^2 + px + q = 0的两根为sinθ和cosθ，求p^2 - 2q的值。",
            answers: ["1"],
            type: "方程"
        }
    ],
    "03函数": [
        {
            question: "\\begin{array}{l}已知a=(\\sqrt{5}−\\sqrt{3})/(\\sqrt{5}+\\sqrt{3})，b=(\\sqrt{5}+\\sqrt{3})/(\\sqrt{5}−\\sqrt{3})，\\\\ 则二次根式\\sqrt{(a³b+ab³)+19}的值是\\_\\_\\_\\_。 \\end{array}",
            answers: ["9"],
            type: "函数"
        },
        {
            question: "\\begin{array}{l}若a + b - 2\\sqrt{a-1} - 4\\sqrt{b-2} = 3\\sqrt{c-3} - \\frac{1}{2}c - 5,则(b-c)^a的值为\\_\\_\\_\\_。 \\end{array}",
            answers: ["2500"],
            type: "函数"
        },
        {
            question: "若函数f(x) = ax^2 + bx + c满足f(1)=0, f(2)=3, f(3)=8，求f(4)的值。",
            answers: ["15"],
            type: "函数"
        },
        {
            question: "已知f(x) = 2x - 1, g(x) = x^2 + 1, 求g(f(x))的最小值。",
            answers: ["1"],
            type: "函数"
        },
        {
            question: "函数y = \\frac{x^2 - 4x + 3}{x-1}在x=1处的极限值为？",
            answers: ["-2"],
            type: "函数"
        },
        {
            question: "已知函数f(x) = |x-1| + |x-2| + |x-3|，求f(x)的最小值。",
            answers: ["2"],
            type: "函数"
        },
        {
            question: "函数f(x) = x^2 + 2x + 3在区间[-1,2]上的最大值为？",
            answers: ["11"],
            type: "函数"
        },
        {
            question: "函数y = \\sqrt{x-1} + \\sqrt{3-x}的定义域为？",
            answers: ["[1,3]"],
            type: "函数"
        }
    ],
    "04不等式": [
        {
            question: "\\begin{array}{l}已知a=(\\sqrt{5}−\\sqrt{3})/(\\sqrt{5}+\\sqrt{3})，b=(\\sqrt{5}+\\sqrt{3})/(\\sqrt{5}−\\sqrt{3})，\\\\ 则二次根式\\sqrt{(a³b+ab³)+19}的值是\\_\\_\\_\\_。 \\end{array}",
            answers: ["9"],
            type: "不等式"
        },
        {
            question: "已知x, y, z满足xy+yz+zx=18，则x^2+y^2+z^2的最小值为\\_\\_\\_\\_。",
            answers: ["18"],
            type: "不等式"
        },
        {
            question: "已知x, y满足x^2+y^2=1，则3x+4y的最大值为\\_\\_\\_\\_。",
            answers: ["5"],
            type: "不等式"
        },
        {
            question: "\\begin{array}{l}柯西是法国伟大的数学家，他的一生在数学领域有着很高的建树，\\\\很多数学定理和公式都用他的名字来命名，如著名的柯西不等式：\\\\(ac+bd)^2 \\leq (a^2+b^2)(c^2+d^2)，\\\\在该式中，a,b,c,d可以是任意实数，当且仅当ad=bc时等号成立。\\\\根据该式，对于正实数a,b，如果a+2b=1，\\\\则(\\sqrt{a}+\\sqrt{4b})^2的最大值为\\_\\_\\_\\_。 \\end{array}",
            answers: ["3"],
            type: "不等式"
        },
        {
            question: "已知整数x,y满足xy=22-3x+y,求xy的最大值。",
            answers: ["72"],
            type: "不等式"
        },
        {
            question: "2024\\cdot 鄞州区校级自主招生 已知正实数a,b,c满足a+b+c=6，则\\sqrt{a^{2}+18}+\\sqrt{b^{2}+32}+\\sqrt{c^{2}+50}的最小值为\\_\\_\\_\\_。",
            answers: ["18"],
            type: "不等式"
        },

    ],
    "05导数": [
        {
            question: "\\begin{array}{l}已知y=x^2,过点(1,1)作抛物线的切线，交y轴于A，求A的纵坐标。\\end{array}",
            answers: ["-1"],
            type: "导数"
        },
        {
            question: "已知函数f(x)=x^2-4x+5，求f(x)的最小值。",
            answers: ["1"],
            type: "导数"
        },
        {
            question: "已知函数f(x)=x^3-3x^2+2，求f(x)在区间[0,3]上的最大值。",
            answers: ["2"],
            type: "导数"
        },
        {
            question: "已知函数f(x)=2x^2-8x+7，求f(x)在x=1处的切线斜率。",
            answers: ["-4"],
            type: "导数"
        },
        {
            question: "已知函数f(x)=x^2-6x+9，求f(x)的极小值点的横坐标。",
            answers: ["3"],
            type: "导数"
        },
        {
            question: "已知函数f(x)=x^3-6x^2+9x+1，求f(x)在x=1处的导数值。",
            answers: ["4"],
            type: "导数"
        }
    ],
    "06线性代数": [
        {
            question: "\\begin{array}{l}已知x^2+y^2=1,求3x+4y的最大值\\_\\_\\_\\_。 \\end{array}",
            answers: ["5"],
            type: "线性代数"
        },
        // 补充线性代数题目
        {
            question: "已知向量\\vec{a} = (1,2), \\vec{b} = (3,4), 求\\vec{a} + \\vec{b}的坐标。",
            answers: ["(4,6)"],
            type: "线性代数"
        },
        {
            question: "已知矩阵A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, B = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}, 求AB。",
            answers: ["\\begin{pmatrix} 2 & 7 \\\\ 6 & 15 \\end{pmatrix}"],
            type: "线性代数"
        },
        {
            question: "解线性方程组: \\begin{cases} 2x + 3y = 7 \\\\ 4x - y = 3 \\end{cases}",
            answers: ["x=2, y=1"],
            type: "线性代数"
        },
        {
            question: "求行列式 \\begin{vmatrix} 1 & 2 \\\\ 3 & 4 \\end{vmatrix} 的值。",
            answers: ["-2"],
            type: "线性代数"
        },
        {
            question: "已知向量\\vec{a} = (1,0,1), \\vec{b} = (0,1,1), 求\\vec{a} \\times \\vec{b}。",
            answers: ["(-1,-1,1)"],
            type: "线性代数"
        },
        {
            question: "已知点A(1,2), B(3,4), 求向量\\overrightarrow{AB}的坐标。",
            answers: ["(2,2)"],
            type: "线性代数"
        },
        {
            question: "求向量\\vec{a} = (3,4)的模长。",
            answers: ["5"],
            type: "线性代数"
        },
    ],
    "07解析几何": [
        {
            question: "如图所示，在坐标系中，已知点A(0,0)、B(6,0)、C(6,6)、D(0,6)、E(6,3)，求点F的坐标。",
            svg: `<svg width="500" height="400" viewBox="0 0 500 400" style="border:1px solid #ddd;background-color:#fafafa;"><g>
<!-- 网格线 -->
` +
                Array.from({length:9},(_,i)=>`<line x1='${50+i*40}' y1='50' x2='${50+i*40}' y2='350' stroke='#eee' stroke-width='0.5'/>`).join('') +
                Array.from({length:9},(_,i)=>`<line x1='50' y1='${50+i*40}' x2='370' y2='${50+i*40}' stroke='#eee' stroke-width='0.5'/>`).join('') +
                `</g><g>
<!-- 坐标轴 -->
<line x1='50' y1='350' x2='370' y2='350' stroke='#000' stroke-width='1.5'/><line x1='50' y1='50' x2='50' y2='350' stroke='#000' stroke-width='1.5'/></g><g>
<!-- 坐标轴标签 -->
` +
                Array.from({length:8},(_,i)=>`<text x='${50+(i+1)*40}' y='365' text-anchor='middle' font-size='12' font-family='Arial' fill='#666'>${i+1}</text>`).join('') +
                Array.from({length:8},(_,i)=>`<text x='35' y='${350-(i+1)*40+5}' text-anchor='middle' font-size='12' font-family='Arial' fill='#666'>${i+1}</text>`).join('') +
                `</g><g>
<!-- 矩形ABCD -->
<rect x='50' y='110' width='240' height='240' fill='rgba(255,182,193,0.3)' stroke='#CD853F' stroke-width='2'/></g><g>
<!-- 对角线AF -->
<line x1='50' y1='350' x2='130' y2='110' stroke='#333' stroke-width='2'/></g><g>
<!-- 线段AE -->
<line x1='50' y1='350' x2='290' y2='230' stroke='#333' stroke-width='2'/></g><g>
<!-- 点和标签 -->
<circle cx='50' cy='350' r='6' fill='#4CAF50' stroke='#fff' stroke-width='2'/><text x='25' y='370' font-size='14' font-family='Arial' fill='#666'>A = (0, 0)</text>
<circle cx='290' cy='350' r='6' fill='#4CAF50' stroke='#fff' stroke-width='2'/><text x='305' y='370' font-size='14' font-family='Arial' fill='#2196F3'>B = (6, 0)</text>
<circle cx='290' cy='110' r='6' fill='#4CAF50' stroke='#fff' stroke-width='2'/><text x='305' y='100' font-size='14' font-family='Arial' fill='#666'>C = (6, 6)</text>
<circle cx='50' cy='110' r='6' fill='#4CAF50' stroke='#fff' stroke-width='2'/><text x='25' y='100' font-size='14' font-family='Arial' fill='#666'>D = (0, 6)</text>
<circle cx='290' cy='230' r='6' fill='#4CAF50' stroke='#fff' stroke-width='2'/><text x='305' y='235' font-size='14' font-family='Arial' fill='#2196F3'>E = (6, 3)</text>
<circle cx='130' cy='110' r='6' fill='#ff4444' stroke='#fff' stroke-width='2'/><text x='120' y='95' font-size='14' font-family='Arial' fill='#ff4444' font-weight='bold'>F(?,6)</text>
</g></svg>`,
            answers: ["(2,6)", "2,6"],
            type: "解析几何"
        },
        {
            question: "\\begin{array}{l}已知正方形OBAC，以OB为半径作圆，\\\\\过A的直线交圆O于M，Q，交BC与P，R为PQ中点，\\\\若AP=18，PR=7，则BC=\\_\\_\\_\\_。 \\end{array}",
            answers: ["20"],
            type: "解析几何",
            img:"./images/zz07.png"
        },
        // ... 其余 07解析几何内容 ...
    ],
    "08函数代数几何综合": [
        {
            question: "已知x+2y+3z=14，求x^2+y^2+z^2最小值",
            answers: ["14"],
            type: "函数代数几何综合"
        },
        // ... 其余 08函数代数几何综合内容 ...
        {
            question: "如图，⊙O的直径AB的长为10\\sqrt{2}，弦AC长为6\\sqrt{2}，∠ACB的平分线交⊙O于D，则CD长为()。",
            svg: `<svg width='320' height='260' viewBox='0 0 320 260' style='border:1px solid #ddd;background-color:#fafafa;'>
  <circle cx='160' cy='130' r='100' stroke='#333' stroke-width='2' fill='none'/>
  <line x1='60' y1='130' x2='260' y2='130' stroke='#1976d2' stroke-width='2'/>
  <line x1='60' y1='130' x2='132' y2='34' stroke='#388e3c' stroke-width='2'/>
  <line x1='132' y1='34' x2='260' y2='130' stroke='#388e3c' stroke-width='2'/>
  <line x1='132' y1='34' x2='160' y2='230' stroke='#d32f2f' stroke-width='2' stroke-dasharray='4 2'/>
  <line x1='132' y1='34' x2='160' y2='130' stroke='#888' stroke-width='1' stroke-dasharray='2 2'/>
  <circle cx='160' cy='130' r='3' fill='#000'/>
  <text x='50' y='145' font-size='14' fill='#1976d2'>A</text>
  <text x='265' y='145' font-size='14' fill='#1976d2'>B</text>
  <text x='122' y='30' font-size='14' fill='#388e3c'>C</text>
  <text x='150' y='245' font-size='14' fill='#d32f2f'>D</text>
  <text x='167' y='125' font-size='14' fill='#000'>O</text>
</svg>`,
            answers: ["14", "+14"],
            type: "函数代数几何综合"
        },
        {
            question: "如图求CD的长度，AD=2,BD=3,角ACB=45度。CD垂直于AB，求CD的长度。",
            svg: `<svg width='350' height='300' viewBox='0 0 350 300' style='border:1px solid #ddd;background-color:#fafafa;'><g>
    <!-- 三角形ABC -->
    <polygon points='50,250 200,250 125,60' fill='rgba(33,150,243,0.08)' stroke='#b77b2b' stroke-width='2'/>
    <!-- CD高 -->
    <line x1='125' y1='60' x2='125' y2='250' stroke='#d32f2f' stroke-width='2'/>
    <!-- 点 -->
    <circle cx='50' cy='250' r='4' fill='#1976d2'/>
    <circle cx='200' cy='250' r='4' fill='#1976d2'/>
    <circle cx='125' cy='60' r='4' fill='#388e3c'/>
    <circle cx='125' cy='250' r='4' fill='#d32f2f'/>
    <!-- 标签 -->
    <text x='40' y='265' font-size='16' fill='#1976d2'>A</text>
    <text x='205' y='265' font-size='16' fill='#1976d2'>B</text>
    <text x='130' y='50' font-size='16' fill='#388e3c'>C</text>
    <text x='120' y='265' font-size='16' fill='#d32f2f'>D</text>
    <!-- 长度标注 -->
    <text x='80' y='265' font-size='14' fill='#000'>2</text>
    <text x='160' y='265' font-size='14' fill='#000'>3</text>
    <!-- 角度标注 -->
    <path d='M135 80 A25 25 0 0 1 115 80' fill='none' stroke='#388e3c' stroke-width='1' marker-end='url(#arrowhead)'/>
    <text x='140' y='90' font-size='14' fill='#388e3c'>45°</text>
    <!-- 直角标记 -->
    <polyline points='115,250 115,240 125,240' fill='none' stroke='#1976d2' stroke-width='2'/>
    <text x='135' y='245' font-size='13' fill='#1976d2'>90°</text>
   
</g></svg>`,
            answers: ["6"],
            type: "函数代数几何综合"
        },
        {
            question: "如图，菱形OABC中，O点坐标为(0,0)，OB、AC相交于点M(x_0,y_0)，y=\\frac{k}{x}过点M，C，2\\leq x_0\\leq 4，求菱形OABC面积的最大值。",
            svg: `<svg width="320" height="320" viewBox="0 0 320 320" style="border:1px solid #ddd;background-color:#fafafa;">
    <line x1="50" y1="270" x2="270" y2="270" stroke="#222" stroke-width="2"/>
  <line x1="50" y1="270" x2="50" y2="50" stroke="#222" stroke-width="2"/>

<path d="M 100 90 Q 110 260 260 260" stroke="#1976d2" stroke-width="2" fill="none"/>
    <polygon points="50,270 170,270 230,150 110,150" fill="rgba(255,182,193,0.13)" stroke="#b77b2b" stroke-width="2"/>

    <line x1="50" y1="270" x2="230" y2="150" stroke="#333" stroke-width="2" stroke-dasharray="4 2"/>
  <line x1="170" y1="270" x2="110" y2="150" stroke="#333" stroke-width="2" stroke-dasharray="4 2"/>

    <line x1="230" y1="150" x2="110" y2="150" stroke="#333" stroke-width="2"/>   <line x1="50" y1="270" x2="110" y2="150" stroke="#333" stroke-width="2"/>   <line x1="170" y1="270" x2="230" y2="150" stroke="#333" stroke-width="2"/>     <circle cx="140" cy="210" r="5" fill="#d32f2f"/>
  <text x="145" y="205" font-size="14" fill="#d32f2f">M</text>

    <circle cx="50" cy="270" r="5" fill="#1976d2"/>
  <text x="35" y="285" font-size="14" fill="#1976d2">O</text>
  <circle cx="170" cy="270" r="5" fill="#1976d2"/>
  <text x="165" y="285" font-size="14" fill="#1976d2">A</text>
  <circle cx="230" cy="150" r="5" fill="#1976d2"/>
  <text x="235" y="145" font-size="14" fill="#1976d2">B</text>
  <circle cx="110" cy="150" r="5" fill="#1976d2"/>
  <text x="90" y="145" font-size="14" fill="#1976d2">C</text>
</svg>`,
            answers: ["24\\sqrt{2}"],
            type: "函数代数几何综合"
        },
        {
            question: "\\begin{array}{l}(2024·宁海县校级自主招生)如图，在平面直角坐标系中，矩形ABCD的边BC在x轴上，\\\\ 点D的坐标为（-2,6），反比例函数y= k/x（x<0）经过点D，若AC的延长线交y轴于点E，连接BE，\\\\ 则△BCE的面积为\\_\\_\\_\\_。 \\end{array}   ",
            img: "https://img.jyeoo.net/quiz/images/svg/202403/482/f80128d4.png",
            answers: [6],
            type: "函数代数几何综合"
        },
        {
            question: "\\begin{array}{l}(2024·鄞州区校级自主招生)如图，在△ABC中，G、E分别在AB、AC上，连接BE交AF于O，\\\\ 若\\frac{BO}{OE}=\\frac{9}{2}，\\frac{AE}{EC}=\\frac{1}{2}，G、O、C共线，△GEF的面积为11，\\\\ 则△OBC的面积为\\_\\_\\_\\_。\\end{array} ",
            img: "https://img.jyeoo.net/quiz/images/svg/202409/154/1ab0699a.png",
            answers: ["30"],
            type: "函数代数几何综合"
        },
        // ... 其余 08函数代数几何综合内容 ...
    ],
    "09概率统计": [
        {
            question: "\\begin{array}{l}6人同时被邀请参加一项活动。必须有人去，去几个人自行决定，共有多少种不同的去法？\\end{array}",
            answers: ["63"],
            type: "概率统计"
        },
        {
            question: "\\begin{array}{l}从1到100的整数中随机抽取一个数，求这个数是3的倍数或5的倍数的概率。\\end{array}",
            answers: ["\\frac{47}{100}"],
            type: "概率统计"
        },
        {
            question: "\\begin{array}{l}一个袋子里有3个红球和4个白球，从中不放回地抽取2个球，求两个球颜色相同的概率。\\end{array}",
            answers: ["\\frac{3}{7}"],
            type: "概率统计"
        },
        {
            question: "\\begin{array}{l}某班级有30名学生，其中15名男生，15名女生。从中随机抽取3名学生组成一个小组，求这个小组中至少有1名男生的概率。\\end{array}",
            answers: ["\\frac{29}{30}"],
            type: "概率统计"
        },
        {
            question: "\\begin{array}{l}掷两个骰子，求两个骰子点数之和大于8的概率。\\end{array}",
            answers: ["\\frac{5}{12}"],
            type: "概率统计"
        },
        {
            question: "\\begin{array}{l}某工厂生产的产品合格率为95\\%，现从中随机抽取10件产品，求恰好有8件合格品的概率。\\end{array}",
            answers: ["C_{10}^8 \\cdot 0.95^8 \\cdot 0.05^2"],
            type: "概率统计"
        }
    ]
}; 