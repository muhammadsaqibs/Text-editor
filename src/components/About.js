import { useState, useEffect } from "react";


export default function About(props) {
  useEffect(() => {
    props.showAlert("Welcome to About Page", "success");
  }, []);
  //style states
  const toggleStyle=()=>{
     if(myStyle.color==='white'){
      setmyStyle({
          backgroundColor:'white',
          color:'black'
      })
      setWord("enable dark mode");
     }
     else if(myStyle.color==='black'){
      setmyStyle({
          backgroundColor:'black',
          color:'white'
      })
       setWord("disable dark mode");
     }
  }
  const [myStyle,setmyStyle]=useState({
    backgroundColor:'black',
    color:'white'})
    //text states
    const [word,setWord]=useState("disable dark mode");
  return (<div className="accordion accordion-flush" style={myStyle}  id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <h1>About</h1>
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Free To Use
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> This app is 
completely free to use. There are no hidden charges, subscriptions, or advertisements. It is built to give users quick access to useful text tools without any hassle. You can use it as much as you like, anytime, anywhere.</div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Why to use
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">It saves time and effort when dealing with raw or unformatted text. It is especially useful for students, writers, and professionals who regularly need to clean up, analyze, or prepare written content. No downloads, no logins — just open and use.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Who can use
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">TextUtils is useful for everyone who works with text — whether you're a student preparing assignments, a teacher reviewing content, a professional writing reports, or anyone who wants to format and clean up text quickly. It’s designed to be simple, fast, and accessible for users of all levels.</div>
    </div>
  </div>
  <button type="button" className="btn btn-primary" onClick={toggleStyle} > {word}</button>

</div>
  );
}
   