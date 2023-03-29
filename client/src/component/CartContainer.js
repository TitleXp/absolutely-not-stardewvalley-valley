import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CartCard from './CartCard'
import { CartContext } from '../context/cartContext'
import CheckoutForm from './CheckoutForm'
import {Segment} from 'semantic-ui-react'


import { Button, Header, Icon, Divider, Container } from 'semantic-ui-react';

// import StripeCheckout from 'react-stripe-checkout'
import { UserContext } from '../context/userContext'

import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51MmPMkKVBulZTKggDXMGrLIIqMtVV8tgTYrYPqWJkp3QwumtXfCWytFXcd5IcU3um1pMPfsYP1C44ksZyFmSscYv00pb3CXkx4')


const CartContainer = ({ purchaseId, userId, setPurchaseId }) => {

  const {currentUser, setCurrentUser} = useContext(UserContext)

  const [clientSecret, setClientSecret] = useState(null)
  const [total, setTotal] = useState(0)

  console.log('purchase ID', purchaseId)

  const latestPurchase = currentUser?.purchases[currentUser?.purchases.length - 1]
  const custPurchaseId = latestPurchase ? latestPurchase.id : null

console.log('current customer purchaseID',custPurchaseId)

  const history = useHistory()

  const {cart, setCart} = useContext(CartContext)
  console.log("this is cart", cart)

  const mappedCart = cart.map(cart => (
    <CartCard {...cart} key={cart.id} setCart={setCart} total={total} />
  ))


  const totalPrice = cart.reduce((acc, { quantity, product }) => {
    return acc + quantity * product.price;
  }, 0);

  const handleBought = () => {
        // flipping the boolean for is_purchased in purchase table
    fetch(`/purchases/${custPurchaseId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        is_purchased: true
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
    handleBought() // flips the boolean is_purchase to 'true'
    createPurchaseId(userId) // generates a new purchaseId for the user


  }



  const options = {
    // passing the client secret obtained from the server
    clientSecret
  }

  
  return (
    <Container style={{ marginTop: '10em' }}>
      <Header as="h1">
        <Icon name="cart" />
        Shopping Cart
      </Header>
      <Button as={Link} to='/products' color='yellow'>Back to Shopping</Button>
      {cart.length === 0 ? 
        <div className="ui message" color="yellow">
          <div className="header">Nothing in cart</div>
          <p>Browse for <Link to="/products">products</Link> here!</p>
        </div> : 
        mappedCart}

      {cart.length === 0 ? 
        null :
        <>
          <Divider />
          
          <Segment raised textAlign='left'>
            <Header as="h3">
              Grand Total: ${totalPrice.toFixed(2)}
            </Header>
          </Segment>
          
          
          <Button color="green" onClick={handlePurchase}>
            Checkout
          </Button>
        </> 
      }
      

      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      )}
    </Container>
  )
}

export default CartContainer