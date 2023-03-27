import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'
import FarmerCard from './FarmerCard'



const ProductsFromFarmContainer = () => {

  const [farm, setFarm] = useState({
    products: []
  })

  const param = useParams()

  useEffect(() => {
    const fetchFarmProduct = async () => {
      try {
        const resp = await fetch(`/farms/${param.id}`)
        const data = await resp.json()
        setFarm(data)
      } catch(error) {
        alert(error)
      }
    } 
    fetchFarmProduct()
  }, []);

  const mappedProductsFromFarm = farm.products.map(product => (
    <ProductCard {...product} key={product.id}  />
  ))

  // console.log(mappedProductsFromFarm)

  return (
    <div>ProductsFromFarmContainer
      <div>
        <FarmerCard />
      </div>
      <div>
        {mappedProductsFromFarm}
      </div>
    </div>
  )
}

export default ProductsFromFarmContainer