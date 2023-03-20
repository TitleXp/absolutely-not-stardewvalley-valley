import React from "react";
import { useState, useEffect } from 'react';
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
    <div>FruitsContainer
      {mappedFruits}
    </div>
  )
}

export default FruitsContainer