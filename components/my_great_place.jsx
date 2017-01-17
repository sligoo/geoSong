/**
 * Created by sacha on 11/01/2017.
 */

import React, {PropTypes, Component} from 'react';

import {Popover, OverlayTrigger, Button} from 'react-bootstrap';

import {greatPlaceStyle} from './my_great_place_styles.js';

const popoverClickRootClose = (
    <Popover id="popover-trigger-click-root-close" title="Lecture Musique">
        <strong>Titre: </strong>
    </Popover>
);

export default class MyGreatPlace extends Component {
    static propTypes = {
        text: PropTypes.string
    };

    static defaultProps = {};


    render() {
        return (
            <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverClickRootClose}>
                <Button style={greatPlaceStyle}>
                    {this.props.text}
                </Button>
            </OverlayTrigger>
        );
    }
}