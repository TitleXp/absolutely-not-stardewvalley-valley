import React from 'react'
import { useState, useEffect } from 'react'
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
    <div>AllProductsContainer
      {mappedAllProducts}
    </div>
  )
}

export default AllProductsContainer