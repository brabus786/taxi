
interface order {
    code: number,
    descr: string,
    data: {
        order_id: number,
        address: string,
        lat: number,
        lon: number,
        crew_id:number,
    }
}


const date = new Date;
const uni = date.getTime();


const orderCreation = (props: order) => {

    const order = {
        source_time: uni,
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
