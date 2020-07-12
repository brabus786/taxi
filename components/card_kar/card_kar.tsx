import React from 'react';
import styles from './card_kar.module.scss';
import img from '../../img/img.jpg';

interface carObject {
    car_color: string,
    car_mark: string,
    car_number: string,
}

const CardKar = (props: carObject) => {

    return (
        <div className={styles.CardKar}>
            <img className={styles.CardKar__img} src={img} alt="img" />
            <div className={styles.CardKar__block}>
                <span className={styles.CardKar__manufactured}>{props.car_mark}</span>
                <span className={styles.CardKar__color}>{props.car_color}</span>
            </div>

            <span className={styles.CardKar__number}>{props.car_number}</span>
        </div>
    );
};

export default CardKar;