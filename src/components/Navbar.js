import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'

export default function Navbar(props) {
  return (
    <>
      <div className='w-full h-24 flex flex-row shadow-lg border-b-1 border-black justify-left items-center bg-gradient-to-r from-rose-100 to-teal-100'> 
        <div className='mx-8'><h1 className='uppercase text-xl font-bold'>techfest-workshop</h1></div>
        <div className='mx-8'><h1 className='uppercase text-lg'>home</h1></div>
        <div className='mx-8'><h1 className='uppercase text-lg '>about</h1></div>
        <div className=''></div>

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