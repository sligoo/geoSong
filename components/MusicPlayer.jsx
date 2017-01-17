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
        let controls;

        if (State.getConnected()) {
            controls = 'controls';
        } else {
            controls = '';
        }
        return(
            <div id="player">
                <audio controls={controls}>
                    <source src={this.state.url} type="audio/mp3"/>
                </audio>
            </div>
        );
    }
}


export default MusicPlayer;