import React from 'react';
import {Grid,Row, Col} from 'react-bootstrap';

class EcouteContent extends React.Component {
    render() {
        return (
            <Grid className="content-grid" style={{border: '1px solid blue'}}>
                <Row className="content-row">
                    <Col xs={12} sm={6} className="content-col map" style={{border: '1px solid red'}} />
                    <Col xs={12} sm={6} className="content-col card" style={{border: '1px solid red'}}/>
                </Row>
                <Row className="content-row">
                    <Col xs={12} sm={6} className="content-col card" style={{border: '1px solid red'}}/>
                    <Col xs={12} sm={6} className="content-col card" style={{border: '1px solid red'}}/>
                </Row>
            </Grid>
        );
    }
}

export default EcouteContent;