const HeaderKitchen = () => {
  return ( 
  <div className = 'header-container'>
    <div>
      <h1>
        COCINA
      </h1>
    </div>
    <div>
      <button className = 'return-btn' onClick={() => window.location.href = "http://localhost:3000/"}>
        <img src='https://i.ibb.co/ZdR2ZG0/back.png' alt= ''/>
      </button>
      </div>
  </div>
  )
}

export default HeaderKitchen;