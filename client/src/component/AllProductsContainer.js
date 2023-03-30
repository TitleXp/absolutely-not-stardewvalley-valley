import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Card, Container } from 'semantic-ui-react'
import ProductCard from './ProductCard'
import SearchProduct from './SearchProduct'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import { useContext } from 'react'

const AllProductsContainer = ({ purchaseId }) => {

  const {currentUser} = useContext(UserContext)

  const [products, setProducts] = useState([])
  const [searchProduct, setSearchProduct] = useState("")
  
// console.log('allproductscontainer level', purchaseId)

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

  const filteredProducts = products.filter(product => (product.name.toLowerCase().includes(searchProduct.toLowerCase())))

  const mappedAllProducts = filteredProducts.map(product => (
    <ProductCard {...product} key={product.id} purchaseId={purchaseId} />
  ))


  return (
    <Container style={{ marginTop: '10em' }} textAlign='center' >
      <img src="https://i.imgur.com/rHEZqK5.png" width={700} />
      <br />

      {currentUser ? <Button as={Link} to='/cart' color='yellow'>Go to Cart</Button> : null}
      
      <h1>All Products</h1>
      <SearchProduct searchProduct={searchProduct} setSearchProduct={setSearchProduct}/>
      <br />
      <Card.Group itemsPerRow={3} className="product-card-group">
        {mappedAllProducts}
      </Card.Group>
    </Container>
  )
}

export default AllProductsContainer