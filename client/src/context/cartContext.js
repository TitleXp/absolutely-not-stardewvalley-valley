import { useState, useEffect, createContext } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    useEffect(() => { // async version
        const fetchCart = async () => {
          try {
            const resp = await fetch("/carts")
            const data = await resp.json()
            setCart(data)
          } catch(error) {
            alert(error)
          }
        } 
        fetchCart()
      }, []);

    // useEffect(() => {
    //   const fetchCart = () => {
    //     fetch("/carts")
    //       .then((resp) => resp.json())
    //       .then((data) => setCart(data))
    //       .catch((error) => alert(error));
    //   };
    //   fetchCart();
    // }, []);
    

    return(
        <CartContext.Provider value={{cart: cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}