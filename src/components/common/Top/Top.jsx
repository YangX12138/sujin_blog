import React from 'react';
import styles from './Top.module.scss';
import { Link } from 'react-router-dom';

const Top = () => {
    return (
        <div className={styles.top}>
            <Link className={styles.logo_icon} to={'/'}>
            </Link>
        </div>
    )
}

export default Top;