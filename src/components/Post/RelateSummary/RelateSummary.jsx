import React from 'react';
import styles from './RelateSummary.module.scss';
import { Link } from 'react-router-dom';

const RelateSummary = ({ title, summary, imgSrc, id }) => {
    return (
        <div className={styles.relate}>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    <Link 
                        to={`/article/${id}`}
                        title={ title }
                    >
                        { title }
                    </Link>
                </h2>
                <p>
                    { summary }
                </p>
            </div>
            <Link to={`/article/${id}`} className={styles.pic}>
                <img 
                    title={ title }
                    src={ imgSrc }
                    alt="缩略图"
                />
            </Link>
        </div>
    )
}

export default RelateSummary;