import React, {Component} from 'react';
import './App.css';

class GraphBox extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        this.props.onChange(event.target.value);
        console.log(event.target.value);
    }

    render(){
        return (
            <form>
                <select name="Graph" onChange={this.handleChange}>
                <option value= '0'>positional Graph</option>
                <option value= '1'>round Graph</option>
                <option value= '2'>opposite Graph</option>
                <option value= '3'>profile</option>
                </select>
            </form>
        );
    }
}

export default GraphBox;