import React, { memo, useEffect, useRef, useState } from 'react';
import MusicTop from '../../components/common/Top/MusicTop';
import styles from './Article.module.scss';
import RelateSummary from '../../components/Post/RelateSummary/RelateSummary';
import Footer from '../../components/common/Footer/Footer';
import Valine from 'valine';
import withAutoToTop from '../../components/hoc/withAutoToTop/withAutoToTop';
import marked from 'marked';
import articleService from '../../api/article.service';
import { formatDate } from '../../tools/tools';

window.AV = require('leancloud-storage');

function Article({ match, history }){
    const contentRef = useRef();
    const [data, setData] = useState({
        _id: '',
        date: '',
        title: '',
        letter_count: 0,
        view_count: 0,
        likes_count: 0 ,
        content: '',
        music: ''
    });
    const id = match.params.id;
    const content = data.content;

    function getArticle(_id) {
        articleService.getArticleById(_id).then((res) => {
            let data = res.data.article;
            if(data) {
                data.date = formatDate(new Date(data.currentTime));
                setData(data);
            }
        });
    }

    function goToTop() {
        window.scrollTo(0, 0);
    }

    function goToNext() {
        articleService.getNextById(id).then(res => {
            history.push(`/article/${res.data.id}`);
        })
    }

    function goToPrev() {
        articleService.getPrevById(id).then(res => {
            history.push(`/article/${res.data.id}`);
        })
    }

    useEffect(() => {
        contentRef.current.innerHTML = marked(content);
        getArticle(id);
    }, [id, content]);

    useEffect(() => {
        new Valine({
            el: '#vcomments',
            appId: 'cr4KITm3JbKgl1hlpJLYU5XR-gzGzoHsz',
            appKey: 'R2aKNvFbXQxaDpjvch16DLv2',
            avatar: 'monsterid'
        });
    }, []);

    return (
        <div className={styles.article}>
            <MusicTop
                musicSrc={data.music}
                title={data.title}
            />
            <div className={styles.center_wrapper}>
                <div className={styles.center}>
                    <h1 className={styles.title}>
                        { data.title }
                    </h1>
                    <div className={styles.stuff}>
                        <span className={styles.stuff_item}>
                            { data.date }
                        </span>
                        <span className={styles.stuff_item}>
                            阅读 { data.view_count }
                        </span>
                        <span className={styles.stuff_item}>
                            字数 { data.letter_count }
                        </span>
                        <span className={styles.stuff_item}>
                            评论 0
                        </span>
                        <span className={styles.stuff_item}>
                            喜欢 { data.likes_count }
                        </span>
                    </div>
                    <div ref={contentRef} className={styles.content} />
                </div>
            </div>
            <div className={styles.comment} id="vcomments"></div>
            <div className={styles.relate}>
                <h3 className={styles.relate_title}>
                    <span>相关文章</span>
                    <span className={styles.nav_wrap}>
                        <span 
                            className={styles.to_top} 
                            onClick={goToTop}
                        >
                            返回顶部
                        </span>
                        <span
                            className={styles.link}
                            onClick={goToPrev}
                        >
                            上一篇
                        </span>
                        <span
                            className={styles.link}
                            onClick={goToNext}
                        >
                            下一篇
                        </span>
                    </span>
                </h3>
                <RelateSummary
                    title={'他只是想和你结婚，才不是喜欢你'}
                    summary={'01 在遇见王先生之前，我差一点就和一个认识不到三个月的海归结婚了。 海归是留英。好像是专科毕业被父母送出去的，在英国洗碗刷盘子，和黑人喝酒打架，搂新加坡美女。一混就是...'}
                    imgSrc={'https://isujin.com/wp-content/uploads/2016/08/wallhaven-331343-300x188.jpg'}
                    id={'123'}
                />
            </div>
            <Footer/>
        </div>
    )
}

export default withAutoToTop(memo(Article));