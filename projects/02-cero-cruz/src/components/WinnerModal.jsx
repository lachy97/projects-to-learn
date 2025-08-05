import Square from "./Square"

const WinnerModal =  ({winner,resetGame}) => {
    if(winner === null) return null
    return (
        <section className="winner">
          <div className="text">
            <h2>
              {winner === false ? 'EMPATE' : `GANADOR`}
            </h2>
            <header className="win">
              {winner && <Square>{winner}</Square>}
            </header>
          </div>
          <footer>
            <button onClick={resetGame}>Empezar de nuevo</button>
          </footer>
        </section>
      )
}

export default WinnerModal