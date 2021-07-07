import React from 'react';
import CartItem from './CartItem';
// import {store} from '../firebaseconfig'

const Cart = ({ cart }) => {
  const reducer = (accumulator, curr) => parseInt(accumulator) + parseInt(curr);
  let total = 0;

  if (cart.length){
    total = cart
    .map(data => data.price)
    .reduce(reducer);
  }

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return cart.length &&
  <div className= 'order-list'>
    <h1>PEDIDOS</h1>
    <hr className= 'line'></hr>
    { cart.map((data, key) => (
      <div key={key}>
        <CartItem
          name={data.name}
          price={numberWithCommas(data.price)}
          id={data.id}
        />
      </div>
    ))}
    <div>
      <hr></hr>
      <h2>TOTAL: ${numberWithCommas(total)}</h2>
    </div>
  </div>

}

export default Cart;