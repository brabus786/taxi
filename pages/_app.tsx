import { createWrapper } from 'next-redux-wrapper';
import { useEffect } from 'react';
import initStore from '../store';
import { latLng } from '../UTILS/location';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.scss';


function MyApp({ Component, pageProps }) {

    

    const city = async () => {
        const setSity = await latLng();
        console.log(setSity);
        // store.dispatch({ type: 'ADD_TOWN', setSity });
    }

    city();
   

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