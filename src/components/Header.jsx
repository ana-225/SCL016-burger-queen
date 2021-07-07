const Header = () => {

  return ( 
  <div className = 'header-container'>
      <div className = 'client-name'>
        <input type = 'form' placeholder = 'NOMBRE CLIENTE' className = 'clientInfo'></input> 
      </div>
      <div className = 'table-number'>
        <input type = 'form' placeholder = 'N° MESA' className = 'tableInfo'></input>
      </div>
    <div>
      <button className = 'return-btn' onClick={() => window.location.href = "http://localhost:3000/"}>
        <img src='https://firebasestorage.googleapis.com/v0/b/burger-queen-fee8c.appspot.com/o/Im%C3%A1genes%20Men%C3%BA%2Farrow-right.png?alt=media&token=5e79bd8a-3d25-4197-a66c-8b24a16f6490' alt= ''/>
      </button>
    </div>
  </div>
  )
}

export default Header;