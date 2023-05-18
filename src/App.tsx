import React from 'react';
import './App.css';
/*import { Button } from '@mantine/core';*/
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom" 
import Login from './components/Login';
import Home from './components/Home';
import ParticipantHome from './components/ParticipantHome';
import Participant_EventSearch from './components/Participant_EventSearch';

function App() {
  return (
      <Router>         
        <div className="App">      

          <Routes>
            <Route path="/" element={<Login />} />    /* Root is Login page */
            <Route path="/home" element={<Home />} />
            <Route path="/home/participantHome" element={<ParticipantHome />} />
            <Route path="/home/participantHome/EventSearch" element={<Participant_EventSearch />} />
          </Routes>
        </div>     
      </Router>   
  );
}


export default App;
