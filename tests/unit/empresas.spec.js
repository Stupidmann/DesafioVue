import { mount } from '@vue/test-utils'
import Empresas from '@/components/Empresas.vue'

describe('Empresas.vue', () => {
  it('renders component', () => {
    const wrapper = mount(Empresas)
    expect(wrapper.element).toMatchSnapshot()
  })
})
