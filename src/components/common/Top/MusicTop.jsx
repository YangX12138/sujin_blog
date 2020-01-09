import React, { memo, useEffect, useState, useRef } from 'react';
import styles from './Top.module.scss';
import cs from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

let totalH = 0,
    clientH = 0,
    scrollTop = 0,
    percent = 0,
    total = 0,
    current = 0;

function MusicTop({ musicSrc, title }){
    const [scrollWidth, setScrollWidth] = useState(0);
    const [played, setPlayed] = useState(true);
    const [audioPercent, setAudioPercent] = useState(0);
    const [visible, setVisible] = useState(false);
    const [wxActive, setWxActive] = useState(false);

    const audio = useRef();

    function onPlay() {
        audio.current.play();
        setPlayed(true);
    }

    function onPause() {
        audio.current.pause();
        setPlayed(false);
    }

    function handleScroll() {
        totalH = document.body.scrollHeight || document.documentElement.scrollHeight;
        clientH = window.innerHeight || document.documentElement.clientHeight;
        scrollTop = document.documentElement.scrollTop;
        percent = scrollTop / (totalH - clientH);
        setScrollWidth(percent * 100);
        setVisible(percent);
    }

    function handleCanPlay() {
        total = audio.current.duration;
    }

    function handleTimeUpdate() {
        if(audio.current) {
            current = audio.current.currentTime;
            if(current / total) {
                setAudioPercent(current / total * 100);
            }
        }
    }

    function toggleWx() {
        setWxActive(!wxActive);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        audio.current.addEventListener('canplay', handleCanPlay);
        audio.current.addEventListener('timeupdate', _.throttle(handleTimeUpdate, 300))
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div className={styles.top}>
            <audio ref={audio} loop={1} autoPlay={"autoplay"} src={musicSrc} />
            <div style={{width: `${scrollWidth}%`}} className={styles.progress}/>
            <div style={{width : `${audioPercent}%`}} className={styles.bar}/>
            <h3 className={cs(styles.article_title, !visible && styles.hide)}>
                { title }
            </h3>
            <Link className={styles.logo_icon} to={'/'}>
            </Link>
            <div className={styles.social}>
                <span className={cs('iconfont', styles.iconfont, styles.like_icon)}>&#xe85b;</span>
                <span 
                    className={cs('iconfont', styles.iconfont, styles.weixin_icon)}
                    onClick={toggleWx}
                >
                    &#xe610;
                </span>
            </div>
            {
                played ? 
                <span 
                    className={cs('iconfont',styles.iconfont, styles.play_icon)}
                    onClick={onPause}
                >
                    &#xe76a;
                </span>
                :
                <span 
                    className={cs('iconfont',styles.iconfont, styles.play_icon)}
                    onClick={onPlay}
               >
                    &#xe63d;
                </span>
            }
            {
                wxActive &&
                <div className={styles.weixin_qr_code}>
                    <img src="https://blog20190912.oss-cn-beijing.aliyuncs.com/weixin.png" alt="微信二维码" />
                </div> 
            }
        </div>
    )
}

MusicTop.propTypes = {
    musicSrc: PropTypes.string,
    title: PropTypes.string
}

MusicTop.defaultProps = {
    musicSrc: "",
    title: ""
}

export default memo(MusicTop);