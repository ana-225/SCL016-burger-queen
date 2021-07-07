import menu from './menu.json'
import React, { useState} from 'react'
//import {auth} from '../firebaseconfig'
import Product from './Product';
import Cart from './Cart'

const Waiter = () => {
  const [lunch] = useState(menu);
  const [actualFilter, changeFilter] = useState('Food');
  const [cart, addToCart] = useState([]);
  // const [deleteItem, setDelete] = useState([cart]);
  // console.log('Hola', cart);

  const changeCart = (name, price, id) => {
    addToCart(oldArray => [...oldArray, {name: name, price: price, id: id}]);
  }

  const deleteBtn = (id) => {
    const filtItem = cart.filter(() => menu.id !== id )
    addToCart(filtItem)
  }

  return ( 
    <div className='lunch-container'>
      <div className= 'boxMenu'>
      <div className='categories'>
        <button className='btn-secondary' onClick={() => changeFilter('Food')}>Almuerzos</button>
        <button className='btn-secondary' onClick={() => changeFilter('Drink')}>Bebestibles</button>
      </div >
      <div className='lunch'>
        {
          lunch.koreanMenu.filter(menu => menu.type === actualFilter).map((item, key) => {
          const {name, price, images, id } = item;
           return (
            <div key={`${name}-${key}`}>
              <Product
                name={name}
                price={price}
                image={images}
                changeCart={changeCart}
                id={id}
              />
            </div>
          )
        })
        }
      </div>
      </div>
      <Cart 
        cart={cart}
        deleteBtn={deleteBtn}
      />
    </div>
    )
}

export default Waiter;