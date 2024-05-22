import { useContext } from "react"
import { CartContext } from "../context/cartContextCreater"

const ItemOne = (props) => {
    const cartContext = useContext(CartContext);
    return(
        <div className="card">
            <h4>{props.name}</h4>
            <p>{props.price}</p>
            <button onClick={() => {
                cartContext.setItem1Count(cartContext.item1Count +1)
                cartContext.setCartItems([...cartContext.cartItems, 
                    {name: props.name , price: props.price}
                ])
                }}>
                Add to cart
            </button>
        </div>
    )
}
export default ItemOne;