import React, {PropTypes, Component} from 'react';
import {render} from 'react-dom';
import {Grid, Row, Col} from "react-bootstrap";

import Map from "./map.jsx";
import MyNavbar from "./MyNavbar.jsx";

class App extends React.Component {


    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <MyNavbar/>
                </Row>
                <Row className="show-grid">
                    <Col xs={12} md={8} > <Map/> </Col>
                    <Col xs={6} md={4} > Player </Col>
                </Row>
            </Grid>

        );
    }
}

render(<App/>, document.getElementById('app'));