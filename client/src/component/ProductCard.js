import React, { useState, useContext } from 'react';
import { Card, Image, Button, Input } from 'semantic-ui-react';
import { CartContext } from '../context/cartContext';
import { UserContext } from '../context/userContext';

const ProductCard = ({ id, category, description, name, pic_link, price, stock }) => {

  const { cart, setCart } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);

  const [quantity, setQuantity] = useState(0);

  // console.log('product card level purchaseId', purchaseId)
  console.log('cart context', cart)


  // getting the customer's latest purchase_id, this is needed because after purchase we need to issue a new purchase_id
  const latestPurchase = currentUser?.purchases[currentUser?.purchases.length - 1]
  const custPurchaseId = latestPurchase ? latestPurchase.id : null


  const productData = {
    product_id: id,
    quantity: quantity,
    purchase_id: custPurchaseId, 
  };

  const handleAddToCart = () => {
    fetch("/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(productData)
    })
    .then(response => response.json())
    .then(data => {
      const productObj = data.product;
      setCart(currentCart => 
        // console.log(currentCart)
        [productObj, ...currentCart]
        );
    })
    .catch(error => alert(error))
  };

  return (
    <Card>
      <Image src={pic_link} style={{ width: '100px', height: '100px' }} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{category}</Card.Meta>
        <Card.Description>{description}</Card.Description>
        <Card.Meta>Price: {price}</Card.Meta>
        <Card.Meta>Stock: {stock}</Card.Meta>
        <Input type="number" name="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </Card.Content>
    </Card>
  );
};

export default ProductCard;