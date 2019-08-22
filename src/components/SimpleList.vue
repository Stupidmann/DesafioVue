<!--<template>
  <ul>
    <li v-for="offer in offers" :key="offer.id">{{ offer.title }}</li>
  </ul>
</template>

<script>
export default {
  name: 'simple-list',
  data () {
    return {
      offers: [
        {
          id: '1',
          title: 'oferta 1',
          from: 'userId_1',
          to: 'userId_2',
          state: 'pending',
          created_at: '20-12-2018',
          price: 45,
          specialPrice: true,
          description: '<b>This is a large text</b><br>Description 1:<br> Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.',
          tags: [
            {
              name: 'Offer',
              color: 'blue'
            },
            {
              name: 'Only for 2 hours',
              color: 'red'
            }
          ]
        },
        {
          id: '2',
          title: 'oferta 2 - esta es una oferta',
          from: 'userId_1',
          to: 'userId_3',
          state: 'pending',
          created_at: '15-01-2019',
          price: 55,
          specialPrice: false,
          description: "<b>This is a large text</b><br>Description 1:<br>Hi. <br>A market, or marketplace, is a location where people regularly gather for the purchase and sale of provisions, livestock, and other goods. In different parts of the world, a market place may be described as a souk (from the Arabic), bazaar (from the Persian), a fixed mercado (Spanish), or itinerant tianguis (Mexico), or palengke (Philippines). Some markets operate daily and are said to be permanent markets while others are held once a week or on less frequent specified days such as festival days and are said to be periodic markets. The form that a market adopts depends on its locality's population, culture, ambient and geographic conditions. <br>The term market covers many types of trading, as market squares, market halls and food halls, and their different varieties. Due to this, marketplaces can be situated both outdoors and indoors.",
          tags: [
            {
              name: 'My first offer',
              color: 'blue'
            }
          ]
        },
        {
          id: '3',
          title: 'oferta 3 - año día',
          from: 'userId_1',
          to: 'userId_3',
          state: 'pending',
          created_at: '12-02-2019',
          price: 77,
          specialPrice: false,
          description: '<b>This is a large text</b><br>Description 1:<br>Popular Linux distributions include Debian, Fedora, and Ubuntu. Commercial distributions include Red Hat Enterprise Linux and SUSE Linux Enterprise Server. Desktop Linux distributions include a windowing system such as X11 or Wayland, and a desktop environment such as GNOME or KDE Plasma 5. Distributions intended for servers may omit graphics altogether, or include a solution stack such as LAMP. Because Linux is freely redistributable, anyone may create a distribution for any purpose.',
          tags: [
            {
              name: 'Offer',
              color: 'blue'
            },
            {
              name: 'Good offer',
              color: 'Orange'
            },
            {
              name: 'With description',
              color: 'green'
            }
          ]
        },
        {
          id: '4',
          title: 'oferta 4',
          from: 'userId_1',
          to: 'userId_2',
          state: 'pending',
          created_at: '22-12-2018',
          price: 44,
          specialPrice: true,
          description: '<b>This is a large text</b><br>Description 1:<br> Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.',
          tags: [
            {
              name: 'Offer',
              color: 'blue'
            },
            {
              name: 'Only for 2 hours',
              color: 'red'
            }
          ]
        },
        {
          id: '5',
          title: 'oferta 5 - esta es una oferta',
          from: 'userId_1',
          to: 'userId_3',
          state: 'pending',
          created_at: '17-01-2019',
          price: 65,
          specialPrice: false,
          description: "<b>This is a large text</b><br>Description 1:<br>Hi. <br>A market, or marketplace, is a location where people regularly gather for the purchase and sale of provisions, livestock, and other goods. In different parts of the world, a market place may be described as a souk (from the Arabic), bazaar (from the Persian), a fixed mercado (Spanish), or itinerant tianguis (Mexico), or palengke (Philippines). Some markets operate daily and are said to be permanent markets while others are held once a week or on less frequent specified days such as festival days and are said to be periodic markets. The form that a market adopts depends on its locality's population, culture, ambient and geographic conditions. <br>The term market covers many types of trading, as market squares, market halls and food halls, and their different varieties. Due to this, marketplaces can be situated both outdoors and indoors.",
          tags: [
            {
              name: 'My first offer',
              color: 'blue'
            }
          ]
        },
        {
          id: '6',
          title: 'oferta 6 - año día',
          from: 'userId_1',
          to: 'userId_3',
          state: 'pending',
          created_at: '12-02-2019',
          price: 67,
          specialPrice: false,
          description: '<b>This is a large text</b><br>Description 1:<br>Popular Linux distributions include Debian, Fedora, and Ubuntu. Commercial distributions include Red Hat Enterprise Linux and SUSE Linux Enterprise Server. Desktop Linux distributions include a windowing system such as X11 or Wayland, and a desktop environment such as GNOME or KDE Plasma 5. Distributions intended for servers may omit graphics altogether, or include a solution stack such as LAMP. Because Linux is freely redistributable, anyone may create a distribution for any purpose.',
          tags: [
            {
              name: 'Offer',
              color: 'blue'
            },
            {
              name: 'Good offer',
              color: 'Orange'
            },
            {
              name: 'With description',
              color: 'green'
            }
          ]
        }
      ]
    }
  }
}
</script>-->
<template>
  <div>
    <h1>{{title}}</h1>
    <input type="text" v-model="search" placeholder="Buscar Empresas" />
    <button >Ordenar Por Precio</button>
    <div>
      <div v-for="(list) in filteredItems" :key="list.id">
        <h2>{{list.name | removeSpecialChars | capitalize}}</h2>
        <p>{{list.description}}</p>
        <p>{{list.value}}</p>
        <p>{{list.link}}</p>
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
      search: ''
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
      return str.replace(/&\/\\#,+()$~%'":*?<>{}|]/g, '')
        .replace(/\s+/g, ' ')
        .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2')
    }
  }
}
</script>
