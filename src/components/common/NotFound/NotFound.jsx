import React, { Fragment } from 'react';
import Top from '../Top/Top';
import styles from './NotFound.module.scss';

const NotFound = () => {
    return (
        <Fragment>
            <Top/>
            <div className={styles.not_found}>
                <h1 className={styles.title}>404 Not Found</h1>
                <p className={styles.content}>The page you were looking for is no longer available.</p>
            </div>
        </Fragment>
    )
}

export default NotFound;