import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import "bootstrap/dist/css/bootstrap.min.css";
import OurStore from './pages/OurStore';
import {Cartprovider} from "../src/components/Context";
import CheckOut from './pages/CheckOut';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';

function App() {
  return (
    <>
    <Cartprovider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path='/OurStore' element={<OurStore/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/CheckOut' element={<CheckOut/>} />
        <Route path='/Wishlist' element={<Wishlist/>} />
        
      </Route><Route path='/Login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
    </Cartprovider>
    </>
  );
}

export default App;
