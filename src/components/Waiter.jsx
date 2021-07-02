import menu from './menu.json'
import React, { useState } from 'react'

const Waiter = () => {
  const [lunch] = useState(menu);
  const [actualFilter, changeFilter] = useState('Food');

  console.log(actualFilter);


  return ( 
    <div className='lunch-container'>
      <div className='categories'>
        <button className='btn-secondary' onClick={() => changeFilter('Food')}>Almuerzos</button>
        <button className='btn-secondary' onClick={() => changeFilter('Drink')}>Bebestibles</button>
      </div>
      <div>
        {
          lunch.koreanMenu.filter(menu => menu.type === actualFilter).map((item, index) => {
          const {name, description, price } = item;
           return ( 
           <ul key={index}>
              <li>
                <img src={item.images} alt={item.name} className="foodImage" />
              </li>
              <li className="foodName">
                {name}
              </li>
              <li>
                {description}
              </li>
            <button>
              Agregar ${price}
            </button>
            </ul> 
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