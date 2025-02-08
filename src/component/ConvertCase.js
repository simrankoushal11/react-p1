import React, { useState } from 'react'

export default function ConvertCase(props) {

  
  const handleOnChange = (event) => {
    setText(event.target.value)
  
  };
   
    
  const handleUpperCase = (event) => {
    var UpperCase = text.toUpperCase();
    setText(UpperCase);
  };
  const handleLowerCase = (event) => {
    let LowerCase = text.toLowerCase();
    setText(LowerCase);
  };
  const handleCopyCase = (event) => {
   navigator.clipboard.writeText(text)
  };
  const handleSpaceRemove = (event) => {
    let spaceRemove = text.replace(/\s+/g, ' ').trim();
    setText(spaceRemove);
   };
   const handleClearCase = (event) => {
    setText("");
   };
 

  const [text, setText] = useState("");
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const charCount = text.length;
  const lineCount = text.split('\n').length;
  return (

    <div>
      <div className='my-5'>
        <h2 className='my-3'>{props.title}</h2>
        <div className='container'>
        <textarea className="form-control my-5" id="convertCaseBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        <div className='my-3'>
          <h5 className='my-3'>
          Total Word {wordCount} / Total Character  {charCount} / Totel Line {lineCount}.
          </h5>
          <button type="button" className="btn btn-info mx-3" onClick={handleUpperCase}>Convert Upper Case</button>
          <button type="button" className="btn btn-info mx-3" onClick={handleLowerCase}>Convert Lower Case</button>
          <button type="button" className="btn btn-info mx-3" onClick={handleSpaceRemove}>Remove Extra Space</button>
          <button type="button" className="btn btn-info mx-3" onClick={handleCopyCase}>Copy</button>
          <button type="button" className="btn btn-info mx-3" onClick={handleClearCase}>Clear</button>
        </div>
        </div>
        </div>
    </div>  
  )
}
