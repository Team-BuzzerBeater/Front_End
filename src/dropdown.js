import React, {Component} from 'react';
import './App.css';
class Drops extends Component{
    state = {
        teams : ['전북 현대 모터스', '울산 현대 호랑이', '포항 스틸러스'],
        players: [['Please select player'],['이동국','이승기','조규성'],['주니오','김보경','김인성'],['일류첸코','팔로세비치']]
    }      
    render(){
        const { teams }  = this.state;
        const teamlist = teams.map(
            (team, i) => (
                <option value={i + 1}>{team}</option>
            )
        );
        const { players } = this.state;
        const playerlist = players[0].map(
            (player, i) => (
                <option value ={i}>{player}</option>
            )
        );
        return (
            <div className="dropdown">
                <select name="Team">
                    <option value= '0' selected>Please select team</option>
                    {teamlist}
                </select>
            
                <select name="Player">
                    {playerlist}
                </select>
            </div>
        );
    }
}

export default Drops;