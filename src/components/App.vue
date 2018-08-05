// App.vue

<template>
  <page></page>
</template>

<script>

import Page from './Page/page.vue'

export default {
  name: `App`,
  components: {
    Page
  }
}
</script>

<style lang="scss" scoped>

* {
  background-color: $globalvar;
}

</style>