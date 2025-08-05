import { TURNS } from "../utils/constants"

export const saveGameStorage = ({board, turn}) => {
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}
export const resetGameStorage = () => {
    window.localStorage.setItem('board', JSON.stringify(Array(9).fill(null)))
    window.localStorage.setItem('turn', TURNS.X)
}