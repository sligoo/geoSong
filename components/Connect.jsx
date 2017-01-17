/**
 * Created by sacha on 13/01/2017.
 */

import React, {PropTypes, Component} from 'react';
import {Grid, Row, Button, Alert, Form, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import CryptoJS from 'crypto-js';
import State from './State.jsx';

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

class Connect extends React.Component {
    render() {
        var username = this.props.location.query.username;
        var key = this.props.location.query.key;
        var disconnect = this.props.location.query.disconnect;
        var check;

        var myAlert;

        if (username != null && key != null) {
            check = username + Math.floor(new Date().getTime() / 100000) + "ok";
            if (CryptoJS.SHA256(check) == key) {
                State.setConnected(true);
                State.setUser(username);
            } else {
                myAlert =
                    <Alert bsStyle="danger">
                        Nom d'utilisateur ou mot de passe incorrect, merci de revérifier les informations saisies
                    </Alert>;
            }
        }

        if (disconnect == 1) {
            State.setConnected(false);
            State.setUser('');
            localStorage.removeItem('username');

            return (
                <Grid className="content-grid content-autre">
                    <Row className="content-row">
                        <Alert bsStyle="success">
                            Déconnexion effectuée, cliquez <a href="/#/">ici</a> pour retourner à l'accueil
                        </Alert>
                    </Row>
                </Grid>
            );
        } else if (!State.getConnected()) {
            return (
                <Grid className="content-grid content-autre">
                    <Row className="content-row">
                        {myAlert}
                        <Form action="http://localhost:8081/geoSong/Accounts" method="POST">
                            <FieldGroup
                                id="username"
                                type="text"
                                label="Nom d'utilisateur"
                                name="username"
                                placeholder="Saisir votre pseudo"
                            />
                            <FieldGroup
                                id="password"
                                label="Mot de passe"
                                name="password"
                                type="password"
                            />
                            <FieldGroup
                                name="op"
                                value="login"
                                type="hidden"
                            />
                            <Button type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Row>
                </Grid>
            );
        } else {
            return (
                <Grid className="content-grid content-autre">
                    <Row className="content-row">
                        <Alert bsStyle="success">
                            Connexion réussie, cliquez <a href="/#/">ici</a> pour retourner à l'accueil
                        </Alert>
                    </Row>
                </Grid>
            );
        }
    }

}

export default (Connect);