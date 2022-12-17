import './App.css';
import './DApp.css';
import Navbar from './components/Navbar'
import DNavbar from './components/Dark/DNavbar'
import LandingPage from './components/LandingPage'
import DLandingPage from './components/Dark/DLandingPage'
import DDoggy from './components/Dark/DDoggy'
import About from './components/About'
import Doggy from './components/Doggy'
import light from './images/moon.png'
import dark from './images/sun.png'

// import useLocalStorage from 'use-local-storage';
import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  const [theme, setTheme] = useState(light);
  const [hola, setHola] = useState(

    <Router>
      <div
        className="app bg-gradient-to-r from-rose-100 to-teal-100 overflow-x-hidden"
        style={{ height: "100vh" }}
      >
        <Routes>
          <Route
            path="/WebD-Workshop"
            element={
              <>
                <Navbar />
                <LandingPage />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <About />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <Doggy />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
  const toggleTheme = () => {
    if (theme === light) {
      setTheme(dark);
      setHola(
        <Router>
          <div
            className="app bg-gradient-to-r from-gray-900 to-gray-600 bg-gradient-to-r overflow-x-hidden"
            style={{ height: "100vh" }}
          >
            <Routes>
              <Route
                path="/WebD-Workshop"
                element={
                  <div className='overflow-x-hidden'>
                    <DNavbar />
                    <DLandingPage />
                  </div>
                }
              />
              <Route
                path="/about"
                element={
                  <>
                    <DNavbar />
                    <About />
                  </>
                }
              />
              <Route
                path="*"
                element={
                  <>
                    <DNavbar />
                    <DDoggy />
                  </>
                }
              />
            </Routes>
          </div>
        </Router>
      );
    } else {
      setTheme(light);
      setHola(
        <Router>
          <div
            className="app bg-gradient-to-r from-rose-100 to-teal-100 overflow-x-hidden"
            style={{ height: "100vh" }}
          >
            <Routes>
              <Route
                path="/WebD-Workshop"
                element={
                  <>
                    <Navbar />
                    <LandingPage />
                  </>
                }
              />
              <Route
                path="/about"
                element={
                  <>
                    <Navbar />
                    <About />
                  </>
                }
              />
              <Route
                path="*"
                element={
                  <>
                    <Navbar />
                    <Doggy />
                  </>
                }
              />
            </Routes>
          </div>
        </Router>
      );
    }
  };
  return (
    <>
      {hola}
      <div className='fixed top-8 right-8'>
        <button onClick={toggleTheme} className='rounded-full'>
          <img src={theme} className='w-8 h-8'></img>
        </button>
      </div>
    </>
  );
}