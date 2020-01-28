import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = (props) => {
    return (
        <Link to="/" className={styles.button}>
            { props.children }
        </Link>
    )
}

export default memo(Button);