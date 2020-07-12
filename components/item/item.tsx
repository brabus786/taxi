import React from 'react';
import styles from './litem.module.scss';
import img from '../../img/img.jpg';

interface CarObject {
    car_color: string,
    car_mark: string,
    distance: number
}

const Item = (props: CarObject) => {
    return (
        <div className={styles.Item}>
            <img className={styles.Item__kar} src={img} alt="icon" />
            <span className={styles.Item__manufacturer}>{props.car_mark}</span>
            <span className={styles.Item__color}>{props.car_color}</span>
            <span className={styles.Item__distance}>{props.distance} m</span>
            <span className={styles.Item__UI}></span>
        </div>
    );
};

export default Item;