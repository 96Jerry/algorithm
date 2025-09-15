/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const isRepeatable = (doubleArray) => {
        for (const array of doubleArray) {
            if (array.length !== 9) {
                throw new Error('wrong parameter')
            }

            const numbers = array.filter((el) => el !== '.')
            if (numbers.length === 9) {
                return false
            }

            for (const number of numbers) {
                if (numbers.filter(el => el === number).length > 1) {
                    return false
                }
            }
        }

        return true
    }

    const rows = []
    const columns = [[".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."]]
    const boxes = [[".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."]]

    for (let i = 0; i < 9; i++) {
        const row = []
        for (let j = 0; j < 9; j++) {
            row.push(board[i][j])
            columns[j][i] = board[i][j]
            boxes[i][j] = board[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + j % 3]
            // (i, j)(4, 3) -> (5, 4) // (1, 1) -> (Math.floor(i/3), Math.floor(j/3))
            // (i, j)(1, 1) -> (0, 4)
        }
        rows.push(row)
    }

    return isRepeatable(rows) && isRepeatable(columns) && isRepeatable(boxes)
};