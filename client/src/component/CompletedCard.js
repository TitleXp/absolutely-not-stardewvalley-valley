import React from 'react';

const CompletedCard = ({ id, quantity, product_id, product, purchase}) => {
//   console.log('id', id);
//   console.log('quantity', quantity);
//   console.log('product_id', product_id);
//   console.log('product', product);
//   console.log('purchase', purchase);

const {pic_link} = product

//   console.log('pic link', pic_link)


  return (
    <div>
      CompletedCard product name: {product.name} quantity: {quantity}
      <img src={pic_link} />
    </div>
  );
};

export default CompletedCard;