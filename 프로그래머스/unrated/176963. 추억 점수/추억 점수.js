const solution = (name, yearning, photo) => {
    const result = photo.map((p)=>{
        const l = p.length
        let sum = 0
        for (let i=0; i<l; i++){
            const index = name.indexOf(p[i])
            if(index === -1){
                sum += 0
            } else{
                sum += yearning[index]
            }
        }
        return sum
    })
    return result
}