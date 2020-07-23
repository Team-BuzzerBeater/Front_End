import React, {Component} from 'react';
import './App.css';
import Drops from './dropdown';
import Textbar from './textbar';
import Sketch from './sketch';

class App extends Component {
  
  render(){
    return (
      <div className="app">
        <div className="left">
          <Drops/>
          <Sketch/>
          <Textbar/>
        </div>
        <div className="right">
          <div className="profile" />
          <div className="opposite" />
          <div className="homeaway" />
        </div>
      </div>
    );
  }
}

export default App;