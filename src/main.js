import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './app.css'

Vue.config.productionTip = false

Vue.config.ignoredElements = [/^ion-/]

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
