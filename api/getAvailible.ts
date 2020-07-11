interface getAvailableOptions {
    source_time: string,
    addresses: {
        address: string,
        lat: number,
        lon: number,
    }[]
}

const getAvailable = (options: getAvailableOptions) => {
    const crew = [
        {
            crew_id: 123,
            car_mark: "Chevrolete",
            lat: 44,
            lon: 45,
        },
        {
            crew_id: 123,
            car_mark: "Chevrolete",
            lat: 44,
            lon: 45,
        },
        {
            crew_id: 123,
            car_mark: "Chevrolete",
            lat: 44,
            lon: 45,
        },
        {
            crew_id: 123,
            car_mark: "Chevrolete",
            lat: 44,
            lon: 45,
        }
    ];
    
    return crew;
}

export default getAvailable;