import menu from './menu.json'
import React, { useState,useHistory} from 'react'
import {auth} from '../firebaseconfig'

const Waiter = () => {
  const [lunch] = useState(menu);
  const [actualFilter, changeFilter] = useState('Food');

  return ( 
    <div className='lunch-container'>
      <div className='categories'>
        <button className='btn-secondary' onClick={() => changeFilter('Food')}>Almuerzos</button>
        <button className='btn-secondary' onClick={() => changeFilter('Drink')}>Bebestibles</button>
      </div>
      <div className='lunch'>
        {
          lunch.koreanMenu.filter(menu => menu.type === actualFilter).map((item, index) => {
          const {name, price } = item;
           return ( 
          <div className='menu-box'>
           <ul key={index}>
              <li>
                <img src={item.images} alt={item.name} />
              </li>
              <div className ="foodName">
              <li>
                {name}
              </li>
            <button className='style-buttonLunch'>
              Agregar ${price}
            </button>
            </div>
            </ul> 
          </div>
          )
        })
        }
      </div>
    </div>
    )
}

export default Waiter;


/*<div>
        <img src = 'https://i.ibb.co/pzj5BWD/kimchi.png' alt = ''/>
      </div>
      <div>
        <table>
          < tbody >
            <tr>
              <th>Bibimbap</th>
            </tr>
          </tbody >
        </table>
        <button>$14.990 AGREGAR</button>
      </div>*/