import React from 'react';
import Link from 'next/link';
import { Container } from 'reactstrap';
import styles from './heder.module.scss';

const Heder = () => {
    return (
        <div className={styles.heder}>
            <Container>
                <div className={styles.heder__inerWrap}>
                     <Link href='/'><a className={styles.logo}>TAXI</a></Link>
                </div>
            </Container>
        </div>
    );
};

export default Heder;