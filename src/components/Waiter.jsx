import menu from './menu.json'
import React, { useState} from 'react'
//import {auth} from '../firebaseconfig'
import Product from './Product';
import Cart from './Cart'

const Waiter = () => {
  const [lunch] = useState(menu);
  const [actualFilter, changeFilter] = useState('Food');
  const [cart, addToCart] = useState([]);

  const changeCart = (name, price) => {
    addToCart(oldArray => [...oldArray, {name: name, price: price}]);
    console.log(cart);
  }

  return ( 
    <div className='lunch-container'>
      <div className='categories'>
        <button className='btn-secondary' onClick={() => changeFilter('Food')}>Almuerzos</button>
        <button className='btn-secondary' onClick={() => changeFilter('Drink')}>Bebestibles</button>
      </div>
      <div className='lunch'>
        {
          lunch.koreanMenu.filter(menu => menu.type === actualFilter).map((item, key) => {
          const {name, price, images } = item;
           return (
            <div key={`${name}-${key}`}>
              <Product
                name={name}
                price={price}
                image={images}
                changeCart={changeCart}
              />
            </div>
          )
        })
        }
      </div>
      <Cart 
        cart={cart}
      />
    </div>
    )
}

export default Waiter;