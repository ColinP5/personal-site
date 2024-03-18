import React from 'react';
import { ReactDOM } from 'react';
import { SocialIcon } from 'react-social-icons';
import logo from './logo.svg';
import Headshot from './Images/ProfessionalHeadshot.jpg'
import Musashi from './Images/Musashi-StarBoy.jpg'
import './App.css';
import {CircleImage} from './Components/CircleImage';
import {CircleImage2} from './Components/CircleImage2';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <header className="App-header2" id='Home'>
        <CircleImage imageUrl={Headshot}/>
      <body className="App-body2">Colin Parsons</body>
      <body className="App-body3">Student Computing Consultant @ University of Delaware</body>
      </header>
      <h2 className="App-header3" id="aboutme">
        <div style={{position: 'absolute', top: '900px', left: '110px', color:'white'}}>Colin Parsons</div>
        <div style={{position: 'absolute', top: '900px', left: '400px', color:'white'}}>Expected 2026 Computer Science </div>
        <div style={{position: 'absolute', top: '950px', left: '400px', color:'white'}}>
          <p className="App-AboutBody">
            I'm an undergraduate of University of Delaware's Class of 2026.
            <br></br>
            I am currently considering concentrations in Web Development and CyberSecurity.
          </p>
        </div>
        <div style={{position: 'absolute', top: '950px', left: '100px'}}><CircleImage2 imageUrl={Musashi}/></div>
      </h2>
    </div>
    <div className="App">
      <header className='App-Contact' id="Contact">
        <SocialIcon className='App-Icon' url='https://www.linkedin.com/in/colin-parsons5' />
        <SocialIcon className='App-Icon' url='https://www.facebook.com/colin.parsons.1088/'/>
        <SocialIcon className='App-Icon' url='https://github.com/ColinP5' />
        <a className="App-Email" href="mailto:colinparsons34@gmail.com">Email Me</a>
      </header>
    </div>
    <div>
      <footer className='Footer' id='Footer'>
      </footer>
    </div>
    </>
  );
}

export default App;
