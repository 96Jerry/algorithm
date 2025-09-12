function solution(park, routes) {
    // s의 위치 찾기
    // routes를 돌면서 명령 수행 (매번 park를 확인 및 w, h도 확인을 통해 전체 명령 수행 여부 확인)
    // routes의 방향을 좌표에 매핑시킴
    // 마지막 위치 출력
    
    // w, h 값 확인
    const h = park.length
    const w = park[0].length
        
    // s의 위치 찾기
    let start // start는 앞으로 이동하는 위치를 기록하게됨
    for (let i=0; i < h; i++) {
        const startX = park[i].indexOf('S')
        if(startX > -1){
            start = [startX,i]
            break
        }
    }
    
    // 명령 수행
    for (const route of routes){
        let flag = 1
        
        // 명령 해석
        const action = route.split(' ')
        const dir = action[0]
        let count = action[1]
        
        // 방향 수치화
        let calDir
        switch(dir){
            case 'E':
                calDir = [1,0]
                break
            case 'W':
                calDir = [-1,0]
                break
            case 'S':
                calDir = [0,1]
                break
            case 'N':
                calDir = [0,-1]
                break
            default:
                throw new Error('올바르지 못한 방향입니다.')
        }
        
        const oldLocation = [...start]
        // 명령 실행 (count만큼 반복)
        while(count > 0){
		        // 이동
            start[0] += calDir[0]
            start[1] += calDir[1]
            
            // 조건1 확인
            if(0 > start[0] || start[0] >= w){
                flag = 0
                break
            }
            
            // 조건2 확인
            if(0 > start[1] || start[1] >= h){
                flag = 0
                break
            }
            
            // 조건3 확인
            const movedRow = park[start[1]]
            const movedLocation = movedRow[start[0]]
            if(movedLocation === 'X'){
                flag = 0
                break
            }
            
            count--
        }
        
        if(flag === 0){
            start = oldLocation
            continue
        }
    }
    
    return [start[1],start[0]]
}