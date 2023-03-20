import React from "react";
import { useState, useEffect } from 'react';
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
    <div>VegetablesContainer
      {mappedVegetables}
    </div>
  )
}

export default VegetablesContainer