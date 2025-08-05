import { useEffect, useState } from "react"

const FollowMouse = () => {

    const [enable, setEnable] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handlerClick = () => {
        setEnable(!enable)
    }

    useEffect(() => {
        console.log('efecto', { enable })
        if (!enable) {
            setPosition({ x: 0, y: 0 })
        }

        const handleMove = (event) => {
            const { clientX, clientY } = event
            setPosition({ x: clientX, y: clientY })
            console.log('x, y')
        }


        if (enable) window.addEventListener('pointermove', handleMove)

        return () => {
            console.log('clean all')
            window.removeEventListener('pointermove', handleMove)
        }
    }, [enable])

    useEffect(()=>{
        document.body.classList.toggle('no-cursor', enable)

        return ()=>{
            document.body.classList.remove('no-cursor')
        }
    },[enable])


    return (
        <>
            <div style={{
                position: 'absolute',
                background: '#00ccff',
                borderRadius: '32px',
                pointerEvents: 'none',
                cursor: enable ? 'pointer' : 'auto',
                left: -10,
                top: -10,
                width: 20,
                height: 20,
                transform: `translate(${position.x}px,${position.y}px)`
            }}></div>
            <button onClick={handlerClick}>{enable ? 'Desactivar' : 'Activar'} seguir puntero</button>
        </>
    )
}

export default FollowMouse