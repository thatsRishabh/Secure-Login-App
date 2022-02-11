
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// it was giving error so uninstalled router and installed 5.2 version

function App() {
  const [mode, setMode]= useState('light')
  const [alert, setAlert]=useState(null)

  // creating alert function
  const showAlert=(message, type)=> {
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }
  {/* //below codes are for adding color pallets as explained in lecture 20
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success') 
  }
  const toggleMode = (cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled", "success")
    }
    */}
  const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled", "success");
      }   
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      //above is CSS code not bootstrap, so we are terming it as white(not light)
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      <Router>
      <Navbar title1="Text Tool" mode1={mode} toggleMode1={toggleMode} />
      <Alert alert1={alert} />       {/* putting alert component below our navbar */}
      <div className='container my-3' >
      <Switch>
          <Route path="/about">
            <About mode1={mode} />
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the text you want to analyze" mode1={mode}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
