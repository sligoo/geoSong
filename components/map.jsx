/**
 * Created by sacha on 11/01/2017.
 */

import React, {PropTypes} from 'react';

import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_place.jsx';
import {Alert} from 'react-bootstrap';


let INITIAL_LOCATION = {
    position: {
        latitude: 51.5085300,
        longitude: -0.1257400
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

        }
        console.log(this.getCurrentLocation())
    }

    getCurrentLocation(){
        //If brower supports HTML5 geoLocation
        let lati;
        let longo;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                lati = position.coords.latitude;
                longo = position.coords.longitude;
            });

        } else {
                lati = INITIAL_LOCATION.position.latitude;
                longo = INITIAL_LOCATION.position.longitude;
        }
        return ;
    }

    updateState(lat, lon){
        this.setState({
            center: [ lat, lon]
        })
    }


    render() {
        return (
            <div>
                {console.log(this.getCurrentLocation())}
                <GoogleMap
                    bootstrapURLKeys={{key: 'AIzaSyDsO0A8v464XkyhH9WAaUt4ENuDcCcGFpw'}}
                    //apiKey='AIzaSyDsO0A8v464XkyhH9WAaUt4ENuDcCcGFpw' // set if you need
                    // stats etc ...
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