import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About'
import React, { useState } from 'react';

function App() {
  
  const [mode, setMode] = useState ('white');

  const toggleMode = () =>{
    if (mode === 'white'){
      setMode('black');
      document.body.style.backgroundColor='rgb(30 41 59)'
    }
    else {
      setMode('white');
      document.body.style.backgroundColor='rgb(226 232 240)'
    }
  }
  
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
       <TextForm/>
      </div>
      <div className="container my-3"><About/></div>

    </>
  );
}

export default App;

