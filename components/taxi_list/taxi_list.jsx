import React from 'react';
import Item from '../../components/item/litem';
import styles from './taxi_list.module.scss';

const TaxiList = () => {
    return(
        <div className={styles.TaxiList}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    );
};

export default TaxiList;