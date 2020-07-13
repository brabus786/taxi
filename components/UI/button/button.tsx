import React from 'react';
import styles from './button.module.scss';

interface button{
    text:string
}

const Button = (props:button) => {
    return (
        <button className={styles.button}>{props.text}</button>
    );
};

export default Button;
