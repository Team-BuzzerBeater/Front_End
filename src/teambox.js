import React, {Component} from 'react';
import './App.css';

const player = new Array();
player[0] = new Array('삼도수군통제사 김민준', '리어카 부수는 김민준', '광기의 김민준', '떡잎마을 방범대 김민준');
player[1] = new Array('미래의 주커버그', '효자 김민준', '타임즈가 주목하는 김민준', '차은우 박보검 김민준');
class Teambox extends Component{
    state = {
        team: 0
    }
    render(){
        return (
            <div className="dropdown">
                <select name="Player">
                    for(let i = 0; i< player.length; i++){
                        
                    }
                </select>
            </div>
        );
    }
}

export default Teambox;