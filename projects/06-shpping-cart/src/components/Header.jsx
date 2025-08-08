import Filters from "./Filters"

const Header = () =>{

    return (
        <header className="flex flex-col gap-8">
            <h1 className="font-bold text-lg">Tienda con carrito</h1>
            <Filters/>
        </header>
    )
}

export default Header