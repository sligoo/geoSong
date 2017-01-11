import React from 'react';
import {Grid,Row, Col} from 'react-bootstrap';

const gridInstance = (
    <Grid className="content-grid" style={{border: '1px solid blue'}}>
        <Row className="content-row">
            <Col xs={12} sm={6} className="content-col" style={{border: '1px solid red'}}/>
            <Col xs={12} sm={6} className="content-col" style={{border: '1px solid red'}}/>
        </Row>
        <Row className="content-row">
            <Col xs={12} sm={6} className="content-col" style={{border: '1px solid red'}}/>
            <Col xs={12} sm={6} className="content-col" style={{border: '1px solid red'}}/>
        </Row>
    </Grid>
)

class EcouteContent extends React.Component {
    render() {
        return (
            {gridInstance}
        );
    }
}

export default EcouteContent;