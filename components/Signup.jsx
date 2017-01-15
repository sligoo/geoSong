/**
 * Created by sacha on 13/01/2017.
 */

import React, {PropTypes, Component} from 'react';
import {
    Grid,
    Row,
    Col,
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
        return (
            <Grid className="content-grid">
                <Row className="content-row">
                    <Form onSubmit={onSubmit}>
                        <FieldGroup
                            id="formControlsPseudo"
                            type="text"
                            label="Pseudo"
                            placeholder="Enter pseudo"
                        />
                        <FieldGroup
                            id="formControlsEmail"
                            type="email"
                            label="Email address"
                            placeholder="Enter email"
                        />
                        <FieldGroup
                            id="formControlsPassword"
                            label="Password"
                            type="password"
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