import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import CartCard from './CartCard'
import { CartContext } from '../context/cartContext'
import CheckoutForm from './CheckoutForm'

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

  // let total = 0

  // const onToken = (token) => {
  //   const charge = {
  //       token: token.id,
  //       };
  //       const config = {
  //       method: "POST",
  //       headers: {
  //           "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ charge: charge, price: total * 100 }),
  //       };
  //       fetch("/charges", config)
  //       .then((res) => res.json())
  //       .then((response) => {
  //           console.log(response)
  //           if (response.status === "succeeded") {
  //           console.log("Token retrieved successfully.");
  //         } else {
  //           console.log("Token retrieval failed.");
  //           }
  //       })
  //       .catch((error) => {
  //           console.error("Error while retrieving token:", error);
  //       });
  //   };

  
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
    <div>CartContainer
      {mappedCart}

      <div>
        Grand Total: ${totalPrice.toFixed(2)}
      </div>

      <button onClick={handlePurchase}>BUY</button>

      {clientSecret && <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
      }
      


      

      {/* <StripeCheckout
        token={onToken}
        stripeKey={process.env.STRIPE_PUBLISHABLE_KEY}
      /> */}

    </div>
  )
}

export default CartContainer