import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react'

const CompletedCard = ({ id, quantity, product_id, product, purchase }) => {
  const { pic_link } = product;

  return (

        <Card>
          <Image src={pic_link} style={{ width: '100px', height: '100px' }} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{product.name}</Card.Header>
            <Card.Description>
              Quantity: {quantity}
            </Card.Description>
          </Card.Content>
        </Card>
  );
};



export default CompletedCard;