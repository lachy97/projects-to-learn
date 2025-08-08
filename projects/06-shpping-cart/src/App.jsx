import Products from "./components/Products"
import { products as initialProducts } from './mooks/products.json'
import Header from "./components/Header"
import Footer from "./components/Footer";
import { useFilters } from "./hooks/useFilters";
import Cart from "./components/Cart";
import { CartProvider } from "./context/cart";

function App() {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
    <main className="w-full flex flex-col gap-4">
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </main>
    </CartProvider>
  )
}

export default App
