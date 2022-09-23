import React, { useState } from 'react';
import './App.css';
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import { Login } from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { IUserData } from './model';
import CoinList from './components/pages/chart/CoinList';
import CoinDetailPage from './components/pages/chart/CoinDetailPage';




function App() {

  const [isAuth, setIsAuth] = useState<boolean>(false)




  return (
    <div className="App">
      <h3>Header</h3>
      <Routes>
        <Route path='/'  element={<Login setIsAuth={setIsAuth}  />} />
        <Route path='/register' element={<Register />} />
       {isAuth &&  <Route path='/home' element={<Home setIsAuth={setIsAuth} />} /> }
       <Route path={'/home/:id'} element={<CoinDetailPage />} />
       <Route path="*" element={<NotFound  />} />
      </Routes>
    </div>
  );
}

export default App;
