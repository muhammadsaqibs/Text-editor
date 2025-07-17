import { useState, useEffect } from "react";


export default function Form(props){
  
const copyText=()=>{
      let text=document.getElementById("box");
      text.select();
      navigator.clipboard.writeText(text.value)
    //  props.showAlert("text is copied to clipboard","success")
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[  ]+/);
    setText(newText.join(" "));
   // props.showAlert("Extra spaces are handeled","success")
  }
 const setclear=()=>{
      let finaltext='';
      setText(finaltext);
    //  props.showAlert("content is cleared","success")
  }
  const setUPPERCASE=()=>{
      let finaltext=text.toUpperCase();
      setText(finaltext);
   //   props.showAlert("content in uppercase","success")
      
  }
  const setlowercase=()=>{
      let finaltext=text.toLowerCase();
      setText(finaltext);
    
  }
  const changeText=(event)=>{
    setText(event.target.value);
  }
  const [text,setText]=useState("");

    return(
    <>
<div className="mb-3">
  <div className="container my-3">
  <label  className="form-label">Enter the Content here To Edit</label>
  <textarea className="form-control" id="box" value={text} onChange={changeText}  rows="12" style={{backgroundColor:props.mode==='light' ? 'white':'#0dcaf0',color:props.mode==='black;'?'white':'black'}}  ></textarea>
  <div className="container m-3">
  <button className="btn btn-primary m-1" onClick={setUPPERCASE}   >UPPERCASE</button>
  <button className="btn btn-primary m-1" onClick={setlowercase}   >lowercase</button>
  <button className="btn btn-primary m-1" onClick={setclear}   >CLEAR</button>
  <button className="btn btn-primary m-1" onClick={copyText}   >Copy</button>
  <button className="btn btn-primary m-1" onClick={handleExtraSpaces}   >remove extra spaces</button>

  </div>
  <h1>Text summary </h1>
  <p> there are {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
  <p>you need {0.008* text.split(" ").length} minutes to read this </p>
</div>

</div>

    </>
    );

}
