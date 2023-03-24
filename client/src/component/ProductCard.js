import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { UserContext } from '../context/userContext';


const ProductCard = ({ id, category, description, name, pic_link, price, stock }) => {


  const {cart, setCart} = useContext(CartContext)
  const {currentUser} = useContext(UserContext)

  const [quantity, setQuantity] = useState(0)
  const [purchase, setPurchase] = useState([])

  console.log("this is currentUser", currentUser)



  // testing with default value of 1, change it later
  const purchaseID = 1

  console.log(id)

  const productData = {
    product_id: id,
    quantity: quantity,
    purchase_id: purchaseID

  }

  const handleAddToCart = () => {
    fetch("/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(productData)
    })
    .then(res => res.json())
    // .then(productObj => setCart(currentVal => console.log(currentVal)))
    .then(productObj => setCart(currentVal => [productObj, ...currentVal]))
    .catch(error => alert(error))
  }

  console.log("this is cart", cart)

  return (
    <div>ProductCard
      <div>
        <p>{name}</p>
        <img src={pic_link}></img>
        <p>{description}</p>
        <p>category: {category}</p>
        <p>Price: {price}</p>
        <p>Stock: {stock}</p>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <input type="number" name="number" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
    </div>
  )
}

export default ProductCard