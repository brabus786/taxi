import React from 'react';
import OrderDetails from '../../components/order_details/order_details';
import BlockMap from '../../components/block_map/block_map';
import TaxiList from '../../components/taxi_list/taxi_list';
import { Container, Row, Col } from 'reactstrap';

const FindATaxi = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xl='12'>
                        <OrderDetails />
                    </Col>
                    <Col xl='8'>
                        <BlockMap />
                    </Col>
                    <Col xl='4'>
                        <TaxiList />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FindATaxi;