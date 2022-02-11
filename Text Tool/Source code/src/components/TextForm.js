import React, {useState} from 'react';

export default function TextForm(props){
  const handleUpClick =()=>{
    //   console.log("UpperCase was clicked" +text);
      let newText= text.toUpperCase();
      setText(newText)
      props.showAlert('converted to upper case', 'success')
  }  
  const handleLoClick =()=>{
    //   console.log("UpperCase was clicked" +text);
      let newText= text.toLowerCase();
      setText(newText)
      props.showAlert('converted to Lower case', 'success')
  } 
  const handleCopy =()=>{
     navigator.clipboard.writeText(text);
  }  
  const handleExtraSpaces =()=>{
    //   console.log("UpperCase was clicked" +text);
      let newText= text.split(/[ ]+/);
      setText(newText.join(" "))
  } 
  const handleOnChange =(event)=>{
    //   console.log("on Change");
      setText(event.target.value)
      // The above function updates the value of text box area. Without it we will not be able to write in text area
  }
  const [text, setText]= useState("");
  return(
    <>  {/*if we dont use this, it will not allow us to create multiple div classes  */}
    <div className='container' style={{color: props.mode1==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode1==='dark'?'grey':'white', color: props.mode1==='dark'?'white':'black'}} id="myBox" rows="5"></textarea>
    <button disabled={text.length===0} className='btn btn-primary my-2' onClick={handleUpClick}>Convert to Upper Case</button>
    <button disabled={text.length===0} className='btn btn-primary my-2 mx-1' onClick={handleLoClick}>Convert to Lower Case</button>
    <button disabled={text.length===0} className='btn btn-primary' onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    </div>

    <div className='container my-3' style={{color: props.mode1==='dark'?'white':'black'}}>
      <h2>Your Text summary</h2>
      {/* below filter funtion will only return whose length is not zero. Split will split with respect to space and new line*/}
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>You can reading it in {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes </p>
      <h3> Preview</h3>
      <p>{text.length>0?text:"Enter the text to preview it"}</p>
      {/* have use ternary operator above which means if someting is written show same text else show enter the text */}
    </div>
    </>
  ) 
}
