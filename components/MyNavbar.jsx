/**
 * Created by rhiobet on 10/01/17.
 */

import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import State from './State.jsx';

class MyNavbar extends React.Component {
    render() {
        let username = localStorage.getItem('username');
        if (username != null && username != '') {
            State.setConnected(true);
            State.setUser(username);
        }

        let right;

        if (State.getConnected()) {
            localStorage.setItem('username', State.getUser());
            right = (
                <Nav pullRight>
                    <NavDropdown title={State.getUser()} id="user">
                        <LinkContainer to="/login?disconnect=1">
                            <MenuItem eventKey={3}>Se déconnecter</MenuItem>
                        </LinkContainer>
                    </NavDropdown>
                </Nav>
            );
        } else {
            right = (
            <Nav pullRight>
                <IndexLinkContainer to="signup">
                    <NavItem eventKey={3}>Nouveau compte</NavItem>
                </IndexLinkContainer>
                <IndexLinkContainer to="login">
                    <NavItem eventKey={3}>Connexion</NavItem>
                </IndexLinkContainer>
            </Nav>
            );
        }
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">
                            GeoSong
                        </a>
                        {State.getConnected()}
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav bsStyle="pills" activeKey={0}>
                        <IndexLinkContainer to="">
                            <NavItem eventKey={1}>Écoute</NavItem>
                        </IndexLinkContainer>
                        <NavItem eventKey={2} href="#/">Randonnées</NavItem>
                    </Nav>
                    {right}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MyNavbar;
