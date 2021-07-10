import React, { useState} from 'react'
import { db } from '../firebaseconfig';


const Header = () => {
  const [name, setName] = useState('')
  const [table, setTable] = useState('')
  const [error, setError] = useState('')
  // const {client, setClient} = useState([])

  const setClients = async (e) => {
    e.preventDefault()
    if (!name.trim()) {
      setError('Ingrese nombre cliente')
    }
    if (!table.trim()) {
      setError('Ingrese número de mesa')
    }
    const client = {
      name: name,
      table: table
    }
    try{
      const data = await db.collection('Clientes').add(client)
      console.log('Colección creada')
    }catch(e){
      console.log(e)
    }
  
  }

  return ( 
  <div className = 'header-container'>
    <form onSubmit={setClients} className= 'form-container'>
        <div className = 'client-name'>
          <input
          onChange={(e) => {setName(e.target.value)}} type = 'text' placeholder = 'NOMBRE CLIENTE' className = 'clientInfo' 
          />
        </div>
        <div className = 'table-number'>
          <input
          onChange={(e) => {setTable(e.target.value)}} type = 'text' placeholder = 'N° MESA' className = 'tableInfo' 
          />
        </div>
        <div>
          <input type='submit' value='Enviar' className='send-button' />
        </div>
    </form>
    {
      error ?
      (
      <div>
        <p>{error}</p>
      </div>
      )
      :
      (
        <span></span>
      )
    }

  </div>
  )
};

export default Header;


// onClick={() => window.location.href = "http://localhost:3000/"}