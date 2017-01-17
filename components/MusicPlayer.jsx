import React from 'react';
import State from './State.jsx';

export class MusicPlayer extends React.Component {
    render() {
        let controls;

        if (State.getConnected()) {
            controls = 'controls';
        } else {
            controls = '';
        }
        return(
            <div id="player">
                <Details />
                <audio controls={controls}>
                    <source src="/Music/Harder.mp3" type="audio/mp3"/>
                </audio>
            </div>
        );
    }
}

class Details extends React.Component {
    render() {
        return (
            <div id="details">
                <p>{this.props.artiste}</p>
                <p>{this.props.titre}</p>
                <p>{this.props.album}</p>
            </div>
        )
    }
}

export default MusicPlayer;