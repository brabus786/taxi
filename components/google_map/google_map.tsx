import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { currentLocation, descriptionLocation } from '../../store/actions/Location';
import { getTownUser } from '../../UTILS/location';


interface MyMapProps {
    isMarkerShown: boolean;
}



const MyMapComponent = withScriptjs(withGoogleMap((props: MyMapProps) => {

    

    const [markers,setMarkers] = useState([]);

    const dispatch = useDispatch();
    const Location = useSelector(state => state.location);
    const LocationCar = useSelector(state => state.getAvailable);

    const addMarkers = (Location,LocationCar) =>{
        for(let i = 0; i < LocationCar.length + 1; i++){
            if(i === 0){
                console.log(Location.latLng);
            }else{
                console.log({lat:LocationCar[i - 1].lat + (Math.floor(Math.random() * Math.floor(20))) ,lng:LocationCar[i - 1].lng + (Math.floor(Math.random() * Math.floor(20)))});
            }
        }
    }


    const onChangeHandler = async (e) => {
        const LatLng = { lat: e.latLng.lat(), lng: e.latLng.lng() };
        dispatch(currentLocation(LatLng));
        const address = await getTownUser(LatLng);
        dispatch(descriptionLocation(address));   
        addMarkers(Location,LocationCar);
    };


    return (
        <GoogleMap
            defaultZoom={16}
            defaultCenter={Location.latLng}
            onClick={onChangeHandler}
            center={Location.latLng}
        >
            {props.isMarkerShown &&
                <Marker
                    position={Location.latLng}
                />}

        </GoogleMap>
    )
}))

export default MyMapComponent;