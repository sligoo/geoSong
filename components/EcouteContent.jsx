import React from 'react';
import {Grid,Row, Col} from 'react-bootstrap';

class EcouteContent extends React.Component {
    render() {
        return (
            <Grid className="content-grid" >
                <Row className="content-row">
                    <Col xs={12} sm={6} className="content-col map" />
                    <Col xs={12} sm={6} className="content-col card"/>
                </Row>
                <Row className="content-row">
                    <Col xs={12} sm={6} className="content-col card"/>
                    <Col xs={12} sm={6} className="content-col card"/>
                </Row>
            </Grid>
        );
    }
}

export default EcouteContent;