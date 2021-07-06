import React from 'react';

const Product = ({name, price, image, changeCart}) => {
  return (
    <div className='menu-box'>
      <ul>
        <li>
          <img src={image} alt={name} />
        </li>
        <div className ="foodName">
          <li>
            {name}
          </li>
        <button className='style-buttonLunch' onClick={() => changeCart(name, price)}>
          Agregar ${price}
        </button>
        </div>
      </ul> 
    </div>
  )
}

export default Product;