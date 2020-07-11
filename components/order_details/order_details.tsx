import React from 'react';
import Input from '../UI/input/input';
import CardKar from '../card_kar/card_kar';
import styles from './order_details.module.scss';

const OrderDetails = () => {
    return (
        <div className={styles.OrderDetails}>
            <Input />
            <p className={styles.OrderDetails__title}>Подходящий экипаж</p>
            <CardKar />
        </div>
    );
};

export default OrderDetails;
