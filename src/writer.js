import React, {Component, createElement} from 'react';
import './App.css';

class Writer extends Component{
  render(){
    return (
        <div>
            <div className = "wnotation">Write Input Data</div>
            <div className = "wnotation">Shoot Time</div>
            <div className = "wnotation">Shoot Location</div>
            <div className = "wnotation">Goal</div>
            <input className = "writebox"/>
            <input className = "writebox"/>
            <input className = "writebox"/>
            <button>+</button>
        </div>
        
    )
  }
}


export default Writer;