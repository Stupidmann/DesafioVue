<template>
  <b-container>
    <div class="header">
      <h1>{{title}}</h1>
      <input type="text" v-model="search" placeholder="Buscar Empresas" />
      <button @click="sortHighest">Most Rated</button>
      <div v-if="checkedNames.length > 0">
        <span>Checked: {{ checkedNames }}</span>
        <button id="favButton" @click="addToFav(checkedNames)">Add to Favorites</button>
      </div>
    </div>
    <h4>Favorites: {{favs.length}}</h4>

    <paginate name="filteredItems" :list="filteredItems" :per="3">
      <div v-for="list in filteredItems" :key="list.id" class="justify-content-md-center">

        <h2>{{list.name | removeSpecialChars | capitalize}}</h2>
        <p>{{list.description}}</p>
        <p>{{list.value}}</p>
        <p>{{list.link}}</p>
        <p>{{list.id}}</p>

        <input type="checkbox" :value='list.name' v-model="checkedNames">
        <label for=list.name>{{list.name}}:</label>

        <button id="favButton" v-on:click="addToFav(list.name)">FAV</button>

      </div>
    </paginate>

    <paginate-links for="filteredItems" :classes="{'ul': 'pagination', 'li': 'page-item','a': 'page-link'}" class="justify-content-md-center"></paginate-links>

  </b-container>
</template>

<script>
export default {

  created: function () {
    this.getEmpresas()
  },

  data () {
    return {
      checkedNames: [],
      title: 'Empresas',
      empresas: [],
      order: [],
      search: '',
      favs: [],
      paginate: ['filteredItems']
    }
  },
  methods: {
    getEmpresas () {
      const axios = require('axios')
      const url = './../challengeOne.json'
      // this.$http.get(url)
      return axios.get(url)
        .then((res) => {
          console.log(res.data.empresas)
          //  this.empresas = (res.data.empresas)
          //  data = (res.data.empresas)
          this.empresas = (res.data.empresas)
        })
        .catch(function (error) {
          console.log('Error: ', error)
        })
    },
    sortHighest () {
      this.empresas.sort((a, b) => parseInt(a.value) < parseInt(b.value) ? 1 : -1)
    },
    addToFav (id) {
      this.favs = this.favs.concat(id)
      this.checkedNames = []
      console.log(this.favs)
    }

  },
  computed: {
    filteredItems () {
      return this.empresas.filter(item => {
        return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
    }
  },
  filters: {
    capitalize (val) {
      if (!val) return ''
      val = val.toString()
      return val.charAt(0).toUpperCase() + val.slice(1)
    },
    cleanString (val) {
      if (!val) return ''
      val = val.toString()
      return val
    },
    removeAccents (val) {
      return val
        .replace(/á/g, 'a')
        .replace(/é/g, 'e')
        .replace(/í/g, 'i')
        .replace(/ó/g, 'o')
        .replace(/ú/g, 'u')
    },
    removeSpecialChars (str) {
      return str.replace(/&\/\\#,+()$~%'":*?<>{}|]/g, '') // [ antes del '&' eliminado para hacer el commit
        .replace(/\s+/g, ' ')
        .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2')
    }
  }
}
</script>

<style>
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center
    }
</style>
