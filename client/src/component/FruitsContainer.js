import React from "react";
import { useState, useEffect } from 'react';
import { Card, Container } from 'semantic-ui-react';
import ProductCard from "./ProductCard";

const FruitsContainer = () => {

  const [products, setProducts] = useState([])

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

  const mappedFruits = products.map(product => (
    <ProductCard {...product} key={product.id} />
  ))

  return (
    <Container>
      <h1>Fruits</h1>
      <Card.Group itemsPerRow={2}>{mappedFruits}</Card.Group>
    </Container>
  )
}

export default FruitsContainer;