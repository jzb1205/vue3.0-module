import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import layer from "layui-layer"
import Moment from 'moment'
//本地封装
import util from '@/utils/util'
import localStorage from '@/utils/localStorage'

//样式重置
import '@/assets/css/reset.css'

Vue.use(ElementUI)

Vue.prototype.$layer = layer
Vue.prototype.$util = util
Vue.prototype.$localStorage = localStorage

//时间格式过滤器
Vue.filter('timeFormat', function (value, type = 'YYYY-MM-DD') {
    if (value) {
        return Moment(value).format(type)
    } 
    return value
})
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
