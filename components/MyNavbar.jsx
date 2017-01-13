/**
 * Created by rhiobet on 10/01/17.
 */

import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';

function handleSelect(selectedKey) {
    alert('selected ' + selectedKey);
}

class MyNavbar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">GeoSong</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav bsStyle="pills" activeKey={0}>
                        <NavItem eventKey={1} href="#">Écoute</NavItem>
                        <NavItem eventKey={2} href="#">Randonnées</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <IndexLinkContainer to="signup" activeClassName="active">
                            <NavItem  eventKey={3} href="#">Connexion</NavItem>
                        </IndexLinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MyNavbar;
