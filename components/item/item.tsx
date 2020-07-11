import React from 'react';
import styles from './litem.module.scss';
import img from '../../img/img.jpg';

const Item = () => {
    return(
        <div className={styles.Item}>
            <img className={styles.Item__kar} src={img} alt="icon"/>
            <span className={styles.Item__manufacturer}>chevrolet lacetty</span>
            <span className={styles.Item__color}>серый</span>
            <span className={styles.Item__distance}>100 m</span>
            <span className={styles.Item__UI}></span>
        </div>
    );
};

export default Item;