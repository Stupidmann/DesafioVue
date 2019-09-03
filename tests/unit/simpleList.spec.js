import { shallowMount, mount } from '@vue/test-utils'
import SimpleList from '@/components/SimpleList'
import Vue from 'vue'
import VuePaginate from 'vue-paginate'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueResource)
Vue.use(VuePaginate)
Vue.use(BootstrapVue)

//  Template

/*  beforeEach(() => {
  wrapper = shallowMount(SimpleList, {
    propsData: {},
    mocks: {},
    stubs: {},
    methods: {}
  })
})

afterEach(() => {
  wrapper.destroy()
})  */

describe('SimpleList', () => {
  const wrapper = mount(SimpleList)

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('li exists', () => {
    expect(wrapper.findAll('li').length).toBe(6)
    expect(wrapper.contains('li')).toBe(true)
  })

  it('load details when clicked', () => {
    expect(wrapper.html()).toContain('oferta 1')
  })

  it('show details when clicked', () => {
    const liClick = wrapper.find('li')
    liClick.trigger('click')
    expect(wrapper.html()).toContain('<h2>Details of: oferta 1</h2>')
  })
  
})
