import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
class Drops extends Component{
    constructor(props){
        super(props);
        this.state = {
            statusCode: 0,
            teamData: ['fail'],
            playerData: ['fail'],
            selectTeam: 0,
        };

        this.handleChange = this.handleChange.bind(this);
    }
    
    loadingData = async () => {
        try {
            const responseTeam = await axios.get(
                'http://52.78.146.228:3000/printXg/teamList'
            );
            const responsePlayer = await axios.get(
                'http://52.78.146.228:3000/printXg/playerList'
            );
            this.setState({
                ...this.state,
                statusCode: responseTeam.data.statusCode,
                teamData: responseTeam.data.data,
            });
            console.log(responseTeam.data.statusCode);
            this.setState({
                ...this.state,
                statusCode: responsePlayer.data.statusCode,
                playerData: responsePlayer.data.data,
            });
            console.log(responseTeam.data.data);
            console.log(responsePlayer.data.statusCode);
            console.log(responsePlayer.data.data);
        } catch(e){
            console.log(e);
        }
    };

    componentDidMount(){
        const { loadingData } = this;
        loadingData();
    }

    handleChange(event){
        this.setState({
            ...this.state,
            selectTeam: event.target.value,
        });
        console.log(event.target.value);
    }
          
    render(){
        
        const { teamData } = this.state;
        const teamlist = teamData.map(
            (team) => (
                <option value = {team["teamIdx"]}>{team["teamName"]}</option>
            )
        );
        const { playerData } = this.state;
        
        let playerlist = playerData.map(
            (player) => (
                <option>{player["playerName"]}</option>
            )
        )
        return (
            <form className="dropdown">
                <select name="Team" value={this.state.value} onChange={this.handleChange}>
                    <option defaultValue= '100'>Please select team</option>
                    {teamlist}
                </select>
            
                <select name="Player">
                    <option value= '0'>Please select player</option>
                    {playerlist}
                </select>
            </form>
        );
    }
}

export default Drops;