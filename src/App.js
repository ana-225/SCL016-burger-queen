import './App.css';
import Header from './components/Header'
import Logo from './components/Logo'
// import Main from './components/Main'
import Lunch from './components/Lunch'
import Order from './components/Order'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className='background'>
      <Header/>
      <Lunch/>
      <Lunch/>
      <Lunch/>
      <Lunch/>
      <Order/>
    </div>
  );
}

export default App;
