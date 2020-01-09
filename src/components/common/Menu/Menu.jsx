import React, { memo } from 'react';
import styles from './Menu.module.scss';
import cs from 'classnames';
import { Link } from 'react-router-dom';

const Menu = ({ actived }) => {
    return (
        <div className={actived ? cs(styles.menu) : cs(styles.menu, styles.active)}>
            <ul className={styles.menu_nav}>
                <li>
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to="/links">
                        Links
                    </Link>
                </li>
                <li>
                  <Link to="/archive">
                        Archive
                    </Link>
                </li>
                <li>
                    <Link to="/rain">
                        Rainy
                    </Link>
                </li>
                <li>
                    <Link to="/blog">
                        Japonism
                    </Link>
                </li>
                <li>
                    <Link to="/blog">
                        Q&A
                    </Link>
                </li>
            </ul>
            <p className={styles.footer}>© 2019 素锦. Powered by WordPress.</p>
        </div>
    )
}

export default memo(Menu);