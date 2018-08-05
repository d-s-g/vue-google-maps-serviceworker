<template>
    <main>
        <pizza-home></pizza-home>
        <pizza-drawer></pizza-drawer>
        <pizza-map></pizza-map>
    </main>
</template>

<script>
import PizzaDrawer from '../App/drawer.vue'
import PizzaHome from '../App/home.vue'
import PizzaMap from '../App/map.vue'

export default {
  name: `Page`,
  components: {
    PizzaDrawer,
    PizzaHome,
    PizzaMap
  }
}
</script>