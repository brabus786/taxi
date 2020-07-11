import {withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

interface MyMapProps {
    isMarkerShown: boolean;
}

const MyMapComponent = withScriptjs(withGoogleMap((props:MyMapProps) => {

    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
            {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>
    )
}))

export default MyMapComponent;