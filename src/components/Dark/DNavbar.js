import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {motion} from 'framer-motion';

export default function DNavbar(props) {

  const [ move1, setMove1 ] = useState(false);
  const [ move2, setMove2 ] = useState(false);
  const [ move3, setMove3 ] = useState(false);

  return (

    <>

      <div className='w-full h-24 flex flex-row shadow-lg border-b-1 border-black justify-left items-center bg-gradient-to-r from-gray-900 to-gray-600 bg-gradient-to-r'> 
        <motion.div className='mx-8' animate={{y: move1? -3: 0}} onHoverStart={()=> {setMove1(!move1)}} onHoverEnd={()=> {setMove1(!move1)}}><h1 className='uppercase text-xl font-bold'><a href="/WebD-Workshop"><span className='text-white'>techfest-workshop</span></a></h1></motion.div>
        <motion.div className='mx-8 text-white' animate={{y: move2? -3: 0}} onHoverStart={()=> {setMove2(!move2)}} onHoverEnd={()=> {setMove2(!move2)}}><h1 className='uppercase text-lg'>home </h1></motion.div>
        <motion.div className='mx-8' animate={{y: move3? -3: 0}} onHoverStart={()=> {setMove3(!move3)}} onHoverEnd={()=> {setMove3(!move3)}}><h1 className='uppercase text-lg '><a href="/about" className='text-white'>about</a></h1></motion.div>
        <div className=''></div>
      </div>
    </>
  )
}
// To ensure that only a certain type of prop is passed through something.
DNavbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}

// Default prop type ensures that something is displayed on your site even if you forget to pass a value to your variable.
DNavbar.defaultProps = {
  title: "Techfest",
  aboutText: "About",
};