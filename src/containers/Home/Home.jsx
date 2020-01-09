import React, { useState, useEffect } from 'react';
import Cover from '../../components/common/Cover/Cover';
import Header from '../../components/common/Header/Header';
import styles from './Home.module.scss';
import Menu from '../../components/common/Menu/Menu';
import PostSummary from '../../components/Post/PostSummary/PostSummary';
import cs from 'classnames';
import { Link } from 'react-router-dom';
import Footer from '../../components/common/Footer/Footer';
import articleService from '../../api/article.service';
import withAutoToTop from '../../components/hoc/withAutoToTop/withAutoToTop';

let page = 1;

function Home({ match }) {
    const [isMenu, setMenu] = useState(false);
    const [articles, setArticles] = useState([]);
    const [article, setArticle] = useState({});

    if(match) {
        page = match.params.page;
    }else {
        page = 1;
    }

    function toggleMenu() {
        setMenu(!isMenu);
    }

    function getArticles() {
        articleService.getArticlesByPage(page).then((res) => {
            setArticles(res.data.articles);
        });
    }

    function getLatestArticle() {
        articleService.getLatestArticle().then(res => {
            setArticle(res.data.article);
        })
    }

    useEffect(() => {
        getArticles();
        getLatestArticle();
    }, [match])

    return (
        <main 
            className={isMenu ? cs(styles.container, styles.menu) : cs(styles.container)}
        >
            <Menu 
                actived={isMenu} 
            />
            <Cover 
                article={article}
            />
            <Header 
                actived={isMenu} 
                toggleMenu={toggleMenu} 
            />
            <div>
                {
                    articles.map((item, index) => (
                        <PostSummary 
                            key={item._id}
                            to={`/article/${item._id}`} 
                            url={item.thumb} 
                            isEven={ index % 2 === 0 }
                            data={item}
                        />
                    ))
                }
            </div>
            <div 
                className={styles.more}
            >
                <Link to={`/page/${parseInt(page) + 1}`}>
                    加载更多
                </Link>
            </div>
            <Footer />
        </main>
    )
}

export default withAutoToTop(Home);