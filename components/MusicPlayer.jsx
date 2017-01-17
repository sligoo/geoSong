import React from 'react';
import State from './State.jsx';

let songs = [
    {
        url: '/Music/BackInBlack.mp3',
        cover: 'path/to/jpeg',
        artist: {
            name: 'ACDC',
            song: 'BackInBlack'
        }
    },
    {
        url: 'https://www.youtube.com/watch?v=FGBhQbmPwH8',
        artist: {
            name: 'DaftPunk',
            song: 'One more Time'
        }
    }
];

export class MusicPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            url: ''
            }
        };


    selectMusic(id) {
        //MusicSuivante = songs[id].url
        this.setState({
            url: songs[id].url
        })
    }

    componentDidMount(){
        this.selectMusic(0)
    }




    render() {
        let player;

        if (State.getConnected()) {
            player = (
                <div id="player-on">
                    <audio controls>
                        <source src={this.state.url} type="audio/mp3"/>
                    </audio>
                </div>
            );
        } else {
            player = (
                <div id="player-off">
                    <center><p>Vous nêtes pas connecté</p></center>
                </div>
            );
        }
        return (
            player
        );
    }
}


export default MusicPlayer;