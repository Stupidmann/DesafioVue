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

describe('component has a name', () => {
  it('renders correctly', () => {
    const wrapper = mount(Empresas)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('check title and h1', () => {
    const wrapper = mount(Empresas)
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
    //  const addToFav = jest.fn()
    wrapper.vm.getEmpresas()
    wrapper.vm.addToFav(wrapper.vm.newFavs)
    expect(wrapper.vm.addToFav).toContain(wrapper.vm.newFavs)
    //  expect(addToFav).toHaveBeenCalled() //  Expected mock function to have been called, but it was not called.
  })

  it('gets data from challengeOne json', () => {
    //  const wrapper = mount(Empresas) funciona aunque no se bien como
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

  it('sort highest works', () => {
    const wrapper = mount(Empresas)
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
})
