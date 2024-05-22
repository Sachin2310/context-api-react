import { useCart } from "../context/cartContextCreater"
export const Cart = () => {
    const cartContext = useCart();
    const totalPrice = cartContext.cartItems.reduce((a,b) => a + b.price,0);
    console.log("price ",totalPrice)
    return (
        <>
            <h2>Total - {totalPrice}</h2>
        </>
    )
}