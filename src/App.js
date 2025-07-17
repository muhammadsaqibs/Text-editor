//import logo from './logo.svg';

import './App.css';
import NAvbar from './components/Navbar.js';   //navbar 
import Form from './components/Form.js';     //for text box
import About from './components/About.js';   //for about
import { useState, useEffect } from "react";
import Alert from './components/Alert.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

 
function App() {

  //toggle mode change mode with switch
  const toggleMode=()=>{

    if (mode==='light'){
      setMode('dark');   //changing state of mode
       setText('Light Mode');   //changing state of text
       document.body.style.backgroundColor = '#6c757d';
       document.body.style.color='white';
       showAlert("dark mode is enabled","success");
    }
    else {
      setMode('light');
       setText('Dark Mode');           //changing state of text
       document.body.style.backgroundColor='white';
       document.body.style.color='black';
       showAlert("light mode is enabled","success");  
  }}
  //states used for text (mode,text)
const [mode,setMode]=useState('light');
const [text,setText]=useState('Dark Mode');
const [alert,setAlert]=useState(null);
//function to show alert
const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type:type
     })}
     setTimeout(() => {setAlert(null)}, 3000);


  return (
  <>
  



  {/* react routing   */}
<Router>
      <NAvbar title="textutils"  mode={mode}  toggle={toggleMode} text={text}  /> {/* Navbar her page pe dikhegi */}
      <Alert alert={alert} />
      <Routes>     {/* switch is exchange with routes in new version of react router */}
        <Route path="/" element={<Form />} />     {/* Default page  */}
        <Route path="/About" element={<About showAlert={showAlert}  />} />
        <Route path="/" element={<Form mode={mode}  />} />
      </Routes> 
    </Router>
  </>
  );
}

export default App;
