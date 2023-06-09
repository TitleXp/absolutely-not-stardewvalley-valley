import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Card, Image, Header } from 'semantic-ui-react'
import ProductCard from './ProductCard'
import FarmerCard from './FarmerCard'

const ProductsFromFarmContainer = () => {

  const [farm, setFarm] = useState({
    products: []
  })

  const [farmer, setFarmer] = useState([])
  
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

  useEffect(() => {
    const fetchFarmer = async () => {
      try {
        const resp = await fetch(`/farmers/${param.id}`)
        const data = await resp.json()
        setFarmer(data)
      } catch(error) {
        alert(error)
      }
    } 
    fetchFarmer()
  }, []);

  console.log('this is farmer', farmer)

  const mappedProductsFromFarm = farm.products.map(product => (
    <ProductCard {...product} key={product.id}  />
  ))

  return (
    <Container style={{ marginTop: '10em' }}>
      <Header as='h2'>Farmer Information</Header>
      <Card fluid>
        <Image src={farmer.sprite_link} style={{ width: '100px', height: '100px' }} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{farmer.name}</Card.Header>
          <Card.Content>Age: {farmer.age}</Card.Content>
          <Card.Description>{farmer.bio}</Card.Description>
        </Card.Content>
      </Card>
      <Header as='h2'>Products from {farmer.name}'s Farm</Header>
      <Card.Group>
        {mappedProductsFromFarm}
      </Card.Group>
    </Container>
  )
}

export default ProductsFromFarmContainer