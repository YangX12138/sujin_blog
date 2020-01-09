import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Link to={"/"}>
                湘ICP备14010307号
            </Link>
        </div>
    )
}

export default Footer;