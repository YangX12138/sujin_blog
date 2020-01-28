// import { GET } from '../tools/axios';

class LinksService {
    getFriends() {
        // return GET('');
        return new Promise((resolve) => {
            resolve({
                data: [{
                    link: '/',
                    title: '专注和分享，你我的电影世界',
                    name: 'Movies'
                },{
                    link: '/',
                    title: '最赞的桌面美化社区',
                    name: 'RAINMETER.CN'
                },{
                    link: '/',
                    title: '',
                    name: '你若盛开·清风迅来'
                },{
                    link: '/',
                    title: '专注和分享，你我的电影世界',
                    name: 'Movies'
                },{
                    link: '/',
                    title: '最赞的桌面美化社区',
                    name: 'RAINMETER.CN'
                },{
                    link: '/',
                    title: '',
                    name: '你若盛开·清风迅来'
                },{
                    link: '/',
                    title: '专注和分享，你我的电影世界',
                    name: 'Movies'
                },{
                    link: '/',
                    title: '最赞的桌面美化社区',
                    name: 'RAINMETER.CN'
                },{
                    link: '/',
                    title: '',
                    name: '你若盛开·清风迅来'
                }]
            })
        })
    }
}

export default new LinksService();