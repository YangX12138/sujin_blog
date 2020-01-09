import React, { useEffect, useRef, memo } from 'react';
import styles from './Cover.module.scss';
import Parallax from 'parallax-js';
import { Link } from 'react-router-dom';
import { formatDate } from '../../../tools/tools'

function Cover({ article }) {
    const cover = useRef(null);

    useEffect(() => {
        handleParallax();
    }, [])

    function handleParallax() {
        new Parallax(cover.current, {
            limitY: 400,
            limitX: 400
        });
    }

    return (
        <>
            <div className={styles.screen}>
                <div ref={cover} className={styles.mark}>
                    <img data-depth="0.2" src="https://blog20190912.oss-cn-beijing.aliyuncs.com/wallhaven-672007-1.png" alt="cover" />
                </div>
                <div draggable={true} className={styles.vibrant}>
                    <svg viewBox="0 0 2880 1620" height="100%" preserveAspectRatio="xMaxYMax slice">
                        <polygon opacity="0.7" points="2000,1620 0,1620 0,0 600,0 " style={{"fill": "rgb(176, 14, 36)"}}></polygon>
                    </svg>
                </div>
                <div className={styles.post0}>
                    <p>{formatDate(new Date(article.currentTime))}</p>
                    <h2>
                        <Link to={`/article/${article._id}`}>
                            {article.title}
                        </Link>
                    </h2>
                    <p>
                        {article.summary}
                    </p>
                </div>
            </div>
        </>
    )
}

export default memo(Cover);