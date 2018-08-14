<template>
  <div id="places-init" class="aaaa">
    <pizza-input/>
    <div v-for="locationData in currentLocation" :key="locationData">
      {{ locationData }}
    </div>
  </div>
</template>

<script>
import PizzaInput from './input.vue'

export default {
  name: 'PizzaDrawer',
  components: {
    PizzaInput
  },
  data: function () {
    return {
      returnedLocation: null
    }
  },
  computed: {
    currentLocation() {
      return this.$store.state.currentLocation
    }
  },
  watch: {
    currentLocation: function (currentLocation) {
      this.returnedLocation = this.$store.state.currentLocation
      console.log('current location is: ', this.returnedLocation)
    }
  }
}
</script>

<style lang='scss' scoped>
  .aaaa{
    position: fixed;
    right: 0;
    top: 0;
    width: 300px;
    height: 100vh;
    max-width: 90vw;
    background-color: rebeccapurple;
  }
  </style>
