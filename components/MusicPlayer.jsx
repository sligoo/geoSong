import React from 'react';
import State from './State.jsx';

export class MusicPlayer extends React.Component {
    render() {
        let player;

        if (State.getConnected()) {
            player = (
                <div id="player-on">
                    <Details />
                    <audio controls>
                        <source src="/Music/Harder.mp3" type="audio/mp3"/>
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