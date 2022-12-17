import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function DTextForm(props) {
    const [text, setText] = useState('');
    const UpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const LowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const clearText = () => {
        setText("")
    }

    const copyText = () => {
        var text = document.getElementById("textBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }


    return (
        <>
            <div className="container text-xl">
                <h1 className='text-white'><strong>Enter the text to analyze.</strong></h1>
                <div className="mb-3">
                    <textarea className="form-control caret-[#fb9DE2] focus:border-[#fb9DE2] focus:outline-0 focus:ring focus:ring-[#fb9DE2] bg-gray-700 focus:bg-gray-700 text-white" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'black' ? 'black' : 'light' }} id="textBox" rows="8"></textarea>
                </div>
                <motion.button className="btn mx-2" onClick={UpperCase} whileHover={{ scale: 1.2 }}
                    style={{ backgroundColor: '#F3CCFF' }}>Upper Case</motion.button>
                <motion.button className="btn mx-2" onClick={LowerCase} whileHover={{ scale: 1.2 }}
                    style={{ backgroundColor: '#F3CCFF' }}>Lower Case</motion.button>
                <motion.button className="btn mx-2" onClick={clearText} whileHover={{ scale: 1.2 }}
                    style={{ backgroundColor: '#F3CCFF' }}>Clear Text</motion.button>
                <motion.button className="btn mx-2" onClick={copyText} whileHover={{ scale: 1.2 }}
                    style={{ backgroundColor: '#F3CCFF' }}>Copy Text</motion.button>
                <motion.button className="btn mx-2" onClick={handleExtraSpace} whileHover={{ scale: 1.15 }}
                    style={{ backgroundColor: '#F3CCFF' }}>Remove Extra Space</motion.button>
            </div>
            <div className="container my-2 text-white">
                <h1>Your text summary.</h1>
                <p>{text.split(" ").length - 1} words and {text.length} characters.</p>
                <p>{0.33 * text.split(" ").length - 0.33} Seconds to read
                    (given that average reading time is about 180 wpm or 3 wps)</p>
                <p><h2 className='my-2 text-lg'><b>Preview</b></h2></p>
                <p>{text}</p>
            </div>
        </>
    )
}
