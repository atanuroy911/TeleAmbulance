import './App.css';
import React, { useState, useEffect, useRef } from 'react'
import HomePage from './components/pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import Registration from './components/pages/Registration';
import HeroSection from './components/pages/HeroSection';
import Welcome from './components/pages/Welcome';
import CurrentTrip from './scenes/currentTrip';
import Dashboard from './scenes/dashboard';
import WrappedMap from './components/gMap/Map';

import config from './components/gMap/config';
import useFetch from './hooks/useFetch';
import Header from './components/Header/Header';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import HospitalPage from './scenes/hospitals';


function App() {

  return (
    <div className="flex flex-col">

      <Routes>
        <Route path='/' element={<HomePage></HomePage>}>
          <Route path='/' element={<HeroSection></HeroSection>}></Route>
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        </Route>
        <Route path='/reg' element={<Registration></Registration>}></Route>
        <Route path='/dashboard' element={<Welcome></Welcome>}>
          <Route path='home' element={<Dashboard></Dashboard>}></Route>
          <Route path='current-trip' element={<CurrentTrip></CurrentTrip>} />
          <Route path='hospital' element={<HospitalPage></HospitalPage>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
