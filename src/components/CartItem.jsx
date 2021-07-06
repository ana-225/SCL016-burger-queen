import React from 'react';

const CartItem = ({name, price}) => {
  return (
    <div className= 'element-list'>
      <p className= 'product-name'>{name}</p>
      <p className= 'product-price'>{price}</p>
    </div>
  )
}

export default CartItem;