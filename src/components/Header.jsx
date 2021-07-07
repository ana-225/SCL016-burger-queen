const Header = () => {

  return ( 
  <div className = 'header-container'>
      <div className = 'client-name'>
        <input type = 'form' placeholder = 'NOMBRE CLIENTE' className = 'clientInfo'></input> <button className = 'add-btn'>AGREGAR</button>
      </div>
      <div className = 'table-number'>
        <input type = 'form' placeholder = 'N° MESA' className = 'tableInfo'></input> <button className = 'add-btn'>AGREGAR</button>
      </div>
    <div>
      <button className = 'return-btn'onClick={() => window.location.href = "http://localhost:3000/"}>
        <img src='https://i.ibb.co/ZdR2ZG0/back.png' alt= ''/>
      </button>
    </div>
  </div>
  )
}

export default Header;