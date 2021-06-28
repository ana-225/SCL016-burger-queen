import './App.css';
import Header from './components/Header'
import Logo from './components/Logo'
// import Main from './components/Main'
import Lunch from './components/Lunch'
import Order from './components/Order'

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
