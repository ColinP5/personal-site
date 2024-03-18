import React from 'react';
import logo from './logo.svg';
import Musashi from './Images/Musashi-StarBoy.jpg'
import Headshot from './Images/ProfessionalHeadshot.jpg'
import './App.css';
import {CircleImage} from './Components/CircleImage';
import Navbar from './Components/Navbar';

//<img src={Musashi} className="App-logo" alt="logo" />

function App() {
  return (
    <><div className="App">
        <Navbar />
        <header className="App-header2" id='Home'>
          <CircleImage imageUrl={Headshot}/>
          <h3></h3>
          <body className="App-body2">Colin Parsons</body>
        </header>
    </div><div className="App">
        <header className="App-header" id="ReactLogo">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div></>
  );
}

export default App;
