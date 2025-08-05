//import logo from './logo.svg';
import './App.css';
import NAvbar from './components/Navbar.js';
import Form from './components/Form.js';
import About from './components/About.js';
import { useState } from "react";
import Alert from './components/Alert.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  // State declarations
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('Dark Mode');
  const [alert, setAlert] = useState(null);

  // Toggle dark/light mode
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setText('Light Mode');
      document.body.style.backgroundColor = '#6c757d';
      document.body.style.color = 'white';
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode('light');
      setText('Dark Mode');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode is enabled", "success");
    }
  };

  // Show alert for 3 seconds
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <>
      <Router>
        <NAvbar
          title="Text Editor"
          mode={mode}
          toggle={toggleMode}
          text={text}
        />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Form mode={mode} />} />
          <Route path="/About" element={<About showAlert={showAlert} mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
