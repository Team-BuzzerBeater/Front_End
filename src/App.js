import React, {Component} from 'react';
import './App.css';
import Drops from './dropdown';
import Textbar from './textbar';
import Sketch from './sketch';
import GraphBox from './graphbox';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      graphValue: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(value){
    this.setState({
      ...this.state,
      graphValue: value,
    });
    console.log(value);
  }

  render(){
    let graphs = null;
    let graphValue = this.state.graphValue;
    if (graphValue == 0){
      graphs = <Sketch/>
    }
    else if (graphValue == 1){
      graphs = <Textbar/>
    }
    return (
      <div className="app">
        <Drops/>
        <GraphBox onChange = {this.handleChange}/>
        {graphs}
      </div>
    );
  }
}

export default App;