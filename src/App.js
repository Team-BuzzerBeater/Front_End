import React, {Component} from 'react';
import './App.css';
import Drops from './dropdown';
import Textbar from './textbar';
import Sketch from './sketch';
import Versus from './versus';
import axios from 'axios';
import Profile from './profile';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Graph: 0,
      Player: 0,
      data: [{
        "positionX": Math.random() * 100,
        "positionY": Math.random() * 100,
        "xG": Math.random(),
        "result": Math.random()<0.3?1:0,
        "round": 1,
      },{
        "positionX": Math.random() * 100,
        "positionY": Math.random() * 100,
        "xG": Math.random(),
        "result": Math.random()<0.3?1:0,
        "round": 1,
      }],
    };

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(target){
    const { loadingData } = this;
    const { name, value } = target;
    if( name === "Graph"){
      this.setState({
        ...this.state,
        Graph: value,
      });
    }
    if( name === "Player"){
      loadingData(value);
    }
  }

  loadingData = async (idx) => {
    try {
      if (idx !== '0' && idx !== 0){
        console.log("request sended idx" + idx);
        const response = await axios.get(
          'http://52.78.191.139:3000/printXg/shooting/' + idx
        );
        this.setState({
          ...this.state,
          Player: idx,
          data: response.data.data,
        });
        console.log(response.data.data);
      }
    } catch(e){
        console.log(e);
    }
  };

  render(){
    let graphs = null;
    let {Graph} = this.state;
    if (Graph == 0){
      graphs = <Profile playerIdx = {this.state.Player}/>
    }
    else if (Graph == 1){
      graphs = <Sketch playerIdx = {this.state.Player} data = {this.state.data}/>
    }
    else if (Graph == 2){
      graphs = <Textbar playerIdx = {this.state.Player} data = {this.state.data}/>
    }
    else if (Graph == 3){
      graphs = <Versus playerIdx = {this.state.Player} data = {this.state.data}/>
    }
    return (
      <div className="app">
        <Drops className = "dropdown" onChange = {this.handleChange}/>
        {graphs}
      </div>
    );
  }
}

export default App;