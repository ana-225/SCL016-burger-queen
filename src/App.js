import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header'
import Logo from './components/Logo'
// import Main from './components/Main'

import Lunch from './components/Lunch'
import Order from './components/Order'
import Drinks from './components/Drinks'

function App() {
  return (
    <Router>
     <div className='background'>
       <Switch>
        <Route path ='/' exact>
          <Logo/>
        </Route>
        <Route path = '/lunch'>
          <Header/>
          <Lunch/>
          <Lunch/>
          <Lunch/>
          <Lunch/>
          <Order/>
        </Route>
        <Route path = '/drinks'>
          <Header/>
          <Drinks/>
          <Drinks/>
          <Drinks/>
          <Drinks/>
        </Route>


    </Switch>
    </div>
    </Router>
  );
}

export default App;
