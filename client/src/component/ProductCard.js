import React from 'react'

const ProductCard = ({ id, category, description, name, pic_link, price, stock }) => {
  return (
    <div>ProductCard
      <div>
        <p>{name}</p>
        <img src={pic_link}></img>
        <p>{description}</p>
        <p>category: {category}</p>
        <p>Price: {price}</p>
        <p>Stock: {stock}</p>
      </div>
    </div>
  )
}

export default ProductCard