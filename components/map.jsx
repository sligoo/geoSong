/**
 * Created by sacha on 11/01/2017.
 */

import React, {PropTypes} from 'react';

import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_place.jsx';


let INITIAL_LOCATION = {
    position: {
        latitude: 43.6020423,
        longitude: 1.45222
    }
};


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

    constructor(props) {
        super(props);
        this.state = {
            center: [INITIAL_LOCATION.position.latitude, INITIAL_LOCATION.position.longitude],
            zoom: 13,
            greatPlaceCoords: {
                lat: 43.6020423, lng: 1.45222
            }
        };
        this.geolocationSearch();
    }

    geolocationSearch() {
        let success = function (position) {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            this.updateState(lat, lon);
        }.bind(this);

        navigator.geolocation.watchPosition(success);
    }

    updateState(lat, lon) {
        this.setState({
            center: [lat, lon]
        });
    }

    render() {
        return (
            <div>
                <GoogleMap
                    bootstrapURLKeys={{key: 'AIzaSyDsO0A8v464XkyhH9WAaUt4ENuDcCcGFpw'}}
                    center={this.state.center}
                    zoom={this.state.zoom}
                    options={createMapOptions}>
                    <MyGreatPlace lat={43.5979552} lng={1.4513846}
                                  text={'A'} /* Kreyser Avrora */ />
                    <MyGreatPlace {...this.state.greatPlaceCoords}
                                  text={'B'} /* road circle */ />
                </GoogleMap>
            </div>
        );
    }


}

export default (Map);