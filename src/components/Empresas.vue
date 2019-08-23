<template>
  <div>
    <h1>{{title}}</h1>
    <input type="text" v-model="search" placeholder="Buscar Empresas" />
    <button @click="sortHighest">Most Rated</button>
    <p>Favorites: {{favs.length}}</p>
    <div v-if="checkedNames.length > 0">
      <span>Checked: {{ checkedNames }}</span>
      <button @click="addToFav(checkedNames)">Add to Favorites</button>
    </div>

    <paginate name="filteredItems" :list="filteredItems" :per="3">
      <div v-for="list in paginated('filteredItems')" :key="list.id">

        <h2>{{list.name | removeSpecialChars | capitalize}}</h2>
        <p>{{list.description}}</p>
        <p>{{list.value}}</p>
        <p>{{list.link}}</p>
        <p>{{list.id}}</p>

        <input type="checkbox" :value='list.name' v-model="checkedNames">
        <label for=list.name>{{list.name}}:</label>

        <button v-on:click="addToFav(list.name)">FAV</button>

      </div>
    </paginate>

    <paginate-links for="filteredItems" :classes="{'ul': 'pagination', 'li': 'page-item','a': 'page-link'}"></paginate-links>

  </div>
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
      const url = './../challengeOne.json'

      this.$http.get(url)
        .then(function (res) {
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
      this.favs.push(id)
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
