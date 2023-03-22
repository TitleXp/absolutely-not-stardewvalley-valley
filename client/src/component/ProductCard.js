import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/cartContext';

const ProductCard = ({ id, category, description, name, pic_link, price, stock }) => {


  const {cart, setCart} = useContext(CartContext)
  const [quantity, setQuantity] = useState([])

  console.log(id)

  const productData = {
    product_id: id,
    quantity: quantity


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
    .then(productObj => setCart(currentVal => [productObj, ...currentVal]))
    .catch(error => alert(error))
  }

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