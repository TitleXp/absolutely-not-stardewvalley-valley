import React from 'react'
import { useState, useEffect, useContext } from 'react'
import CartCard from './CartCard'
import { CartContext } from '../context/cartContext'
import StripeCheckout from 'react-stripe-checkout'

const CartContainer = () => {

  const {cart, setCart} = useContext(CartContext)

  console.log("this is cart", cart)

  const mappedCart = cart?.map(cart => (
    <CartCard {...cart} key={cart.id} setCart={setCart} />
  ))


  const totalPrice = cart?.reduce((acc, { quantity, product }) => {
    return acc + quantity * product.price;
  }, 0);

  let total = 0

  const onToken = (token) => {
    const charge = {
        token: token.id,
        };
        const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ charge: charge, price: total * 100 }),
        };
        fetch("/charges", config)
        .then((res) => res.json())
        .then((response) => {
            console.log(response)
            if (response.status === "succeeded") {
            console.log("Token retrieved successfully.");
          } else {
            console.log("Token retrieval failed.");
            }
        })
        .catch((error) => {
            console.error("Error while retrieving token:", error);
        });
    };


  return (
    <div>CartContainer
      {mappedCart}

      <div>
        Grand Total: ${totalPrice.toFixed(2)}
      </div>
      

      <StripeCheckout
        token={onToken}
        stripeKey={process.env.STRIPE_PUBLISHABLE_KEY}
      />

    </div>
  )
}

export default CartContainer