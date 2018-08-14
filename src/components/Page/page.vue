<template>
    <main>
        <pizza-home></pizza-home>
        <pizza-map></pizza-map>
        <pizza-drawer></pizza-drawer>
        <div class="places-init"></div>
    </main>
</template>

<script>
import PizzaHome from '../App/home.vue'
import PizzaMap from '../App/map.vue'
import PizzaDrawer from '../App/drawer.vue'

export default {
  name: `Page`,
  components: {
    PizzaHome,
    PizzaMap,
    PizzaDrawer
  }
}
</script>