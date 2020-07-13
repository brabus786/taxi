
interface order {
    code: number,
    descr: string,
    data: {
        order_id: number,
        address: string,
        lat: number,
        lon: number,
        crew_id:number,
        source_time:number,
    }
}



const orderCreation = (props: order) => {
    const order = {
        source_time: props.data.source_time,
        addresses: [{
            address: props.data.address,
            lat: props.data.lat,
            lon: props.data.lon,
        }],
        crew_id: props.data.crew_id
    }

    return order;
}
export default orderCreation;
