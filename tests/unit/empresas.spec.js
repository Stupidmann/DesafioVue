import { shallowMount } from '@vue/test-utils'
import Empresas from '../src/Empresas'

test('component has a name', () => {
  const wrapper = shallowMount(Empresas)
  expect(wrapper.name()).toBe('Empresas')
})
