import Vue from 'vue'

import { mount } from '@vue/test-utils'
import Empresas from '@/components/Empresas.vue'
import VuePaginate from 'vue-paginate'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VuePaginate)

describe('component has a name', () => {
  it('check title and h1', () => {
    const wrapper = mount(Empresas)
    expect(wrapper.vm.title).toBe('Empresas')
    expect(wrapper.find('h1').text()).toMatch(wrapper.vm.title)
  })

  it('fav button to add to favs', () => {
    const addToFav = jest.fn()
    const wrapper = mount(Empresas, {
      propsData: {
        addToFav
      }
    })
    wrapper.find('button').trigger('click')
    expect(addToFav).toHaveBeenCalled()
  })
})
