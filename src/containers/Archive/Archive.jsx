import React, { Fragment } from 'react';
import Top from '../../components/common/Top/Top';
import styles from './Archive.module.scss';

const data = [{
    year: '2018',
    months: [{
        article_num: 1,
        month: 11,
        articles: [{
            title: '你走了真好, 不然总担心你要走',
            day: 24,
            like_count: 130,
            url: '/'
        },{
            title: '哈哈哈',
            day: 23,
            like_count: 10,
            url: '/'
        }]
    }]
}];

function Archive() {
    return (
        <Fragment>
            <Top />
            <div className={styles.archive}>
                <div className={styles.content}>
                    <div>
                        {
                            data.map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        <h3 className={styles.year}>{item.year} 年</h3>
                                        <ul className={styles.mon_list}>
                                            {
                                                item.months.map((it, idx) => {
                                                    return (
                                                        <li key={`month_${idx}`}>
                                                            <span className={styles.mon}>{it.month} 月 <em>( {it.article_num} 篇文章 )</em></span>
                                                            <ul className={styles.post_list}>
                                                                {
                                                                    it.articles.map((article, i) => {
                                                                        return (
                                                                            <li key={`article_${i}`}>
                                                                                {article.day}日:
                                                                                <a href="/">{article.title}</a>
                                                                                <em>({article.like_count})</em>
                                                                            </li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </Fragment>
                                )        
                            })
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Archive;