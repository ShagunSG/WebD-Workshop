import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About'
import React, { useState } from 'react';

function App() {
  
  const [mode, setMode] = useState ('white');

  const toggleMode = () =>{
    if (mode === 'white'){
      setMode('black')
    }
    else {
      setMode('white')
    }
  }
  
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
       <TextForm heading="Enter the text to analyze."/>
      </div>
      <div className="container my-3"><About/></div>

    </>
  );
}

export default App;
