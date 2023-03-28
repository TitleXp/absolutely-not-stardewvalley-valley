import React from 'react'
import { useState, useEffect } from 'react'
import { Card, Container } from 'semantic-ui-react'
import ProductCard from './ProductCard'

const AllProductsContainer = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const resp = await fetch("/products")
        const data = await resp.json()
        setProducts(data)
      } catch(error) {
        alert(error)
      }
    } 
    fetchAllProducts()
  }, []);

  const mappedAllProducts = products.map(product => (
    <ProductCard {...product} key={product.id} />
  ))

  return (
    <Container>
      <h1>All Products</h1>
      <Card.Group itemsPerRow={2} className="product-card-group">
        {mappedAllProducts}
      </Card.Group>
    </Container>
  )
}

export default AllProductsContainer