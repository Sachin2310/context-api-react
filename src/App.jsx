// import './App.css'
import ItemList from "./components/ItemList"
import { CartContext } from "./context/cartContextCreater"
import { useContext } from "react"
import { Cart } from "./components/Cart";

function App() {
  const cart = useContext(CartContext);
  return (
    <>
      {
        console.log(cart)
      }
      <p>Item1 count: {cart.item1Count}</p>
      <p>Item2 count: {cart.item2Count}</p>
      <ItemList/>
      <Cart/>
    </>
  )
}

export default App
