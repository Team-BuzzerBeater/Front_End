import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
class Drops extends Component{
    constructor(props){
        super(props);
        this.state = {
            teamData: [{
                "teamIdx" : 0,
                "teamName" : "Hello world",
            }],
            playerData: [{
                "teamIdx" : 0,
                "playerIdx": 1,
                "playerName" : "Hello",
            },{
                "teamIdx" : 0,
                "playerIdx": 2,
                "playerName" : "World",
            }],
            selectTeam: 0,
        };

        this.handleChange = this.handleChange.bind(this);
    }
    
    loadingData = async () => {
        try {
            const responseTeam = await axios.get(
                'http://52.78.191.139:3000/printXg/teamList'
            );
            const responsePlayer = await axios.get(
                'http://52.78.191.139:3000/printXg/playerList'
            );
            console.log(responseTeam.data.statusCode);
            this.setState({
                ...this.state,
                teamData: responseTeam.data.data,
            });
            console.log(responseTeam.data.statusCode);
            this.setState({
                ...this.state,
                playerData: responsePlayer.data.data,
            });
        } catch(e){
            console.log(e);
        }
    };

    componentDidMount(){
        const { loadingData } = this;
        loadingData();
    }

    handleChange(event){
        if (event.target.name == "Team"){
            this.setState({
                ...this.state,
                selectTeam: event.target.value,
            });
        }
        else {
            this.props.onChange(event.target);
        }
    }
          
    render(){
        const { selectTeam, teamData, playerData } = this.state;
        const teamlist = teamData.map(
            (team) => (
                <option value = {team["teamIdx"]}>{team["teamName"]}</option>
            )
        )
        const playerlist = playerData.filter(
            (player) => (
                player.teamIdx == selectTeam
            )
        ).map(
            (player) => (
                <option value= {player["playerIdx"]}>{player["playerName"]}</option>
            )
        )
        return (
            <form>
                <select name="Team" value={this.state.value} onChange={this.handleChange}>
                    <option defaultValue= '0'>Please Select Team</option>
                    {teamlist}
                </select>
            
                <select name="Player" value={this.state.value} onChange={this.handleChange}>
                    <option value= '0'>Please Select Player</option>
                    {playerlist}
                </select>

                <select name="Graph" value={this.state.value} onChange={this.handleChange}>
                    <option value= '0'>Position Graph</option>
                    <option value= '1'>Round Graph</option>
                    <option value= '2'>Against Graph</option>
                    <option value= '3'>Profile</option>
                </select>
            </form>
        );
    }
}

export default Drops;