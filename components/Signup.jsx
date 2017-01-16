/**
 * Created by sacha on 13/01/2017.
 */

import React, {PropTypes, Component} from 'react';
import {
    Grid,
    Row,
    Alert,
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock,
    Button
} from 'react-bootstrap';


function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

class Signup extends React.Component {
    render() {
        var state = this.props.location.query.state;
        var alert;

        if (state == "ok") {
            alert =
                <Alert bsStyle="success">
                    Enregistrement effectué !
                </Alert>;
        } else if (state == "nok") {
            alert =
                <Alert bsStyle="danger">
                    Ce pseudonyme est déjà utilisé !
                </Alert>;
        }
        return (
            <Grid className="content-grid">
                <Row className="content-row">
                    {alert}
                    <Form action="http://localhost:8081/geoSong/Accounts" method="POST">
                        <FieldGroup
                            id="username"
                            type="text"
                            label="Nom d'utilisateur"
                            name="username"
                            placeholder="Saisir un pseudo"
                        />
                        <FieldGroup
                            id="email"
                            type="email"
                            label="Email"
                            name="email"
                            placeholder="Saisir votre adresse email"
                        />
                        <FieldGroup
                            id="password"
                            label="Mot de passe"
                            name="password"
                            type="password"
                        />
                        <FieldGroup
                            name="op"
                            value="register"
                            type="hidden"
                        />
                        <Button type="submit">
                            Submit
                        </Button>
                    </Form>
                </Row>
            </Grid>
        );
    }

}

export default (Signup);