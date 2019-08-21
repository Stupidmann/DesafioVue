<template>
  <div id="app">
    <SimpleList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import SimpleList from './components/SimpleList.vue'

export default {
  name: 'app',
  components: {
    SimpleList
  }
}
</script>
