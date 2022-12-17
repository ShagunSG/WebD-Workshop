import './App.css';
import Navbar from './components/Navbar'
import DNavbar from './components/Dark/DNavbar'
import LandingPage from './components/LandingPage'
import About from './components/About'

// import useLocalStorage from 'use-local-storage';
import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  const [theme, setTheme] = useState('light');
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
                <DNavbar />
                <LandingPage />
              </>
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
        </Routes>
      </div>
    </Router>
  );
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setHola(
      <Router>
        <div
          className="app bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r"
          style={{ height: "100vh" }}
        >
          <Routes>
            <Route
              path="/WebD-Workshop"
              element={
                <>
                  <DNavbar />
                  <LandingPage />
                </>
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
          </Routes>
        </div>
      </Router>
      );
    } else {
      setTheme('light');
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
            </Routes>
          </div>
        </Router>
      );
    }
  };
  return (
    <>
      {hola}
      <div className='absolute bottom-0 right-0'>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </>
  );
}