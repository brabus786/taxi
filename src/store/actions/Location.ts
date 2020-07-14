import * as actionType from './actionTypes';

interface location{
    lat:number,
    lng:number,
};

export const currentLocation = (data:location) => ({type:actionType.CURRENT_LOCATION,data});
export const descriptionLocation = (data:string) => ({type:actionType.DESCRIPTION_LOCATION,data})