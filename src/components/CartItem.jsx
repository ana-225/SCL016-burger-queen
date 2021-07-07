import React from 'react';



const CartItem = ({name, price, id, remove}) => {

  return (
    <div>
      <div className= 'element-list'>
        <p className= 'product-name'>{name}</p>
        <p className= 'product-price'>{price}</p>
      </div>
      <div>
      <button className='style-buttonLunch' onClick={() => remove(id)}>
        <img src="https://firebasestorage.googleapis.com/v0/b/burger-queen-fee8c.appspot.com/o/Im%C3%A1genes%20Men%C3%BA%2Flittle-button.png?alt=media&token=a2dcda11-3eca-4c6e-950d-daf8bc7fe10a" alt="" />
      </button>
      </div>
    </div>

  )
}

export default CartItem;