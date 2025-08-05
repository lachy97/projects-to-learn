import { WINNER_COMBOS } from "../utils/constants"

export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
}
export const checkWinner = (boardCheck) => {
    for (const combo of WINNER_COMBOS) {
        const [x, y, z] = combo
        if (boardCheck[x] && boardCheck[x] === boardCheck[y] && boardCheck[x] === boardCheck[z])
            return boardCheck[x]
    }
    return null
}