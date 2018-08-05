<template>
  <div class="home">
    <p>Home</p>
    <h1>Pecksok.Pizza</h1>
    <h3>Tagline Tagline Tagline</h3>
    <pizza-input></pizza-input>
  </div>
</template>

<script>
import PizzaInput from './input.vue'

export default {
  name: `PizzaHome`,
  components: {
    PizzaInput
  }
}
</script>
