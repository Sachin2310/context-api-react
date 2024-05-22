import { useState, createContext, useContext } from "react";

export const CartContext = createContext();
export const useCart = () => {
    return useContext(CartContext);
}

export const ContextProvider = (props)=> {
    const [item1Count, setItem1Count] = useState(0);
    const [item2Count, setItem2Count] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    return (
        <CartContext.Provider value={{
                item1Count, setItem1Count, item2Count, setItem2Count,
                cartItems, setCartItems
            }}>
            {props.children}
        </CartContext.Provider>
    )
    
}