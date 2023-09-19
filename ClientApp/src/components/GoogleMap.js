import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function GoogleMapComponent() {
    const mapStyles = {
        height: '300px',
        width: '50%',
    };

    const defaultCenter = {
        lat: 53.00, 
        lng: -70.00, 
    };

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={10}>
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
}

export default GoogleMapComponent;