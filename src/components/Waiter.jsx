import menu from './menu.json'
import React, { useState } from 'react'

const Waiter = () => {
  const [lunch] = useState(menu);
  const [filteredState, setFilteredState] = useState(0);

  console.log('filtered state',filteredState);

  const filteredData = (type) => {
    console.log(type);
    const data = menu.koreanMenu.filter(menu => menu.type === type);
    return setFilteredState(data);
  }

  return ( 
    <div className='lunch-container'>
      <div className='categories'>
        <button className='btn-secondary' onClick={() => filteredData('Food')}>Almuerzos</button>
        <button className='btn-secondary' onClick={() => filteredData('Drink')}>Bebestibles</button>
      </div>
      <div>
        {
          !filteredState ? lunch.koreanMenu.map((item, index) => {
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
        }) : <div>eaea</div>
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