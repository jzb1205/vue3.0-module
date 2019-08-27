import Vue from 'vue'
import Router from 'vue-router'
// import { Message, MessageBox } from 'element-ui'

Vue.use(Router)
import home from '@/pages/home.vue'
import error from '@/pages/error.vue'
export default new Router({
    mode: 'hash',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '*',
            name: 'error',
            component: error
        },
    ]
})


// 未登录状态，跳转login
// function verifyLogin(next) {
// if (window.sessionStorage.getItem('token')) {
//   next();
// } else {
//     MessageBox.confirm('此操作需要登录才能执行?', '提示', {
//         confirmButtonText: '登陆',
//         cancelButtonText: '取消',
//         type: 'error'
//         }).then(() => {
//             next('/login');
//         }).catch(() => {
//             next(false);       
//     });
// }
// }