/**
 *  状态管理全局  按照模块进行状态管理
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

/**
 *  引入状态管理模块
 *  每次引入不同模块需要不同的js引入
 */
import login from './modules/login';

export default new Vuex.Store({
    modules: {
        login,
    }
});
