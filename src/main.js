import Vue from 'vue'
import App from './App.vue' 
import router from './router' 
import {Toast, Field ,Form ,RadioGroup, Radio, ActionSheet ,Button, Dialog } from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'
Vue.use(Toast)
Vue.use(Field)
Vue.use(Form)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(ActionSheet)
Vue.use(Button)
Vue.use(Dialog)
Vue.prototype.$toast = Toast
Vue.prototype.$dialog = Dialog
Vue.config.devtools = true
Vue.config.productionTip = false

new Vue({
  router, 
  render: h => h(App)
}).$mount('#app')
