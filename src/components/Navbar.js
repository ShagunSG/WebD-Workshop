import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../App.css'
import {motion} from 'framer-motion';
// import { Link } from 'react-router-dom;

export default function Navbar(props) {

  const [ move1, setMove1 ] = useState(false);
  const [ move2, setMove2 ] = useState(false);
  const [ move3, setMove3 ] = useState(false);

  return (

    <>
      <div className='w-full h-24 flex flex-row shadow-lg border-b-1 border-black justify-left items-center bg-gradient-to-r from-rose-100 to-teal-100'> 
        <motion.div className='mx-8' animate={{y: move1? -10: 0}} onHoverStart={()=> {setMove1(!move1)}} onHoverEnd={()=> {setMove1(!move1)}}><h1 className='uppercase text-xl font-bold'>techfest-workshop</h1></motion.div>
        <motion.div className='mx-8' animate={{y: move2? -10: 0}} onHoverStart={()=> {setMove2(!move2)}} onHoverEnd={()=> {setMove2(!move2)}}><h1 className='uppercase text-lg'>home </h1></motion.div>
        <motion.div className='mx-8' animate={{y: move3? -10: 0}} onHoverStart={()=> {setMove3(!move3)}} onHoverEnd={()=> {setMove3(!move3)}}><h1 className='uppercase text-lg '>about</h1></motion.div>
        <div className=''></div>
        <div className="form-check form-switch">
        <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" 
        onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label inline-block text-gray-800" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
      </div>
    </>
  )
}
// To ensure that only a certain type of prop is passed through something.
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}

// Default prop type ensures that something is displayed on your site even if you forget to pass a value to your variable.
Navbar.defaultProps = {
  title: "Techfest",
  aboutText: "About",
};