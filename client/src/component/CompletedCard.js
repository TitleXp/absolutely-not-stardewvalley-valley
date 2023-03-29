import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react'

const CompletedCard = ({ id, quantity, product_id, product, purchase }) => {
  const { pic_link } = product;

console.log('this is purchase',purchase)

  const total = quantity * product.price

  return (

        <Card>
          <Image src={pic_link} style={{ width: '100px', height: '100px' }} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{product.name}</Card.Header>

            <Card.Description>
              Quantity: {quantity}
            </Card.Description>

            <Card.Description>
              Price: ${product.price}
            </Card.Description>

            <Card.Description>
              Total: ${total} 
            </Card.Description>

            <Card.Description>
              Bought on: {purchase.created_at}
            </Card.Description>
            
          </Card.Content>
        </Card>
  );
};



export default CompletedCard;