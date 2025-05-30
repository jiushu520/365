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
        // 补充函数题目
        {
            question: "已知函数f(x) = \\frac{x}{x+1}，求f(f(x))的表达式。",
            answers: ["\\frac{x}{2x+1}"],
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
            question: "若f(x) = \\frac{1}{x}，求f(x+1) - f(x)的表达式。",
            answers: ["-\\frac{1}{x(x+1)}"],
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
            question: "\\begin{array}{l}柯西是法国伟大的数学家，他的一生在数学领域有着很高的建树，\\很多数学定理和公式都用他的名字来命名，如著名的柯西不等式：\\(ac+bd)^2 \\leq (a^2+b^2)(c^2+d^2)，\\在该式中，a,b,c,d可以是任意实数，当且仅当ad=bc时等号成立。\\根据该式，对于正实数a,b，如果a+2b=1，则(\\sqrt{a}+\\sqrt{4b})^2的最大值为\\_\\_\\_\\_。 \\end{array}",
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
        // 补充不等式题目
        {
            question: "解不等式: |2x-1| < |x-3|",
            answers: ["(\\frac{4}{3}, 4)"],
            type: "不等式"
        },
        {
            question: "已知a,b>0, 证明: \\frac{a}{b} + \\frac{b}{a} \\geq 2",
            answers: ["证明题"],
            type: "不等式"
        },
        {
            question: "若x,y,z>0且xyz=1, 证明: \\frac{1}{x} + \\frac{1}{y} + \\frac{1}{z} \\geq 3",
            answers: ["证明题"],
            type: "不等式"
        },
        {
            question: "解不等式: \\frac{x-1}{x+2} > 0",
            answers: ["x<-2 或 x>1"],
            type: "不等式"
        },
        {
            question: "已知a,b,c是正实数，证明: (a+b)(b+c)(c+a) \\geq 8abc",
            answers: ["证明题"],
            type: "不等式"
        }
    ],
    "05导数": [
        {
            question: "\\begin{array}{l}已知y=x^2,过点(1,1)作抛物线的切线，交y轴于A，求A的纵坐标。\\end{array}",
            answers: ["-1"],
            type: "导数"
        },
        // 补充导数题目
        {
            question: "求函数f(x) = x^3 - 3x^2 + 2的单调区间。",
            answers: ["增区间: (-\\infty,0] \\cup [2,+\\infty); 减区间: [0,2]"],
            type: "导数"
        },
        {
            question: "求函数f(x) = \\frac{1}{3}x^3 - 2x^2 + 3x + 1的极值。",
            answers: ["极大值f(1)=\\frac{7}{3}, 极小值f(3)=1"],
            type: "导数"
        },
        {
            question: "已知曲线y = x^3 + ax^2 + bx + c过点(1,2)，且在x=1处有水平切线，求a,b,c的值。",
            answers: ["a=-3,b=3,c=1"],
            type: "导数"
        },
        {
            question: "求函数f(x) = x^4 - 2x^3在区间[-1,2]上的最大值和最小值。",
            answers: ["最大值f(-1)=3, 最小值f(\\frac{3}{2})=-\\frac{27}{16}"],
            type: "导数"
        },
        {
            question: "求曲线y = x^3 - 3x^2 + 2x的拐点坐标。",
            answers: ["(1,0)"],
            type: "导数"
        },
        {
            question: "求函数f(x) = x^2 e^{-x}的导数。",
            answers: ["f'(x) = e^{-x}(2x - x^2)"],
            type: "导数"
        },
        {
            question: "求函数f(x) = \\ln(x^2 + 1)的导数。",
            answers: ["f'(x) = \\frac{2x}{x^2+1}"],
            type: "导数"
        },
        {
            question: "已知函数f(x) = x^3 - 3x，求f(x)在x=1处的切线方程。",
            answers: ["y = -2"],
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
        {
            question: "已知点A(1,1), B(2,3), C(4,5)，判断三点是否共线。",
            answers: ["是"],
            type: "线性代数"
        }
    ],
    "07解析几何": [
        {
            question: "如图所示，在坐标系中，已知点A(0,0)、B(6,0)、C(6,6)、D(0,6)、E(6,3)，求点F的坐标。<div class=\"svg-container\"><svg width=\"500\" height=\"400\" viewBox=\"0 0 500 400\" style=\"border:1px solid #ddd;background-color:#fafafa;\"><g>\n<!-- 网格线 -->\n" +
                Array.from({length:9},(_,i)=>`<line x1='${50+i*40}' y1='50' x2='${50+i*40}' y2='350' stroke='#eee' stroke-width='0.5'/>`).join('') +
                Array.from({length:9},(_,i)=>`<line x1='50' y1='${50+i*40}' x2='370' y2='${50+i*40}' stroke='#eee' stroke-width='0.5'/>`).join('') +
                "</g><g>\n<!-- 坐标轴 -->\n<line x1='50' y1='350' x2='370' y2='350' stroke='#000' stroke-width='1.5'/><line x1='50' y1='50' x2='50' y2='350' stroke='#000' stroke-width='1.5'/></g><g>\n<!-- 坐标轴标签 -->\n" +
                Array.from({length:8},(_,i)=>`<text x='${50+(i+1)*40}' y='365' text-anchor='middle' font-size='12' font-family='Arial' fill='#666'>${i+1}</text>`).join('') +
                Array.from({length:8},(_,i)=>`<text x='35' y='${350-(i+1)*40+5}' text-anchor='middle' font-size='12' font-family='Arial' fill='#666'>${i+1}</text>`).join('') +
                "</g><g>\n<!-- 矩形ABCD -->\n<rect x='50' y='110' width='240' height='240' fill='rgba(255,182,193,0.3)' stroke='#CD853F' stroke-width='2'/></g><g>\n<!-- 对角线AF -->\n<line x1='50' y1='350' x2='130' y2='110' stroke='#333' stroke-width='2'/></g><g>\n<!-- 线段AE -->\n<line x1='50' y1='350' x2='290' y2='230' stroke='#333' stroke-width='2'/></g><g>\n<!-- 点和标签 -->\n<circle cx='50' cy='350' r='6' fill='#4CAF50' stroke='#fff' stroke-width='2'/><text x='25' y='370' font-size='14' font-family='Arial' fill='#666'>A = (0, 0)</text>\n<circle cx='290' cy='350' r='6' fill='#4CAF50' stroke='#fff' stroke-width='2'/><text x='305' y='370' font-size='14' font-family='Arial' fill='#2196F3'>B = (6, 0)</text>\n<circle cx='290' cy='110' r='6' fill='#4CAF50' stroke='#fff' stroke-width='2'/><text x='305' y='100' font-size='14' font-family='Arial' fill='#666'>C = (6, 6)</text>\n<circle cx='50' cy='110' r='6' fill='#4CAF50' stroke='#fff' stroke-width='2'/><text x='25' y='100' font-size='14' font-family='Arial' fill='#666'>D = (0, 6)</text>\n<circle cx='290' cy='230' r='6' fill='#4CAF50' stroke='#fff' stroke-width='2'/><text x='305' y='235' font-size='14' font-family='Arial' fill='#2196F3'>E = (6, 3)</text>\n<circle cx='130' cy='110' r='6' fill='#ff4444' stroke='#fff' stroke-width='2'/><text x='120' y='95' font-size='14' font-family='Arial' fill='#ff4444' font-weight='bold'>F(?,6)</text>\n</g></svg></div>",
            answers: ["(2,6)", "2,6"],
            type: "解析几何"
        },
        // ... 其余 07解析几何内容 ...
    ],
    "08立体几何": [
        {
            question: "\\begin{array}{l}已知x+2y+3z=14，求x^2+y^2+z^2最小值 \\end{array}",
            answers: ["14"],
            type: "立体几何"
        },
        // ... 其余 08立体几何内容 ...
    ],
    "09概率统计": [
        {
            question: "\\begin{array}{l}6人同时被邀请参加一项活动。必须有人去，去几个人自行决定，共有多少种不同的去法？\\end{array}",
            answers: ["63"],
            type: "概率统计"
        },
        // ... 其余 09概率统计内容 ...
    ]
}; 