import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  location: null,
  currentLocation: null,
  mapCenter: {
    lat: 37.5498,
    lng: -77.4588
  },
  pizzaMapLoad: false
}
const getters = {
  getLocations(state) {
    return state.location
  },
  getCurrentLocation(state) {
    return state.currentLocation
  },
  getMapCenter(state) {
    return state.mapCenter
  }
}
const mutations = {
  updateLocation(state, location) {
    state.location = location
  },
  updateCurrentLocation(state, currentLocation) {
    state.currentLocation = currentLocation
  },
  updateMapCenter(state, mapCenter) {
    state.mapCenter = mapCenter
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
