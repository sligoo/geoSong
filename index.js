import React, {PropTypes, Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import MyNavbar from "./components/MyNavbar.jsx";
import Home from "./components/Home.jsx";
import Connect from "./components/Connect.jsx";
import Signup from "./components/Signup.jsx";

class App extends React.Component {
    render() {
        return (
            <div>
                <div id="header">
                    <MyNavbar/>
                </div>
                <div id="contenu">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

render(<Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route name ="signup" path="signup" component={Signup} />
        <Route name ="login" path="login" component={Connect} />
    </Route>
</Router>, document.getElementById('app'));