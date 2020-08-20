import React from 'react';
import './App.css';
import Objective from './objective';
import Summary from './summary';
import Experience from './expierience';
import Qualification from './qualification';
import Skills from './skills';
import Personal from './personal';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    
    <div className="App">
      
        <h1><u>Resume</u></h1>
        <h3 style={{color:"blue"}}>Keerthi</h3>
        <br/>
        <Objective/>
        <Summary/>
        <Experience/>
        <Qualification/>
        <Skills/>
        <Personal/>
        

      
     
    </div>
  );
}

export default App;
