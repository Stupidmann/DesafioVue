import { shallowMount } from '@vue/test-utils'
import SimpleList from '@/components/SimpleList'

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
})
