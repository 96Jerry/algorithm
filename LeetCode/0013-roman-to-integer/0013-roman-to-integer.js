function romanToInt(s) {
    let answer = 0;
    const mappings = [['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]
    const specialCaseMappings = [
        [new RegExp('IV', 'g'), 4],
        [new RegExp('IX', 'g'), 9],
        [new RegExp('XL', 'g'), 40],
        [new RegExp('XC', 'g'), 90],
        [new RegExp('CD', 'g'), 400],
        [new RegExp('CM', 'g'), 900],
    ];

    for (const [romanReg, int] of specialCaseMappings) {
        let count = 0;
        s = s.replace(romanReg, () => { count++; return ''; });
        answer += count * int;
    }

    const sArray = [...s]

    for (const [romanS, int] of mappings) {
        const count = sArray.filter((roman) => roman === romanS).length
        answer += count * int 
    }


    return answer;
}
