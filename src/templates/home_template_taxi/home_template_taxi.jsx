import React from 'react';
import Link from 'next/link';
import { Container } from 'reactstrap';
import styles from './home_template_taxi.module.scss';

const HomeTemplateTaxi = () => {
    return (
        <div className={styles.HomeTemplateTaxi}>
            <Container>
                <Link href="/find_a_taxi">
                    <a className={styles.link}>Вызвать такси</a>
                </Link>
            </Container>
        </div>
    );
};

export default HomeTemplateTaxi;