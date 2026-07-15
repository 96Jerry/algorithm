/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // 현재 board에 채워진 숫자들을 기반으로 유효한 스도쿠판인지 판단
    // 유효한 지와 풀 수 있는 지는 다름
    // 유효하다 = 있는 숫자가 명시된 조건 3개를 만족한다
    // 모든 행, 열, 33칸에 대해 조건을 확인한다 27번
    // 같은 부분이 한 곳이라도 있으면 무효
    // 없는 부분인 "."를 제외하고 set에 넣어서 길이가 다르면 같은 부분이 있다는 뜻

    function isSameExists(array) {
        let compare = new Set()
        for (const a of array) {
            if (a === ".") continue
            if (compare.has(a)) return true
            compare.add(a)
        }

        return false
    }

    // 행 확인
    for (let i = 0; i < 9; i++) {
        const isColValid = !isSameExists(board[i])
        if (isColValid === false) return false
    }

    // 열 확인
    const rows = []
    for (let i = 0; i < 9; i++) {
        const row = []
        for (let j = 0; j < 9; j++) {
            row.push(board[j][i])
        }
        rows.push(row)
    }
    for (let i = 0; i < 9; i++) {
        const isRowValid = !isSameExists(rows[i])
        if (isRowValid === false) return false
    }

    // 33칸 확인
    // 3으로 나눴을 때 몫이 같은 인덱스의 것끼리 묶기?
    const squares = Array.from({ length: 9 }, () => [])
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            // i와 j로 square에서의 위치 특정하기 0 ~ 9
            // 0,0 0,1 1,0 1,1 2,0 0,2 2,1 1,2 2,2
            // 2차원을 1차원으로 바꾸기
            // x값에 3을 부여
            squares[3 * Math.floor(i/3) + Math.floor(j/3)].push(board[i][j])
        }
    }
    for (let i = 0; i < 9; i++) {
        const isSquareValid = !isSameExists(squares[i])
        if (isSquareValid === false) return false
    }

    return true
};