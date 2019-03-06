import React from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap,Marker, InfoWindow} from "react-google-maps";

const FindStore = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDf-yIqxErTkbWzKhLox7nAANnrfDIY190&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `800px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={4}
        defaultCenter={{
          lat: 48.724865087482755,
          lng: -3.4469044744779467
                       }}>

         {props.locations.map((place) => {
            return(
            <Marker key={`marker-${place.name}`} title={place.title} name={place.name} position={place.position}>
              <InfoWindow key={`infowindow-${place.name}`}  visible={true}>
                <div>{place.title}</div>
              </InfoWindow>
            </Marker>
            )
         })}

    </GoogleMap>
);



export default FindStore;