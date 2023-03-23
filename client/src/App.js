import './App.css';
import React, { useState, useEffect, useRef } from 'react'
import HomePage from './components/pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import Registration from './components/pages/Registration';
import HeroSection from './components/pages/HeroSection';
import Welcome from './components/pages/Welcome';

function App() {

  return (
    <div className="flex flex-col">
      
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}>
          <Route path='/' element={<HeroSection></HeroSection>}></Route>
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        </Route>
        <Route path='/reg' element={<Registration></Registration>}></Route>
        <Route path='/dashboard' element={<Welcome></Welcome>}></Route>
      </Routes>
    </div>
  );
}

export default App;
