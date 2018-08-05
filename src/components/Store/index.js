import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  location: null,
  mapCenter: {
    lat: 37.5498,
    lng: -77.4588
  },
  pizzaMapLoad: false
}
const getters = {
  // Compute derived state based on the current state. More like computed property.
  getLocations(state) {
    return state.location
  },
  getMapCenter(state) {
    return state.mapCenter
  }
}
const mutations = {
  updateLocation(state, location) {
    state.location = location
  },
  updateMapCenter(state, mapCenter) {
    state.mapCenter = mapCenter
  }
}
const actions = {
  // Get data from server and send that to mutations to mutate the current state
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
