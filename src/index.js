// index.js

import './scss/main.scss'
import Vue from 'vue'
import AppComponent from './components/AppComponent.vue'

new Vue({
  render: h => h(AppComponent)
}).$mount('#app')
