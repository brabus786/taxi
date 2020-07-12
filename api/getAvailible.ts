interface getAvailableOptions {
    source_time: string,
    addresses: {
        address: string,
        lat: number,
        lng: number,
    }[]
}

const getAvailable = (options: getAvailableOptions) => {

    const crew = {
        code:0,
        descr:'OK',
        data: {
            crews_info: [
                {
                    crew_id: 125,
                    car_mark: 'Hyundai',
                    car_model: 'Solaris',
                    car_color: 'белый',
                    car_number: 'Ф567АС',
                    driver_name: 'Петров',
                    driver_phone: '8899',
                    lat: options.addresses[0].lat,
                    lng: options.addresses[0].lng,
                    distance: 600,
                },
                {
                    crew_id: 126,
                    car_mark: 'BMW',
                    car_model: '740',
                    car_color: 'black',
                    car_number: 'X3434АС',
                    driver_name: 'Пупкин',
                    driver_phone: '899975',
                    lat: options.addresses[0].lat,
                    lng: options.addresses[0].lng,
                    distance: 700,
                },
                {
                    crew_id: 127,
                    car_mark: 'ВАЗ',
                    car_model: '2101',
                    car_color: 'зеленый',
                    car_number: 'Ф567656ЗЩ',
                    driver_name: 'Сидоров',
                    driver_phone: '79786777557',
                    lat: options.addresses[0].lat,
                    lng: options.addresses[0].lng,
                    distance: 800,
                },
                {
                    crew_id: 128,
                    car_mark: 'Таврия',
                    car_model: 'Nova',
                    car_color: 'grey',
                    car_number: 'S4545JD',
                    driver_name: 'Петя',
                    driver_phone: '66666666',
                    lat: options.addresses[0].lat,
                    lng: options.addresses[0].lng,
                    distance: 900,
                }
            ]
        }

    }
    return crew;
}

export default getAvailable;