function solution(n) {
    a = Array(100001)
    let i = 0
    while (i<100001){
        a[i] = 0
        i++
    }
    
    a[0] = 0
    a[1] = 1
    for(let i=2; i<100001; i++){
        const x = a[i-1] + a[i-2]
        a[i] = x%1234567
    }
    
    console.log(a[99998])
    return a[n]
    
}