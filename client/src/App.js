import './App.css';
import React, { useState, useEffect, useRef } from 'react'
import HomePage from './components/pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import Registration from './components/pages/Registration';
import HeroSection from './components/pages/HeroSection';
import backgroundVideo from './assets/clouds.mp4';

function App() {

  return (
    <div className="flex flex-col">
      <video autoPlay loop muted id='video'>
        <source src={backgroundVideo} type='video/mp4' />
      </video>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}>
          <Route path='/' element={<HeroSection></HeroSection>}></Route>
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        </Route>
        <Route path='/reg' element={<Registration></Registration>}></Route>
      </Routes>
    </div>
  );
}

export default App;
