import React from 'react';
import OrderDetails from '../../components/order_details/order_details';
import BlockMap from '../../components/block_map/block_map';
import TaxiList from '../../components/taxi_list/taxi_list';
import Button from '../../components/UI/button/button';
import { Container, Row, Col } from 'reactstrap';



const FindATaxi = (props) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xl='12'>
                        <OrderDetails
                            error={props.error}
                        />
                    </Col>
                    <Col xl='8'>
                        <BlockMap />
                    </Col>
                    <Col xl='4'>
                        <TaxiList />
                    </Col>
                    <Col xl='12'>
                        <Button 
                            text='Заказать'
                            onclick={props.onclick}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FindATaxi;