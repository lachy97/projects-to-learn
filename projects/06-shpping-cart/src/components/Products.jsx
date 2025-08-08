import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

const Products = ({ products }) => {
    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = (product) => {
        if (!cart) return
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {products.map(product => {
                    const isProductInCart = checkProductInCart(product)
                    return (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <button className='w-fit' style={{ background: isProductInCart ? 'red' : '#09f' }}
                                onClick={() => {
                                    isProductInCart
                                        ? removeFromCart(product)
                                        : addToCart(product)
                                }}>
                                {
                                    isProductInCart
                                        ? <RemoveFromCartIcon />
                                        : <AddToCartIcon />
                                }
                            </button>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Products