import React, {useState} from 'react';
import {motion} from 'framer-motion'; 

export default function TextForm(props) {
  const UpperCase = () =>{
    // console.log("Uppercase was clicked")
    let newText= text.toUpperCase();
    setText(newText)
  }

  const LowerCase = () =>{
    // console.log("Uppercase was clicked")
    let newText= text.toLowerCase();
    setText(newText)
  }

  const clearText = () =>{
    setText("")
  }

  const copyText = () =>{
    var text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleOnChange = (event) =>{
    setText(event.target.value)
  }

  const handleExtraSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const [text, setText] = useState('');
  // text=Hello!;-- Wrong way to change the vale of the state.
  // setText("Hello!"); -- Correct way to change the state.
  return (
    <>
    <div className="container text-xl">
        <h1><strong>Enter the text to analyze.</strong></h1>
        <div className="mb-3">
        <textarea className="form-control caret-pink-500 focus:border-pink-500 focus:outline-0 focus:ring focus:ring-pink-500" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='black'?'black':'light'}} id="textBox" rows="8"></textarea>
        </div>
        <motion.button className="btn mx-2" onClick={UpperCase} whileHover={{ scale: 1.2 }}
        style={{backgroundColor: '#7C8EDF'}}>Upper Case</motion.button>
        <motion.button className="btn mx-2" onClick={LowerCase} whileHover={{ scale: 1.2 }}
        style={{backgroundColor: '#7C8EDF'}}>Lower Case</motion.button>
        <motion.button className="btn mx-2" onClick={clearText} whileHover={{ scale: 1.2 }}
        style={{backgroundColor: '#7C8EDF'}}>Clear Text</motion.button>
        <motion.button className="btn mx-2" onClick={copyText} whileHover={{ scale: 1.2 }}
        style={{backgroundColor: '#7C8EDF'}}>Copy Text</motion.button>
        <motion.button className="btn mx-2" onClick={handleExtraSpace} whileHover={{ scale: 1.15 }}
        style={{backgroundColor: '#7C8EDF'}}>Remove Extra Space</motion.button>
    </div>
    <div className="container my-2">
      <h1>Your text summary.</h1>
      <p>{text.split(" ").length-1} words and {text.length} characters.</p>
      <p>{0.33*text.split(" ").length-0.33} Seconds to read 
      (given that average reading time is about 180 wpm or 3 wps)</p>
      <p><h2 className='my-2 text-lg'><b>Preview</b></h2></p>
      <p>{text}</p>
    </div>
    </>
  )
}
