import React from 'react';
import styles from './button.module.scss';

interface button{
    text:string,
    onclick: () => void
}

const Button = (props:button) => {
    return (
        <button onClick={() => props.onclick()} className={styles.button}>{props.text}</button>
    );
};

export default Button;
