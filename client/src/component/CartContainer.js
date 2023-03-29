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


const CartContainer = ({ purchaseId, userId, setPurchaseId }) => {

  const [clientSecret, setClientSecret] = useState(null)
  const [total, setTotal] = useState(0)

  const history = useHistory()

  const {cart, setCart} = useContext(CartContext)
  console.log("this is cart", cart)

  const mappedCart = cart.map(cart => (
    <CartCard {...cart} key={cart.id} setCart={setCart} total={total} />
  ))


  const totalPrice = cart?.reduce((acc, { quantity, product }) => {
    return acc + quantity * product.price;
  }, 0);

  const handleBought = () => {
        // flipping the boolean for is_purchased in purchase table
    fetch(`/purchases/${purchaseId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        is_purchase: true
      })
    })
    .then(res => res.json())
    .then()
    .catch(error => alert(error))
  }

  const createPurchaseId = (userId) => {
    // create new purchase for that user (empty cart)
    fetch('/purchases', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId
      }),
    })
    .then((res) => {
      if(res.ok) {
        res.json().then(purchaseObj => {
          setPurchaseId(purchaseObj.id)
        })
      } else {
        console.log("could not create purchaseID")
      }
      res.json().then(
        // some error message here
      )
    })
    .catch((error) => alert(error))
    
  }

  
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
    handleBought()
    createPurchaseId(userId)


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