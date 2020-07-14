import * as actionTypes from './actionTypes';

interface Crew {
    crew_id: number,
    car_mark: string,
    car_model: string,
    car_color: string,
    car_number: string,
    driver_name: string,
    driver_phone: string,
    lat: number,
    lng: number,
    distance: number,
}


export const getAvailableCrew = (data:Crew[]) => ({ type: actionTypes.GET_AVAILABLE,crews:data });  