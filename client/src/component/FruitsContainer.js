import React from "react";
import { useState, useEffect } from 'react';
import { Card, Container, Button } from 'semantic-ui-react';
import ProductCard from "./ProductCard";
import SearchProduct from './SearchProduct'
import { Link } from "react-router-dom";
import { UserContext } from '../context/userContext'
import { useContext } from 'react'


const FruitsContainer = () => {

  const {currentUser} = useContext(UserContext)

  const [products, setProducts] = useState([])
  const [searchProduct, setSearchProduct] = useState("")


  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const resp = await fetch("/fruits")
        const data = await resp.json()
        setProducts(data)
      } catch(error) {
        alert(error)
      }
    } 
    fetchFruits()
  }, []);

  const filteredProducts = products.filter(product => (product.name.toLowerCase().includes(searchProduct.toLowerCase())))

  const mappedFruits = filteredProducts.map(product => (
    <ProductCard {...product} key={product.id} />
  ))

  return (
    <Container style={{ marginTop: '10em' }} textAlign='center'>
      <img src="https://i.imgur.com/rHEZqK5.png" width={700} />
      <br />
      {currentUser ? <Button as={Link} to='/cart' color='yellow'>Go to Cart</Button> : null}

      <h1>Fruits</h1>
      <SearchProduct searchProduct={searchProduct} setSearchProduct={setSearchProduct}/>
      <br />
      <Card.Group itemsPerRow={3}>{mappedFruits}</Card.Group>
    </Container>
  )
}

export default FruitsContainer;