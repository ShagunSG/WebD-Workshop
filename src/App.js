import './App.css';
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import About from './components/About'

// import useLocalStorage from 'use-local-storage';
import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  let Hola;
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      Hola = <><LandingPage></LandingPage><button onClick={toggleTheme}>Toggle Theme</button></>;
    } else {
      setTheme('light');
      Hola = <><Navbar></Navbar><button onClick={toggleTheme}>Toggle Theme</button></>;
    }
  };
  return (
    <><Hola /> <button onClick={toggleTheme}>Toggle Theme</button> </>
  );
}