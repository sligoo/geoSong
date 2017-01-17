import React from 'react';
import {Grid,Row, Col} from 'react-bootstrap';
import MusicPlayer from './MusicPlayer.jsx';

class EcouteContent extends React.Component {
    render() {
        return (
            <Grid className="content-grid" >
                <Row className="content-row">
                    <Col><MusicPlayer/></Col>
                </Row>
                <Row className="content-row">
                    <Col />
                </Row>
            </Grid>
        );
    }
}

export default EcouteContent;