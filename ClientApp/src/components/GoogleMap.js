import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
function GoogleMapComponent() {
    const mapStyles = {
        height: '300px',
        width: '50%',
    };

    const defaultCenter = {
        lat: 46.829853, 
        lng: -71.254028, 
    };

    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={10}>
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
}

export default GoogleMapComponent;