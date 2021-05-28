import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
  data () {
    return {
      size: ''
    }
  }

}).$mount('#app')
// Make BootstrapVue available throughout your project

Vue.config.productionTip = false
