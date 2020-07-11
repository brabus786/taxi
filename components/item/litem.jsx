import React from 'react';
import styles from './litem.module.scss';

const Item = () => {
    return(
        <div className={styles.Item}>
            <img src="" alt=""/>
            <span>chevrolet lacetty</span>
            <span>серый</span>
            <span>100 m</span>
            <img src="" alt=""/>
        </div>
    );
};

export default Item;