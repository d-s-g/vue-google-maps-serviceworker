// index.js

import './scss/main.scss'
import Vue from 'vue'
import store from './components/Store'
import App from './components/App.vue'

const loadedGoogleMapsAPI = new Promise((resolve, reject) => {
  window['GoogleMapsInit'] = resolve
  let GMap = document.createElement('script')

  GMap.setAttribute('src',
    `https://maps.googleapis.com/maps/api/js?key=AIzaSyDE_ta4fRs7Je_SGXo7Qs_niKdu5d9-ig4&libraries=places&callback=GoogleMapsInit`)

  document.head.appendChild(GMap)
})

export {loadedGoogleMapsAPI}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
