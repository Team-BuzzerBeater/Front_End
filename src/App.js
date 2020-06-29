import React, {Component} from 'react';
import './App.css';
import Drops from './dropdown';
import Sidebar from './sidebar';
import Sketch from './sketch';
import axios from 'axios';

class App extends Component {
  state = {
    statusCode: 0,
    data: ['fail'],
  };

  loadingData = async () => {
    try {
      console.log('hello');
      const response = await axios.get(
        'http://13.125.255.87:3000/printXg/teamList'
      );
      this.setState({
        statusCode: response.data.statusCode,
        data: response.data.data,
      });
    } catch(e){
      console.log(e);
    }
  };

  componentDidMount(){
    const { loadingData } = this;
    loadingData();
  }
  render(){
    const { data } = this.state;
    const teamlist = data.map(
      (team) => (
        <li key = {team["teamIdx"]}>{team["teamName"]}</li>
      )
    );
    return (
      <div className="app">
        <Sidebar />
        <div className='contentblock'>
          <Drops name = "drops" />
          <Sketch name = "sketch" />
          <div className="textbox" />
        </div>
      </div>
    );
  }
}

export default App;