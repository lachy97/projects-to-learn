import { TURNS } from "../utils/constants"
import Square from "./Square"

const TurnToPlay = ({turn}) =>{

    return (
        <section className="turn">
        <Square className="square" isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square className="square" isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    )
}

export default TurnToPlay