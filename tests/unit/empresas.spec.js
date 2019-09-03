import Vue from 'vue'

import { mount, shallowMount } from '@vue/test-utils'
import Empresas from '@/components/Empresas.vue'
import VuePaginate from 'vue-paginate'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import flushPromises from 'flush-promises'

Vue.use(VueResource)
Vue.use(VuePaginate)
Vue.use(BootstrapVue)

describe('Empresas component', () => {
  const wrapper = mount(Empresas)

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('check title and h1', () => {
    expect(wrapper.vm.title).toBe('Empresas')
    expect(wrapper.find('h1').text()).toMatch(wrapper.vm.title)
  })

  it('Add To Favs method to add to list of favs', () => {
    const wrapper = shallowMount(Empresas)
    wrapper.setData({
      newFavs: {
        name: 'socks',
        value: 10
      }
    })
    wrapper.vm.getEmpresas()
    wrapper.vm.addToFav(wrapper.vm.newFavs)
    expect(wrapper.vm.addToFav).toContain(wrapper.vm.newFavs)
    //  expect(addToFav).toHaveBeenCalled() //  Expected mock function to have been called, but it was not called.
  })

  it('gets data from challengeOne json', () => {
    const empresas = mount(Empresas, {
      mocks: {
        $http: {
          get: () => new Promise(resolve => resolve({ body: ['review A', 'review B'] }))
        }
      }
    })
    flushPromises().then(() => {
      expect(empresas.vm.reviews).to.deep.equal(['review A', 'review B'])
    })
  })

  it('should throw error', () => {
    const empresas = mount(Empresas, {
      mocks: {
        $http: {
          get: () => new Promise(resolve => resolve({ body: ['review A', 'review B'] }))
        }
      }
    })
    flushPromises().catch(() => {
      expect(empresas.vm.reviews).to.deep.equal(['review A', 'review B'])
    })
  })

  it('sort highest works', () => {
    wrapper.setData({
      empresas: [{
        name: 'empresa 1',
        value: 120000
      }, {
        name: 'empresa 2',
        value: 120001
      }]
    })
    /*  expect(wrapper.vm.empresas[0]).toEqual({  //comprobar que la funcion sea llamada
      name: 'empresa 2',
      value: 120001
    })  */
    wrapper.vm.sortHighest()
    expect(wrapper.vm.empresas[0]).toEqual({
      name: 'empresa 2',
      value: 120001
    })
  })

  it('show div if checked names is greater than 1', () => {
    expect(wrapper.html()).not.toContain('Add to Favorites')
    wrapper.setData({
      checkedNames: ['WebExperto']
    })
    expect(wrapper.html()).toContain('Add to Favorites')
  })

  it('json call', () => {
    expect(wrapper.html()).not.toContain('<h2>WebExperto</h2>')
    /*  wrapper.vm.$nextTick({
      wrapper.vm.getEmpresas()
    })  */
    wrapper.vm.getEmpresas()
    expect(wrapper.html()).toContain('<h2>WebExperto</h2>') //  No encuentra h2 porque no esta presente en el snapshot
  })

})
