import { createContext, useReducer } from "react";
import { cartReducer, initialState } from "../reducers/cart,js"


// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext()

const useCartReducer = () => {
    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addToCart = (product) => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = (product) => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({
        type: 'CLEAR_CART',
    })
    return { state, addToCart, removeFromCart, clearCart }
}

export const CartProvider = ({ children }) => {
    const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

    return (
        <CartContext.Provider value={{
            cart: state, addToCart, clearCart, removeFromCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
};