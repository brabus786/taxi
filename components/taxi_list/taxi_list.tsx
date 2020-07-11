import React from 'react';
import Item from '../item/item';
import styles from './taxi_list.module.scss';

const TaxiList = () => {
    return(
        <div className={styles.TaxiList}>
            <Item />
        </div>
    );
};

export default TaxiList;