import React from 'react';
import { useSelector } from 'react-redux';
import Item from '../item/item';
import styles from './taxi_list.module.scss';

const TaxiList = () => {

    const Crews = useSelector((state) => state.getAvailable);

    const listCrew = Crews.map((data) => {
        return (
            <div key={data.crew_id}>
                <Item
                    car_mark={data.car_mark}
                    car_color={data.car_color}
                    distance={data.distance}
                />
            </div>
        )
    })

    return (
        <div className={styles.TaxiList}>
            {listCrew}
        </div>
    );
};

export default TaxiList;