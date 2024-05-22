import { useContext } from "react"
import { CartContext } from "../context/cartContextCreater"

const ItemTwo = (props) => {
    const itemContext = useContext(CartContext);
    return(
        <div className="card">
            <h4>{props.name}</h4>
            <p>{props.price}</p>
            <button onClick={() => {
                itemContext.setItem2Count(itemContext.item2Count +1)
                itemContext.setCartItems([...itemContext.cartItems, 
                    {name: props.name , price: props.price}
                ])
            }}>
                    Add to cart
            </button>
        </div>
    )
}
export default ItemTwo;