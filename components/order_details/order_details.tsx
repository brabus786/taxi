import React from 'react';
import { useSelector } from 'react-redux';
import Input from '../UI/input/input';
import CardKar from '../card_kar/card_kar';
import styles from './order_details.module.scss';

const OrderDetails = (props) => {

   
    const crew = useSelector((state) => state.getAvailable);

    let error = null;
    if(props.error){
        error = <p className={styles.error}>Введите правильный адрес</p>
    }

    return (
        <div className={styles.OrderDetails}>
            {error}
            <Input
               
            />
            <p className={styles.OrderDetails__title}>Подходящий экипаж</p>
            <CardKar
                car_mark={crew[0] && crew[0].car_mark}
                car_color={crew[0] && crew[0].car_color}
                car_number={crew[0] && crew[0].car_number}
            />
        </div>
    );
};

export default OrderDetails;
