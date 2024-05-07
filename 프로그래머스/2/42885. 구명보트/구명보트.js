function solution(people, limit) {
    const len = people.length
    
    // 왼쪽과 오른쪽에 포인터를 위치시킴
    let left = 0
    let right = len-1
    
    // 오름차순 정렬
    people.sort((a,b)=>a-b)
    
    
    
    const twoPeopleBoats = []
    let onePersonBoatsCount = 0
    
    let twoPeopleBoat = []
    while( left <= right ){
        twoPeopleBoat = []
        
        const a = people[left]
        const b = people[right]
        twoPeopleBoat.push(a)

        if(a + b <= limit){
            twoPeopleBoat.push(b)
            twoPeopleBoats.push(twoPeopleBoat)
            right--
            left++
                   
            continue
        }

        onePersonBoatsCount += 1
        right--
    }
    
    
    // if(twoPeopleBoat.length === 1){
    //     twoPeopleBoats.push(twoPeopleBoat)
    // } 

    
    
    
    
    return onePersonBoatsCount + twoPeopleBoats.length
}