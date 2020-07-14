import React, {Component, createElement} from 'react';
import './App.css';

class Sidebar extends Component{
  render(){
    return (
      <div className="sidebar">
        <ul>
          <li>page 1</li>
          <li>page 2</li>
        </ul>
      </div>
    )
  }
}


export default Sidebar;