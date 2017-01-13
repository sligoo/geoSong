/**
 * Created by sacha on 11/01/2017.
 */

import React, {PropTypes} from 'react';

import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_place.jsx';

function createMapOptions(maps) {
    // next props are exposed at maps
    // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
    // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
    // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
    // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
    // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
    return {
        zoomControlOptions: {
            position: maps.ControlPosition.LEFT_TOP,
            style: maps.ZoomControlStyle.SMALL
        }
    };
}

class Map extends React.Component {
    static PropTypes = {
        center: PropTypes.array,
        zoom: PropTypes.number,
        greatPlaceCoords: PropTypes.any
    };

    static defaultProps = {
        center: [43.6008029, 1.3628014],
        zoom: 13,
        greatPlaceCoords: {lat: 43.6020423, lng: 1.45222}
    };


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GoogleMap
                apiKey='AIzaSyDsO0A8v464XkyhH9WAaUt4ENuDcCcGFpw' // set if you need stats etc ...
                center={this.props.center}
                zoom={this.props.zoom}
                options={createMapOptions}>
                <MyGreatPlace lat={43.5979552} lng={1.4513846} text={'A'} /* Kreyser Avrora */ />
                <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />
            </GoogleMap>
        );
    }
}

export default Map;