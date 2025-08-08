import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons"
import './Cart.css'
import { useCart } from "../hooks/useCart";
import CartItem from "./CartItem";

const Cart = () => {
    const cartCheckBoxId = useId()
    const { cart, addToCart, clearCart } = useCart()

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckBoxId}>
                <CartIcon />
            </label>
            <input id={cartCheckBoxId} type="checkbox" hidden />

            <aside className="cart flex flex-col gap-8 overflow-auto">
                <ul>
                    {cart.map(product=>(
                        <CartItem
                        key={product.id}
                        addToCart={()=>addToCart(product)}
                        {...product}
                    />
                    ))}
                </ul>
                <button className="w-fit" onClick={clearCart}><ClearCartIcon /></button>
            </aside>
        </>
    )
};

export default Cart