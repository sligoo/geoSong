/**
 * Created by rhiobet on 10/01/17.
 */

class MyNavbar extends React.Component {
    render() {
        const Navbar = ReactBootstrap.Navbar,
            Nav = ReactBootstrap.Nav,
            NavItem = ReactBootstrap.NavItem;

        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">GeoSong</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Écoute</NavItem>
                        <NavItem eventKey={2} href="#">Randonnées</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={3} href="#">Connexion</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

ReactDOM.render(
    <MyNavbar />,
    document.getElementById('header')
);
