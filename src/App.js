import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
  //Link
} from "react-router-dom";
import Header from './components/Header.jsx'
import Login from './components/Login.jsx'
// import Main from './components/Main.jsx'
import './App.css'
import Waiter from './components/Waiter.jsx'
//import Order from './components/Order.jsx'
import Drinks from './components/Drinks.jsx'

function App() {
  return (
    <Router>
     <div className='background'>
       <Switch>
        <Route path ='/' exact>
          <Login/>
        </Route>
        <Route path = '/lunch'>
          <Header/>
          <Waiter/>
        </Route>
        <Route path = '/drinks'>
          <Header/>
          <Drinks/>
        </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
