import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import CartCard from './CartCard'
import { CartContext } from '../context/cartContext'
import CheckoutForm from './CheckoutForm'

import { Button, Header, Icon, Divider } from 'semantic-ui-react';

// import StripeCheckout from 'react-stripe-checkout'
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51MmPMkKVBulZTKggDXMGrLIIqMtVV8tgTYrYPqWJkp3QwumtXfCWytFXcd5IcU3um1pMPfsYP1C44ksZyFmSscYv00pb3CXkx4')


const CartContainer = () => {

  const [clientSecret, setClientSecret] = useState(null)
  const [total, setTotal] = useState(0)

  const history = useHistory()

  const {cart, setCart} = useContext(CartContext)
  console.log("this is cart", cart)

  const mappedCart = cart?.map(cart => (
    <CartCard {...cart} key={cart.id} setCart={setCart} total={total} />
  ))


  const totalPrice = cart?.reduce((acc, { quantity, product }) => {
    return acc + quantity * product.price;
  }, 0);

  
  const handlePurchase = () => {
    fetch('/charges', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        purchase: cart
  
      })
    })
    .then((res) => res.json())
    .then((data) => {
      console.log('data', data)
      setTotal(data.total)
      setClientSecret(data.clientSecret)
    })

  }



  const options = {
    // passing the client secret obtained from the server
    clientSecret
  }

  
  return (
    <div>
      <Header as="h1">
        <Icon name="cart" />
        Shopping Cart
      </Header>
      {mappedCart}

      <Divider />
      
      <Header as="h3">
        Grand Total: ${totalPrice.toFixed(2)}
      </Header>
      
      <Button color="green" onClick={handlePurchase}>
        Checkout
      </Button>

      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}

export default CartContainer