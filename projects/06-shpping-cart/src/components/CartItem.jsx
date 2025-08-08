const CartItem = ({ thumbnail, price, title, quantity, addToCart }) => {
    return (
        <li>
            <img alt={title} src={thumbnail} />
            <div>
                <strong>{title}</strong> - ${price}
            </div>
            <footer>
                <small>Qty: {quantity}</small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
};

export default CartItem