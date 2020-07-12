import { createWrapper } from 'next-redux-wrapper';
import { currentLocation } from '../store/actions/Location';
import { getAvailableCrew } from '../store/actions/getAvailable';
import getAvailable from '../api/getAvailible';
import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import initStore from '../store';
import { latLng, getLocation } from '../UTILS/location';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.scss';


function MyApp({ Component, pageProps }) {

    const location = useSelector(state => state.location);
    const dispatch = useDispatch();
  
    const currentLoc = async () => {
        const set = await getLocation();
        dispatch(currentLocation(set))
    }

    const crew = () => {
        const loc = {
            source_time: '0830543058305305',
            addresses: [{
                address: 'ttw wewe wewe',
                lat: location.latLng.lat,
                lng: location.latLng.lng,
            }]
        }
        const getCrews = getAvailable(loc);
        dispatch(getAvailableCrew(getCrews.data.crews_info))
    }


    useEffect(() => {
        currentLoc();
    },[]);

    useEffect(() => {
        crew();
    },[location.latLng.lat])


    return (
        <>
            <script async defer
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWtEzFuGqWtyuRCc3mgxETV2z4R2NKaMA&libraries=places&callback=initMap&language=ru-RU"
            ></script>
            <Component {...pageProps} />
        </>
    );
}

export const wrapper = createWrapper(initStore, { debug: true });

export default wrapper.withRedux(MyApp); 