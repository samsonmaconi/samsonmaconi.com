import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, MarkerProps } from 'react-google-maps';
import './GoogleMap.css';

class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    handleMarkerClick(e) {
        // let map = this.mapRef;
        // let marker = this.markerRef;
        // console.log(JSON.stringify(marker.getPosition()));
        // console.log(map.getZoom());
        // let pos = map.getZoom();
        // GoogleMap.prototype.zoom(map, 10);
        // GoogleMap.center(map, marker.getPosition());
        // window.setTimeout(function () { GoogleMap.prototype.zoom(map, pos); }, 3000);
    }

    setMapRef(map) {
        this.mapRef = map;
        // this.mapRef && console.log("Map loaded: " + JSON.stringify(this.mapRef.getCenter()))
    }

    setMarkerRef(marker) {
        this.markerRef = marker;
        // this.markerRef && console.log("Marker loaded: " + JSON.stringify(this.markerRef.getPosition()))
    }


    render() {
        return (
            <GoogleMap ref={this.setMapRef.bind(this)} zoom={10} defaultCenter={this.props.center}>
                {/* {this.props.isMarkerShown && <Marker ref={this.setMarkerRef.bind(this)} position={this.props.center} defaultAnimation={google.maps.Animation.BOUNCE} onClick={this.handleMarkerClick.bind(this)} />} */}
            </GoogleMap>
        );
    }
}

const PlainMap = withScriptjs(withGoogleMap((props) =>
    <Map {...props} />
));

const StyledMap = (props) =>
    <div id="GoogleMap" className="GoogleMapFooter">
        <PlainMap
            center={{ lat: props.latitude, lng: props.longitude }}
            isMarkerShown={props.isMarkerShown || true}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB20NZye4htY4Fp_oIlJEYItCYcQ2-dCVc"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    </div>;

export default StyledMap;


//https://maps.googleapis.com/maps/api/js?key=AIzaSyB20NZye4htY4Fp_oIlJEYItCYcQ2-dCVc&callback=myMap