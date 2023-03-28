import React from "react";
import { useState, useEffect } from 'react';
import { Card, Container } from 'semantic-ui-react';
import ProductCard from "./ProductCard";

const VegetablesContainer = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchVegetables = async () => {
      try {
        const resp = await fetch("/vegetables")
        const data = await resp.json()
        setProducts(data)
      } catch(error) {
        alert(error)
      }
    } 
    fetchVegetables()
  }, []);

  const mappedVegetables = products.map(product => (
    <ProductCard {...product} key={product.id} />
  ))
  
  return (
    <Container>
      <h1>Vegetables</h1>
      <Card.Group itemsPerRow={2}>{mappedVegetables}</Card.Group>
    </Container>
  )
}

export default VegetablesContainer;