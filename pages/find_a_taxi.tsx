import React from 'react';
import Layout from '../components/layout/layout';
import FindATaxiTemplate from '../templates/find_a_taxi_template/find_a_taxi_template';

const FindATaxi = () => {
    return (
        <div>
            <Layout>
                <FindATaxiTemplate />
            </Layout>
        </div>
    );
};

export default FindATaxi;
