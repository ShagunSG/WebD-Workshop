import './App.css';
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import About from './components/About'

// import useLocalStorage from 'use-local-storage';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app bg-gradient-to-r from-rose-100 to-teal-100 overflow-x-hidden'>

          {/* // const [mode, setMode] = useState ('white');

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

            // const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            // const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

            // const toggleMode = () =>{
            //   const newTheme = theme === 'light'?'dark': 'light';
            //   setTheme(newTheme);
            // }

            // <motion.div initial={{scale: 0}} animate={{scale: 1}} className="app bg-gradient-to-r from-rose-100 to-teal-100" data-theme={theme}>
            //   <Navbar toggleMode={toggleMode} />
            //   <div className="container my-3">
            //    <TextForm/>
            //   </div>
            //   <div className="container my-3"><About/></div>
            //   <Doggy></Doggy>

            // </motion.div> */}
          <Routes>
            <Route path="/WebD-Workshop" element={<><Navbar /><LandingPage /></>} />
            <Route path="/about" element={<><Navbar /><About /></>} />
          </Routes>
        </div>

      </Router>
    );
  }

}
export default App;

