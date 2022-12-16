import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About'
import Doggy from './components/Doggy'
import React, { useState } from 'react';
import useLocalStorage from 'use-local-storage';

function App() {
  
  // const [mode, setMode] = useState ('white');

  // const toggleMode = () =>{
    //if (mode === 'white'){
      //setMode('black');
      //document.body.style.backgroundColor='rgb(30 41 59)'
    //}
    //else {
      //setMode('white');
      //document.body.style.backgroundColor='rgb(226 232 240)'
    //}
  //}

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const toggleMode = () =>{
    const newTheme = theme === 'light'?'dark': 'light';
    setTheme(newTheme);
  }
  
  return (
    <div className="app bg-gradient-to-r from-rose-100 to-teal-100" data-theme={theme}>
      <Navbar toggleMode={toggleMode} />
      <div className="container my-3">
       <TextForm/>
      </div>
      <div className="container my-3"><About/></div>
      <Doggy></Doggy>
      <div className="container my-4"><About/></div>

    </div>
  );
}

export default App;

