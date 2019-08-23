<template>
  <div id="app">
    <SimpleList msg="Welcome to Your Vue.js App"/>
    <empresas></empresas>

  </div>
</template>

<script>
import SimpleList from './components/SimpleList.vue'
import Empresas from './components/Empresas.vue'

export default {
  name: 'app',
  components: {
    Empresas,
    SimpleList
  }
}
</script>
