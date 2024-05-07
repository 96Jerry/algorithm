function solution(s) {
//     for(let i = 0; i < s.length - 1; i++){
//         if(s[i] === s[i+1]){
//             s = s.replace(s[i]+s[i+1],'')
            
//             i -= 2
//         }
//     }
    
//     return s.length === 0 ? 1 : 0
    
    
//     s = [...s]
//     for(let n = 0 ; n < s.length - 1; n++){
//         if(s[n] === s[n+1]){
//             s.splice(n,2)
//             n -= 2
//         }
//     }
    
//     return s.length === 0 ? 1 : 0
    const stack = []
    
    for(let i=0; i<s.length; i++){
        if(!stack.length || stack[stack.length-1] !== s[i]){
            stack.push(s[i])
        } else {
            stack.pop()
        }
    }
    
    return stack.length === 0 ? 1 : 0
}