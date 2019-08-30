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

let wrapper

beforeEach(() => {
  wrapper = shallowMount(SimpleList, {
    propsData: {},
    mocks: {},
    stubs: {},
    methods: {}
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('SimpleList', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = mount(SimpleList)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('li exists', () => {
    wrapper = mount(SimpleList)
    /*  wrapper.find('ul')
    expect(wrapper.find('ul')).toBeTruthy() */
    expect(wrapper.findAll('li').length).toBe(6)
    expect(wrapper.contains('li')).toBe(true)
  })

  it('load details when clicked', () => {
    wrapper = mount(SimpleList, {
      propsData: {
        title: 'titulo1'
      }
    })
    expect(wrapper.text()).toBe('titulo1')
  })
})
