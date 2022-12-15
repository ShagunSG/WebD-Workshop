import React, {useState} from 'react'

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
  const handleOnChange = (event) =>{
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  // text=Hello!;-- Wrong way to change the vale of the state.
  // setText("Hello!"); -- Correct way to change the state.
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="textBox" rows="8"></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={UpperCase}>Convert to UpperCase.</button>
        <button className="btn btn-success mx-2" onClick={LowerCase}>Convert to LowerCase.</button>
    </div>
    <div className="container my-2">
      <h1>Your text summary.</h1>
      <p>{text.split(" ").length} words and {text.length} characters.</p>
      <p>{0.008*text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
