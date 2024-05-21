function solution(progresses, speeds) {
    const n = progresses.length
    
    const dueDates = []
    for(let i=0; i<n; i++){
        dueDates.push(Math.ceil((100-progresses[i])/speeds[i]))
    }
    
    
    let stack = []
    
    stack.push(dueDates.shift())
    
    const result = []
    while(dueDates.length){
        
        if(stack[0] >= dueDates[0]){
            stack.push(dueDates.shift())
        } else {
            result.push(stack.length)
            stack = [dueDates.shift()]
        }
        
    }
    
    result.push(stack.length)
    
    return result
}