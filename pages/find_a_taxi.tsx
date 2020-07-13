import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../components/layout/layout';
import FindATaxiTemplate from '../templates/find_a_taxi_template/find_a_taxi_template';
import orderCreation from '../api/order_creation';

const FindATaxi = () => {
    
    const [error,setError] = useState(false);
    const Location = useSelector(state => state.location);
    const Crew = useSelector(state => state.getAvailable);
    

    const onclick = () => {
      
        if(Location.description === ''){
            setError(true);
            return;
        }else{
            setError(false);
        }

        const orderGet = {
            code:0,
            descr: 'Ok',
            data: {
                order_id: 12345,
                address: Location.description,
                lat: Location.latLng.lat,
                lon: Location.latLng.lng,
                crew_id:Crew[0].crew_id,
            }
        };

        const order = JSON.stringify(orderCreation(orderGet));
        
        alert(order);
       
    }

    return (
        <div>
            <Layout>
                <FindATaxiTemplate
                    onclick={onclick}
                    error={error}
                />
            </Layout>
        </div>
    );
};

export default FindATaxi;
