import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, GoogleMapProps } from "react-google-maps";
import { currentLocation, descriptionLocation } from '../../store/actions/Location';
import { getTownUser } from '../../UTILS/location';


import PingOrangeImg from '../../img/pin-orange.svg';
import PingGreen from '../../img/pin-green.svg';

interface MyMapProps {
    isMarkerShown: boolean;
}



const MyMapComponent = withGoogleMap((props: MyMapProps) => {
    const [coordinates, setCoordinates] = useState([]);
    const dispatch = useDispatch();
    const Location = useSelector(state => state.location);
    const LocationCar = useSelector(state => state.getAvailable);
    // const [mapRef, setMapRef] = useState(null);
    const mapRef = useRef<GoogleMap>();


    const addMarkers = () => {
        let coordinatesTaxi = [];
        for (let i = 0; i < LocationCar.length; i++) {
            coordinatesTaxi.push({ lat: LocationCar[i] && LocationCar[i].lat, lng: LocationCar[i] && LocationCar[i].lng });
        }

        setCoordinates(coordinatesTaxi);

        const allMarkers = [...coordinatesTaxi];
        if (Location.latLng.let) allMarkers.push(Location.latLng);
        console.log(allMarkers);

        setBounds(allMarkers)
    }

    const setBounds = (cords: { lat: number, lng: number }[]) => {
        if (mapRef.current) {
            const bounds = new (window as any).google.maps.LatLngBounds();
            cords.forEach(c => bounds.extend(c));
            mapRef.current.fitBounds(bounds);
        }
    }

    useEffect(() => {
        console.log('Update Marker');
        addMarkers();
    }, [LocationCar])


    const onChangeHandler = async (e) => {
        const LatLng = { lat: e.latLng.lat(), lng: e.latLng.lng() };
        dispatch(currentLocation(LatLng));
        const address = await getTownUser(LatLng);
        dispatch(descriptionLocation(address));
    };


    let markers = null;
    if (Location.latLng.lat && Location.latLng.lng) {
        markers = (
            <GoogleMap
                ref={mapRef}
                defaultZoom={20}
                zoom={20}
                defaultCenter={Location.latLng}
                onClick={onChangeHandler}
            // center={Location.latLng}

            >
                <Marker
                    position={Location.latLng}
                    defaultOptions={{ color: 'black' }}
                    options={{
                        icon: {
                            path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
                            fillColor: 'yellow',
                            fillOpacity: 1,
                            strokeColor: '',
                            strokeWeight: 1

                        },
                    }}

                />
                {
                    coordinates.map((c, i) => {
                        console.log(c)
                        return (
                            <Marker
                                key={i}
                                position={c}
                                options={{
                                    icon: {
                                        path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
                                        fillColor: 'green',
                                        fillOpacity: 1,
                                        strokeColor: '',
                                        strokeWeight: 0
                                    },
                                }}
                            />)
                    })
                }
            </GoogleMap >
        );
    }


    return (


        markers

    )
})

export default MyMapComponent;