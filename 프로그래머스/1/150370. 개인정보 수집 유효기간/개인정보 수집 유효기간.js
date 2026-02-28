function solution(today, terms, privacies) {
    // 약관 -> 개인정보 (유효기간)
    // 유효기간 지나면 반드시 파기
    // 유효기간이 지난 개인정보의 번호 구하기 (모든 달은 28일까지, 오름차순으로 반환)
    
    // 약관 종류 1~10, 개인정보 개수 1~100, 년도 2000~2022, 한자리 날짜는 앞에 0 붙음, 파기해야할 개인정보 1개 이상 존재
    // 달 수 1~100
    
    // 파기할 개인정보들을 담는 빈 배열을 만들어놓고, 개인정보들을 돌면서 확인하면 될듯
    // 날짜계산
    // (주어진 날짜의 달 + 개월 수) / 12 -> 몫은 년도에 플러스, 나머지는 달로 해놓기
    // today와 비교하기 (년도, 달, 일이 각각 크거나 작은지 비교)
    const termMap = new Map()
    for (let i = 0; i < terms.length; i++) {
        const [name, period] = terms[i].split(' ')
        termMap.set(name, Number(period))
    }
    
    const expired = []
    for (let i = 0; i < privacies.length; i++) {
        const [start, term] = privacies[i].split(' ')
        
        const [startYear, startMonth, startDate] = start.split('.').map(Number)
        const totalMonths = startMonth + termMap.get(term)
        // x = 11 + 1
        // 11 + 2
        const endYear = startYear + Math.ceil(totalMonths / 12) - 1
        const endMonth = totalMonths % 12 || 12
        
        const [todayYear, todayMonth, todayDate] = today.split('.').map(Number)
        
        const compareDate = (todayYear, todayMonth, todayDate, endYear, endMonth, endDate) => {
            if (todayYear > endYear) {
                return true
            } else if (todayYear < endYear) {
                return false
            } else {
                if (todayMonth > endMonth) {
                    return true
                } else if (todayMonth < endMonth) {
                    return false
                } else {
                    if (todayDate >= endDate) {
                        return true
                    } else if ( todayDate < endDate) {
                        return false
                    }
                }
            }
        }
        const isExpired = compareDate(todayYear, todayMonth, todayDate, endYear, endMonth, startDate)
        if (isExpired) expired.push(i + 1)
    }
    
    return expired
}