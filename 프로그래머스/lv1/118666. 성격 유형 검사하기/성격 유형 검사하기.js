function solution(survey, choices) {
    
    let arr = ['R','T','C','F','J','M','A','N']
    let info = {}
    for (a of arr){
        info[a] = 0
    }
    
    const n = choices.length
    for (let i=0;i<n;i++){
        let q1 = survey[i][0]
        let q2 = survey[i][1]
        switch (choices[i]){
            case 1:
                info[q1] += 3
                break
            case 2:
                info[q1] += 2
                break
            case 3:
                info[q1] += 1
                break
            case 4:
                continue
            case 5:
                info[q2] += 1
                break
            case 6:
                info[q2] += 2
                break
            case 7:
                info[q2] += 3
                break
        }
    }
    let answer = ''
    if (info['R'] >= info['T']){
        answer += 'R'
    }
    else{
        answer += 'T'
    }
    if (info['C'] >= info['F']){
        answer += 'C'
    }
    else{
        answer += 'F'
    }
    if (info['J'] >= info['M']){
        answer += 'J'
    }
    else{
        answer += 'M'
    }
    if (info['A'] >= info['N']){
        answer += 'A'
    }
    else{
        answer += 'N'
    }
    return answer
}