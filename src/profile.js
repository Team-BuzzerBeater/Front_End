import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            teamData: [{
                "teamIdx" : 3,
                "teamName" : "Hello world",
            }],
            data: [{
                "playerName": "김민준",
                "goals": 10,
                "teamIdx": 0,
                "height": 196,
                "weight": 60,
                "birth": "1996-01-12",
            },],
        };
    }

    componentDidMount() {
    this.loadingData(this.props.playerIdx);
    }

    componentDidUpdate(oldProps) {
        if (oldProps.playerIdx !== this.props.playerIdx) {
        this.loadingData(this.props.playerIdx);
        }
    }

    loadingData = async (idx) => {
        try {
            if (idx !== '0' && idx !== 0){
                console.log("request sended idx" + idx);
                const response = await axios.get(
                'http://52.78.191.139:3000/printXg/profile/' + idx
                );
                this.setState({
                    ...this.state,
                    data: response.data.data,
                });
                const responseTeam = await axios.get(
                    'http://52.78.191.139:3000/printXg/teamList'
                );
                this.setState({
                    ...this.state,
                    teamData: responseTeam.data.data,
                });
            }
        } catch(e){
            console.log(e);
        }
    };

    render(){
        let {teamData} = this.state;
        let {teamIdx} = this.state.data[0];
        let playerTeam = teamData.filter(
            (teams) => (
                teams.teamIdx == teamIdx
            )
        );
        console.log(teamIdx)
        console.log(playerTeam)
        return (
            <div id={"profile"+this.props.playerIdx} style={{ marginLeft: "15vw", marginRight: "15vw", marginTop:"2%", height: "87%"}}>
                <h1 style={{color: "white"}}>{this.state.data[0].playerName}</h1>
                <p style={{color: "white"}}>지난 시즌 득점 기록:{this.state.data[0].goals}</p>
                <p style={{color: "white"}}>키:{this.state.data[0].height}</p>
                <p style={{color: "white"}}>몸무게:{this.state.data[0].weight}</p>
                <p style={{color: "white"}}>생년월일:{this.state.data[0].birth}</p>
            </div>
        )
    }
}

export default Profile;