import React from 'react';
import { useState } from 'react';
// import {store} from '../firebaseconfig'

const Cart = () => {
  const [CartProducts, ChangeCart] = useState('');
  //const [Total]

  const CartProductss = {
    menu: [
      {
      Name: "Kimchi",
      Price: 7490
    },
    {
      Name: "Bibimbap",
      Price: 13490
    },
    {
      Name: "Samgyeopsal",
      Price: 13490
    },
    {
      Name: "Bulgogi",
      Price: 14490
    },
    {
      Name: "Soju",
      Price: 3390
    },
    {
      Name: "Sake",
      Price: 3390
    },
    {
      Name: "Zumo de Frutas",
      Price: 2190
    },
    {
      Name: "Té Coreano",
      Price: 1590
    }
  ]}



  console.log('products',CartProductss);

  return (
    <div className= 'order-list'>
      <h1>PEDIDOS</h1>
      <hr className= 'line'></hr>
      { CartProductss.menu.map((data, key) => ( 
        <div className= 'element-list' key={`${data}-${key}`}> 
          <p className= 'product-name'>{data.Name}</p>
          <p className= 'product-price'>${data.Price}</p>
        </div>
      ))}
      <div>
        <hr></hr>
        <h2>TOTAL:</h2>
      </div>
      <button onClick={() => ChangeCart('Seccion de productos')}>Botoncito Kawaii</button>
      { CartProducts && <div>{CartProducts}</div> }
    </div>
  )
}

export default Cart;