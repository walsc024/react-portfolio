import React from 'react';
import './App.css';

import Header from './components/Header';
import Work from './components/work';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="App-header">
      <Header></Header>
      </div>
      <div className='work'>
        <Work></Work>
      </div>
  
    </div>
  );
}

export default App;