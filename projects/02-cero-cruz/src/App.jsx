import { useState } from "react"
import confetti from "canvas-confetti"
import { TURNS } from "./utils/constants"
import WinnerModal from "./components/WinnerModal"
import TurnToPlay from "./components/TurnToPlay"
import Board from "./components/Board"
import { checkEndGame, checkWinner } from "./logic/board"
import { resetGameStorage, saveGameStorage } from "./logic/storage"

function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setWinner(null)
    setTurn(TURNS.X)
    resetGameStorage()
  }

  const updateBoard = (index) => {

    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameStorage({board:newBoard, turn:newTurn})

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1>Cero - Cruz</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>

      <Board board={board} updateBoard={updateBoard} />

      <TurnToPlay turn={turn} />

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
