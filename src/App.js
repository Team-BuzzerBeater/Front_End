import React from 'react';
import './App.css';

function drawCircle(){

}

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <ul>
          <li>page 1</li>
          <li>page 2</li>
        </ul>
      </div>

      <div className='contentblock'>
        <div className="dropdown">
          <select name="Team">
            <option value= '0' selected>Please select team</option>
            <option value='1'>전북 현대 모터스</option>
            <option value='2'>울산 현대 호랑이</option>
          </select>
          
          <select name="Player">
            <option value= '0' selected>Please select player</option>
            <option value='1'>멋장이 김민준</option>
            <option value='2'>미래의 주커버그</option>
          </select>
        </div>
        <div className="sketch"></div>
        <div className="textbox"></div>
      </div>
    </div>
  );
}

export default App;
