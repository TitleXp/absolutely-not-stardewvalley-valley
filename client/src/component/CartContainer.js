import React from 'react'
import { useState, useEffect, useContext } from 'react'
import CartCard from './CartCard'
import { CartContext } from '../context/cartContext'


const CartContainer = () => {

  const {cart, setCart} = useContext(CartContext)

  console.log("this is cart", cart)

  const mappedCart = cart.map(cart => (
    <CartCard {...cart} key={cart.id} />
  ))

  return (
    <div>CartContainer
      {mappedCart}

    </div>
  )
}

export default CartContainer