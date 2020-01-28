import axios from 'axios';
import baseURL from '../constants/baseUrl';

const instance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
});

export const GET = (url, params) => {
    return new Promise((resolve, reject) => {
        instance.get(url, {
            params
        }).then((res) => {
            resolve(res);
        }).catch((error) => {
            reject(error);
        })
    });
}

export const POST = (url, params) => {
    return new Promise((resolve, reject) => {
        instance.post(url, params).then((res) => {
            resolve(res);
        }).catch((error) => {
            reject(error);
        })
    });
}