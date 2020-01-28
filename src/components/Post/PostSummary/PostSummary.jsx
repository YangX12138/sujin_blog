import React, { memo } from 'react';
import styles from './PostSummary.module.scss';
import { Link } from 'react-router-dom';
import cs from 'classnames';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import { formatDate } from '../../../tools/tools';

const PostSummary = ({ isEven, url, to, data }) => {
    return (
        <div 
            className={isEven ? cs(styles.post, styles.even) : cs(styles.post, styles.odd)}
        >
            <Link 
                to={to} 
                title={data.title}
            >
                <LazyLoad>
                    <img 
                        src={url} 
                        alt="thumb" 
                    />
                </LazyLoad>
            </Link>
            <div 
                className={styles.else} 
            >
                <p 
                    className={styles.date}
                >
                    {formatDate(new Date(data.currentTime))}
                </p>
                <h3>
                    <Link 
                        to={to} 
                        className={styles.title}
                    >
                        {data.title}
                    </Link>
                </h3>
                <p
                    className={styles.summary}
                >
                    {data.summary}
                </p>
                <ul 
                    className={styles.here}
                >
                    <li>
                        <span className="iconfont">&#xe636;</span>
                        <span className={styles.text}>{ data.letter_count }</span>
                    </li>
                    <li>
                        <span className="iconfont">&#xe62b;</span>
                        <span className={styles.text}>{ data.view_count }</span>
                    </li>
                    <li>
                        <span className="iconfont">&#xe85b;</span>
                        <span className={styles.text}>{ data.likes_count }</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

PostSummary.propTypes = {
    isEven: PropTypes.bool,
    url: PropTypes.string,
    to: PropTypes.string,
    data: PropTypes.object
}

PostSummary.default = {
    isEven: true,
    url: '',
    to: '/',
    data: {
        title: ''
    }
}

export default memo(PostSummary);