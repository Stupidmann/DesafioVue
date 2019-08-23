<template>
  <div>
    <h1>{{title}}</h1>
    <input type="text" v-model="search" placeholder="Buscar Empresas" />
    <button @click="sortHighest">Most Rated</button>
    <p>{{favs.length}}</p>
    <div>
      <div v-for="(list) in filteredItems" :key="list.id">

        <h2>{{list.name | removeSpecialChars | capitalize}}</h2>
        <p>{{list.description}}</p>
        <p>{{list.value}}</p>
        <p>{{list.link}}</p>
        <p>{{list.id}}</p>

        <button v-on:click="addToFav(list)">FAV</button>

      </div>
    </div>
  </div>
</template>

<script>
export default {

  created: function () {
    this.getEmpresas()
  },

  data () {
    return {
      title: 'Empresas',
      empresas: [],
      order: [],
      search: '',
      favs: []
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
      return str.replace(/[&\/\\#,+()$~%'":*?<>{}|]/g, '') // [ eliminado para hacer el commit
        .replace(/\s+/g, ' ')
        .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2')
    }
  }
}
</script>
