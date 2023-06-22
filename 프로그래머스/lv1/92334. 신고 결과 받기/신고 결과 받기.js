function solution(id_list, report, k) {
    // 신고해서 처리된 사람, 신고받아서 처리된 사람 2가지 경우 모두 적용
    let info = {}
    for (id of id_list){
        info[id] = 0
    }
    report = new Set(report)
    for (let log of report){
        let a = log.split(' ')
        let reporter = a[0]
        let reported = a[1]
        info[reported]++
    }
    let result = []
    for (let key of Object.keys(info)){
        if (info[key] >= k){
            result.push(key)
        }
    }
    
    info = {}
    for (id of id_list){
        info[id] = 0
    }
    for (let log of report){
        let a = log.split(' ')
        if (result.includes(a[1])){
            info[a[0]]++
        }
    }
    answer = []
    for (let key of Object.keys(info)){
        answer.push(info[key])
    }
    return answer
}