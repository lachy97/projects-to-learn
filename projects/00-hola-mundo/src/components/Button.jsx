import { useState } from "react";

const Button = () => {
    const [state, setState] = useState(true)

    const onClick = () => {
        setState(!state)
    }

    return (
        <button onClick={onClick}>
            {`${state ? 'Me gusta' : 'No me gusta'}`}
        </button>
    )
}
export default Button;