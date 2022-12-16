import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About'
import Doggy from './components/Doggy'
import React from 'react';
// import useLocalStorage from 'use-local-storage';
import {motion} from 'framer-motion';

function App() {
  return (
    <motion.div initial={{scale: 0}} animate={{scale: 1}} className="app bg-gradient-to-r from-rose-100 to-teal-100">
      <Navbar />
      <div className="container my-3">
       <TextForm/>
      </div>
      <div className="container my-3"><About/></div>
      <Doggy></Doggy>

    </motion.div>
  );
}

export default App;

