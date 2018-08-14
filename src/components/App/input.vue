<template>
    <form v-on:submit.prevent>
        <input ref="geocodeInput" 
        placeholder="Search" 
        class="search-location"
        v-model="userInput"
        v-on:keyup.enter="getPizzaPlace"
        onfocus="value = ''" 
        type="text" />
    </form>
</template>

<script>
import zipcodes from 'zipcodes'
import { loadedGoogleMapsAPI } from '../../index'

export default {
  name: `PizzaInput`,
  data: function () {
    return {
      service: [],
      userInput: ''
    }
  },
  mounted: function () {
    loadedGoogleMapsAPI.then(() => {
      this.initPlaces()
    })
  },
  methods: {
    initPlaces() {
      var map = document.querySelector('.places-init')
      this.service = new google.maps.places.PlacesService(map)
    },
    getPizzaPlace(event) {
      let { latitude, longitude } = zipcodes.lookup(this.userInput)
      const request = { query: 'Pizza nearby', radius: 20, location: { lat: latitude, lng: longitude } }

      this.service.textSearch(request, (results, status) => {
        if (status === 'OK') {
          this.setLocation(results)
          this.setMapCenter({ lat: latitude, lng: longitude })
        } else {
          console.log('Geocode was not successful for the following reason: ' + status)
        }
      })
    },
    setLocation(location) {
      return this.$store.commit('updateLocation', location)
    },
    setMapCenter(userInput) {
      return this.$store.commit('updateMapCenter', userInput)
    }
  }
}
</script>
