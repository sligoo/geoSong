import React, {PropTypes, Component} from 'react';
import {render} from 'react-dom';

import MyNavbar from "./components/MyNavbar.jsx";
import EcouteContent from "./components/EcouteContent.jsx"

import Map from './components/map.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <div id="header">
                    <MyNavbar/>
                </div>
                <div id="map">
                    <Map />
                </div>
                <div id="content">
                    <EcouteContent className="top" />
                </div>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));