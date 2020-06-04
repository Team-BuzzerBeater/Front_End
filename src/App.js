import React from 'react';
import './App.css';
import Drops from './dropdown';
import Sidebar from './sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className='contentblock'>
        <Drops name = "drops"/>
        <div className="sketch"></div>
        <div className="textbox"></div>
      </div>
    </div>
  );
}

export default App;
