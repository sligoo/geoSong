/**
 * Created by sacha on 13/01/2017.
 */

import React, {PropTypes, Component} from 'react';
import EcouteContent from "./EcouteContent.jsx"

import Map from './map.jsx';

class Home extends React.Component {
    render() {
        return(
        <div>
            <div id="map">
                <Map />
            </div>
            <div>
                <EcouteContent className="top"/>
            </div>
        </div>
        );
    }
}

export default Home;