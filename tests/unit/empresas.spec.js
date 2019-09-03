import Vue from 'vue'

import { mount } from '@vue/test-utils'
import Empresas from '@/components/Empresas.vue'
import VuePaginate from 'vue-paginate'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import { shallow } from 'vue-test-utils'
import flushPromises from 'flush-promises'

Vue.use(VueResource)
Vue.use(VuePaginate)
Vue.use(BootstrapVue)

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve())
}))

const { get } = require('axios')

describe('Empresas component', () => {
  const wrapper = mount(Empresas)

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('check title and h1', () => {
    expect(wrapper.vm.title).toBe('Empresas')
    expect(wrapper.find('h1').text()).toMatch(wrapper.vm.title)
  })

  it('Add To Favs method to add to list of favs', () => {
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

  it('mock axios', () => {
    get.mockImplementationOnce(() => Promise.resolve([]))
    const wrapper = shallow(Empresas)
    wrapper.vm.$nextTick(() => {
      expect(get).toHaveBeenCalled()
      expect(get.mock.calls[0][0]).toBe('./../challengeOne.json')
      expect(wrapper.vm.empresas).toEqual([])
    })
  })

  it('mock axios fail', async () => {
    get.mockImplementationOnce(() => Promise.reject(Error))
    let wrapper = shallow(Empresas)
    await flushPromises()
    expect(get).toHaveBeenCalled()
    expect(get.mock.calls[0][0]).toBe('./../challengeOne.json')
    expect(wrapper.vm.error).toBe(true)
  })
})
