import Vue from 'vue'
import App from './App.vue'

if (true) {
  import("./assets/css/main.css");
}

new Vue({
  render: h => h(App)
}).$mount('#app')