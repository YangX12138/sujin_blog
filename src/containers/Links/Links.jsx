import React, { Fragment, useEffect, useState } from 'react';
import Top from '../../components/common/Top/Top';
import styles from './Links.module.scss';
import Button from '../../components/Links/Button/Button';
import linksService from '../../api/links.service';

function Links() {
    const [friends, setFriends] = useState([]);

    function getFriends() {
        linksService.getFriends().then(res => {
            setFriends(res.data);
        })
    }

    useEffect(() => {
        getFriends();
    }, []);

    return (
        <Fragment>
            <Top/>
            <div className={styles.links}>
                <div className={styles.content}>
                    <p>本页面为素锦友情链接承载页面</p>
                    <p>申请友链请新浪微博 <a href="/">@慕骨道人</a>或加入素锦伙伴群：xxxxxxxx申请</p>
                    <p>以下为本站对友情链接网站的要求：</p>
                    <p>多为原创并保持至少每月更新/非SEO、非采集类网站/有一定的设计感or文字感</p>
                </div>
                <ul className={styles.friends}>
                    {
                        friends.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Button>{item.name}</Button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Fragment>
    )
}

export default Links;