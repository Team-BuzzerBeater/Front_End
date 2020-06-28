import React from 'react';
import './App.css';
import Drops from './dropdown';
import Sidebar from './sidebar';
import Sketch from './sketch';

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className='contentblock'>
        <Drops name = "drops"/>
        <Sketch name = "sketch"/>
        <div className="textbox"></div>
      </div>
    </div>
  );
}

export default App;