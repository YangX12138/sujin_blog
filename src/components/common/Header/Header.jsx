import React, { memo } from 'react';
import styles from './Header.module.scss'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cs from 'classnames';

const Header = ({ toggleMenu, actived }) => {
    return (
        <>
            <div className={styles.header}>
                <Link to="/" className={styles.icon_logo}>
                    aaa
                </Link>
                <div onClick={toggleMenu} className={styles.icon_menu}>
                    {
                        actived ? 
                        <span className="iconfont">&#xe711;</span>
                        : 
                        <span className={cs("iconfont", styles.menu_icon)}>&#xe614;</span>
                    }
                </div>
            </div>
        </>
    )
}

Header.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
    actived: PropTypes.bool
}

export default memo(Header);