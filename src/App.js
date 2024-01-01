import './App.css';
import React, { useState } from 'react'
import Header from './components/Header/header';
import Home from './components/Home/home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import IndianStocks from './components/All Stocks/IndianStocks';
import DigitalCurrency from './components/All Stocks/DigitalCurrency';
import SignUp from './components/Header/SignUp';
import Login from './components/Header/Login';
import Alert from './components/Header/Alert';
import Search from './components/Home/Search';
import BuyCoin from './components/All Stocks/BuyCoin';
import Profile from './components/Header/Profile';
import BoughtCoin from './components/Header/BoughtCoin';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert
      ({
        msg: message,
        type: type
      })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
   <>
   <Router>
      <Header/>
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/" element={<Home showAlert={showAlert}/>}>      
        </Route>   
        <Route exact path="/About" element={<About/>}>      
        </Route>        
        <Route exact path="/Contact" element={<Contact/>}>      
        </Route>  
        <Route exact path="/Services" element={<Services/>}>      
        </Route>
        <Route exact path="/IndianStocks" element={<IndianStocks/>}>      
        </Route>
        <Route exact path="/DigitalCurrency" element={<DigitalCurrency/>}>      
        </Route>
        <Route exact path="/Login" element={<Login showAlert={showAlert}/>}>      
        </Route>
        <Route exact path="/SignUp" element={<SignUp showAlert={showAlert}/>}>      
        </Route>
        <Route exact path="/Search" element={<Search/>}>      
        </Route>
        <Route exact path="/BuyCoin" element={<BuyCoin showAlert={showAlert} />}>      
        </Route>
        <Route exact path="/Profile" element={<Profile />}>      
        </Route>
        <Route exact path="/BoughtCoin" element={<BoughtCoin/>}>      
        </Route>
      </Routes>
    </Router>
    <footer className='wrapper'>
      <h5>All rights is reserved by FreeStock 2023</h5>
    </footer>
   </>
  );
}

export default App;
