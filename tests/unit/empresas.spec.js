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

  it('calls the method when clicked', () => {
    /*  const wrapper = shallow(Empresas)
    const saveMock = jest.fn()
    wrapper.vm.save = saveMock
    wrapper.update()

    wrapper.find('#favButton')[0].trigger('click')
    expect(saveMock.mock.calls.length).toBe(1)  */
    /*  const addToFav = jest.fn()
    const wrapper = mount(Empresas, {
      methods: {
        addToFav
      }
    })
    expect(wrapper.contains('button')).toBe(true) //  contains('#favButton') devuelve falso, no encuentra el id
    const button = wrapper.find('button')
    button.trigger('click')
    expect(addToFav).toHaveBeenCalled() */
    const wrapper = shallowMount(Empresas)
    const addToFav = jest.fn()
    wrapper.setMethods({ method: addToFav })
    wrapper.find('button').trigger('click')
    expect(addToFav).toHaveBeenCalled() //  Expected mock function to have been called, but it was not called.
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
