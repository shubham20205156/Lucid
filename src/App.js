import './App.css';
import React, { useState } from 'react'
import Header from './components/Header/header';
import Home from './components/Home/home';
import About from './components/About';
import Services from './components/Services';
import SignUp from './components/Header/SignUp';
import Login from './components/Header/Login';
import Alert from './components/Header/Alert';
import Table from './components/Home/Table';
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
        <Header />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<Home showAlert={showAlert} />}>
          </Route>
          <Route exact path="/About" element={<About />}>
          </Route>
          <Route exact path="/Services" element={<Services />}>
          </Route>
          <Route exact path="/Login" element={<Login showAlert={showAlert} />}>
          </Route>
          <Route exact path="/SignUp" element={<SignUp showAlert={showAlert} />}>
          </Route>
          <Route exact path="/table" element={<Table />}>
          </Route>
        </Routes>
      </Router>
      <footer className='wrapper'>
        <h5>All rights is reserved by Lucid Growth 2024</h5>
      </footer>
    </>
  );
}

export default App;
