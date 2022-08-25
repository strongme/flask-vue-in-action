import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import axios from 'axios'
import vueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(vueAxios, axios)

new Vue({
  render: h => h(App),
}).$mount('#app')
