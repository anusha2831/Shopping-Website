import React from 'react';
import { Link } from 'react-router-dom';
import { compose, withProps, withStateHandlers} from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap,Marker, InfoWindow} from "react-google-maps";

const FindStore = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBh9llAihVH0A1o4T49VSoIqaLMGraRzzs&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className="container map-wrapper" />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
  defaultZoom={8}
  defaultCenter={{
    lat: 37.296499,
    lng: -122.2837927
                 }}>
      {props.locations.map((location) =>            
            <MarkerWithInfoWindow key={`marker-${location.name}`} title={location.title} name={location.name}
             location={location} position={location.position} /> 
         )}
  </GoogleMap>
);


class MarkerWithInfoWindow extends React.Component {

  constructor() {
      super();
      this.state = {
          isOpen: false
      }
      this.onToggleOpen = this.onToggleOpen.bind(this);
  }

  onToggleOpen() {
      this.setState({
          isOpen: !this.state.isOpen
      });
  }

  render() {
      return (<Marker
          position={this.props.position}
          onClick={this.onToggleOpen}>
          {this.state.isOpen && <InfoWindow onCloseClick={this.onToggleOpen}>
          <div className="map-info">
                  <h6>{this.props.location.name}</h6>
                  <p>{this.props.location.contact}</p>
                  <p><Link to="/findStore">Get Directions</Link></p>
                </div>
          </InfoWindow>}
      </Marker>)
  }
}

export default FindStore;