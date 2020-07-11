import React from 'react';
import styles from './card_kar.module.scss';
import img from '../../img/img.jpg';

const CardKar = () => {
    return (
        <div className={styles.CardKar}>
            <img className={styles.CardKar__img} src={img} alt="img" />
            <div className={styles.CardKar__block}>
                <span className={styles.CardKar__manufactured}>Chevrolet Lacetti</span>
                <span className={styles.CardKar__color}>серый</span>
            </div>

            <span className={styles.CardKar__number}>E 234 KY</span>
        </div>
    );
};

export default CardKar;