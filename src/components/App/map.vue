<template>
    <div id="pizza-map" class="google-map" :class="{'google-map--active': mapActive}"></div>
</template>

<script>
import { loadedGoogleMapsAPI } from '../../index'

export default {
  name: `PizzaMap`,
  data: function () {
    return {
      map: null,
      bounds: null,
      mapActive: false
    }
  },
  mounted: function () {
    loadedGoogleMapsAPI.then(() => {
      this.initMap()
    })
  },
  methods: {
    initMap() {
      const element = document.querySelector('#pizza-map')
      const {lat, lng} = this.$store.getters.getMapCenter
      const options = {
        zoom: 14,
        center: new google.maps.LatLng(lat, lng)
      }
      this.map = new google.maps.Map(element, options)
      return this.map
    },
    loadMarkers(locations) {
      locations.map((locations) => {
        let marker = new google.maps.Marker({
          position: locations.geometry.location,
          map: this.map
        })
        return marker
      })
    }
  },
  computed: {
    locations() {
      return this.$store.state.location
    }
  },
  watch: {
    locations: function (locations) {
      let getMapCenter = this.$store.getters.getMapCenter
      let newCenter = new google.maps.LatLng(getMapCenter.lat, getMapCenter.lng)
      let pizzaLocations = this.$store.getters.getLocations

      this.mapActive = true
      this.map.setCenter(newCenter)
      this.loadMarkers(pizzaLocations)
    }
  }
}
</script>

<style lang='scss' scoped>
  .google-map {
    width: 800px;
    height: 600px;
    margin: 0 auto;
    background: gray;
    display: none;

    &--active {
      display: block;
    }
  }
</style>
