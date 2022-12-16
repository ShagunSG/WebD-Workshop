import Navbar from './Navbar'
import TextForm from './TextForm';
import React from 'react';
import useLocalStorage from 'use-local-storage';
import {motion} from 'framer-motion';

export default function LandingPage() {
  
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
        <motion.div initial={{scale: 0}} animate={{scale: 1}} data-theme={theme}>
          <div className="container my-3">
           <TextForm/>
          </div>
        </motion.div>
    );
}

  