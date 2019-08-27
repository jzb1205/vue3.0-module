import axios from 'axios'
import { Message } from 'element-ui'

axios.defaults.timeout = 20000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.patch['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.put['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.delete['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = '/api'

axios.interceptors.request.use(
    config => {
        let token = sessionStorage.getItem("token") || '';
        if (token) {
            config.headers.Authorization = `${token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
)
axios.interceptors.request.use(
    config => {
        let token = sessionStorage.getItem("token") || '';
        if (token) {
            config.headers.Authorization = `${token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
)
axios.interceptors.response.use(function (response) {
    if (response.data.code === '003') {
        Message({
            message: '登录信息超时，请重新登录!',
            type: 'error'
        })
        return
    }
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
/**
 * 封装post方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}


/**
 * 封装get请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, params)
            .then(response => {
                if (response) {
                    resolve(response.data);
                }
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}

/**
 * 封装del请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function del(url, params) {
    return new Promise((resolve, reject) => {
        axios.delete(url, { data: params })
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}