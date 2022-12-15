import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
  <>
    <nav className={`
    relative
    w-full
    flex flex-wrap
    items-center
    justify-between
    py-4
    bg-${props.mode}
    text-${props.mode==='white'?'black':'light'}
    hover:text-gray-700
    focus:text-gray-700
    shadow-lg
    navbar navbar-expand-lg navbar-light
    `}>
    <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
    <button className={`
        navbar-toggler
        text-${props.mode==='white'?'black':'light'}
        border-0
        hover:shadow-none hover:no-underline
        py-2
        px-2.5
        bg-transparent
        focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
      `} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
      className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path fill="currentColor"
        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
      </path>
    </svg>
    </button>
    <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
    <a className={`text-xl text-${props.mode==='white'?'black':'light'}`} href="/"><b>{props.title}</b></a>
    <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
      <li className="nav-item px-4">
        <a className={`nav-link active text-${props.mode==='white'?'black':'light'}`} aria-current="page" href="/">Home</a>
      </li>
      <li className="nav-item pr-2 px-2">
        <a className={`nav-link active text-${props.mode==='white'?'black':'light'}`} aria-current="page" href="/">{props.aboutText}</a>
      </li>
      <li className="nav-item pr-2 px-3">
        <a className={`nav-link active text-${props.mode==='white'?'black':'light'}`} aria-current="page" href="/">Pricing</a>
      </li>
    </ul>
    <div className="flex items-center relative">
    <div className="flex justify-center">
      <div className="form-check form-switch">
        <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" 
        onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className={`form-check-label inline-block text-${props.mode==='white'?'black':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
      </div>
    </div>
    </div>
    </div>
  </nav>
</>
  )
}
// To ensure that only a certain type of prop is passed through something.
Navbar.propTypes= {
  title: PropTypes.string,
  aboutText: PropTypes.string
}

// Default prop type ensures that something is displayed on your site even if you forget to pass a value to your variable.
Navbar.defaultProps = {
  title: "Techfest",
  aboutText: "About",
};