function findZeroCoor(x, y, doubleArr, n) {
    if (x + 1 < n && doubleArr[y][x + 1] === 0) {
        return [x+1, y];
    } else if (x - 1 >= 0  && doubleArr[y][x - 1] === 0) {
        return [x-1, y];
    } else if (y + 1 < n  && doubleArr[y + 1][x] === 0) {
        return [x, y+1];
    } else if (y - 1 >= 0  && doubleArr[y - 1][x] === 0) {
        return [x, y-1];
    }
    
    return [y,x]
}


function solution(n) {
    // 배열 초기화
    const answer = []
    for(let i=0;i<n;i++){
        answer.push(new Array(n).fill(0))
    }
    
    // 초기 진행 방향 설정
    // 초기 진행 방향으로 이동하다가 벽(최대 혹은 최소 혹은 진행 방향에 0이 아닌 숫자가 있을 때)을 만나면 턴(0인곳을 찾아서 진행)
    // 위 로직 반복
    let x = 0
    let y = 0
    let dx = 1
    let dy = 0
    
    for(let i = 1; i<n*n+1; i++){
        answer[y][x] = i
        
        if([x + dx,y + dy].includes(n) ||  [x + dx,y + dy].includes(-1) || answer[y + dy][x + dx] !== 0){
            const oldX = x
            const oldY = y
            
            const [newX,newY] = findZeroCoor(x ,y ,answer, n)
            
            dx = newX - oldX
            dy = newY - oldY
            
            x = newX
            y = newY
            
            continue
        }
        
        x = x + dx
        y = y + dy
        
    }
    
    return answer
}