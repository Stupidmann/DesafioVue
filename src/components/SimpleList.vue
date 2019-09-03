<template>

<div class="container">
  <div class="row justify-content-center">
  <ul class="col-4 list-group">
    <b-list-group>
      <li class="list-group-item" v-b-toggle.collapse-1 variant="primary" v-for="offer in offers" :key="offer.id"
        @click="mostrarDetalles(offer)">
        <b-list-group-item href="#">
        {{ offer.title }}
        <span> - ${{offer.price}}</span>
        </b-list-group-item>
      </li>
  </b-list-group>
 </ul>
</div>
    <div class="container">
      <b-row class="justify-content-md-center">
        <b-collapse id="collapse-1" class="col-8" v-show="clicked">
          <!--<button @click="ocultar">Close</button>-->
          <div class="mt-3">
            <b-card-group deck>
              <b-card bg-variant="light" :header=title class="text-center">
                <h2>Details of: {{title}}</h2>
                <b-card-text>Price: {{price}}</b-card-text>
                <b-card-text>From: {{from}}</b-card-text>
                <b-card-text>To: {{to}}</b-card-text>
                <b-card-text>State: {{state}}</b-card-text>
                <b-card-text>Created At: {{created_at}}</b-card-text>
                <b-card-text>Special Price: {{specialPrice}}</b-card-text>
                <b-card-text v-html="description"></b-card-text>
              </b-card>
            </b-card-group>
          </div>
        </b-collapse>
      </b-row>
    </div>
</div>

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
      ],
      id: Number,
      title: '',
      from: '',
      to: '',
      state: '',
      created_at: '',
      price: '',
      specialPrice: undefined,
      description: '',
      clicked: false

    }
  },
  methods: {
    mostrarDetalles (offer) {
      this.clicked = true
      this.title = offer.title
      this.price = offer.price
      this.from = offer.from
      this.to = offer.to
      this.state = offer.state
      this.created_at = offer.created_at
      this.specialPrice = offer.specialPrice
      this.description = offer.description
    },
    ocultar () {
      this.clicked = false
    }
  }
}
</script>
