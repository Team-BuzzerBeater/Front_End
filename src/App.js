import React, {Component} from 'react';
import './App.css';
import Drops from './dropdown';
import Sidebar from './sidebar';
import Writer from './writer';

class App extends Component {
  
  render(){
    return (
      <div className="app">
        <Sidebar />
        <div className='contentblock'>
          <Drops name = "drops" />
          <Writer/>
          <div className="textbox" />
        </div>
      </div>
    );
  }
}

export default App;