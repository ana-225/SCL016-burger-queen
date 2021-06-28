import './App.css';
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

function App() {
  return (
  <Router>
    <Switch>
      <Route path = '/login'></Route>
      <Route path = '/lunch'></Route>
      <Route path = '/drinks'></Route>
    <div className='background'>
      <Header/>
      <Lunch/>
      <Lunch/>
      <Lunch/>
      <Lunch/>
      <Order/>
    </div>
    </Switch>
    </Router>
  );
}

export default App;
