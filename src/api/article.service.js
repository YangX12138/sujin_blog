import { GET, POST } from '../tools/axios';

class ArticleService {
    getArticleById = (id) => {
        return GET(`/articles/id/${id}`, null);
    }

    addArticle = () => {
        return POST(`/articles/add`, {
            name: 'yang'
        })
    }

    getArticlesByPage = (page) => {
        return GET(`/articles/page/${page}`, null);
    }

    getLatestArticle = () => {
        return GET('/articles/latest', null);
    }

    getNextById = (id) => {
        return GET(`/articles/next/${id}`, null);
    }

    getPrevById = (id) => {
        return GET(`/articles/prev/${id}`, null);
    }
}

export default new ArticleService();