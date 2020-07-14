import axios from 'axios';
import Geocode from "react-geocode";

export const getLocation = async () => {
    try {
        const response = await axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBHZRS2q419ce2EQTqhI0l78h-0M-n8eCw', {
        });
        const latLng = {
            lat: response.data.location.lat,
            lng: response.data.location.lng,
        }
        //console.log(latLng);
        // console.log(response);
        return latLng;


    } catch (e) {
        console.log(e.response);
    }
}


export const getTownUser = async (latLng) => {

    Geocode.setApiKey("AIzaSyBWtEzFuGqWtyuRCc3mgxETV2z4R2NKaMA");
    Geocode.setLanguage("ru");
    const adres = await Geocode.fromLatLng(latLng !== undefined ? latLng.lat : 0, latLng !== undefined ? latLng.lng : 0).then(
        (response) => {
           // console.log(response);
            const address = response.results[0].formatted_address;

            return address
        },
        error => {
            console.error(error);
        }
    );

    return await adres

}

export const latLng = async () => {

    const lat = await getLocation();

    const adres = await getTownUser(lat);

    return adres;
}


