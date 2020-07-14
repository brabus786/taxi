import React from 'react';
import styles from './homePageTemplate.module.scss';
import * as actionCreated from '../../store/actions/counter';
import { connect } from 'react-redux';

const homePageTemplate = (props) => {
    console.log(actionCreated);
    return (
        <div className={styles.homePageTemplate}>
            <button onClick={() => props.increment()}>+</button>
            <span>{props.homePageTemplate.counter.count}</span>
            <button onClick={() => props.decrement()}>-</button>
        </div>
    );
};

export default connect(
    (state) => {
        return { homePageTemplate: state }
    },
    (dispatch) =>{
        return {
            increment: () => dispatch(actionCreated.counterIncriment()),
            decrement: () => dispatch(actionCreated.counterDecriment()),
        }
    }
)(homePageTemplate);