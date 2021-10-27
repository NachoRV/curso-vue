import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'
import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonOptions Components', () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons
      }
    } )
  })

  test('debe hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('debe de mostrar las 4 opcines correctamente', () => {

    const liTags = wrapper.findAll('li')
    expect(liTags.length).toBe(4)
    expect(liTags[0].text()).toBe('pikachu')
    expect(liTags[1].text()).toBe('charmander')
    expect(liTags[2].text()).toBe('venusaur')
    expect(liTags[3].text()).toBe('mew')

  })

  test('debe emitir "selectionPokemon" con los parametros al hacer click', () => {
    const [li1, li2, li3, li4] = wrapper.findAll('li')
    li1.trigger('click')
    li2.trigger('click')
    li3.trigger('click')
    li4.trigger('click')

    expect(wrapper.emitted('selectionPokemon').length).toBe(4)
    expect(wrapper.emitted('selectionPokemon')[0]).toEqual([pokemons[0].id])
    expect(wrapper.emitted('selectionPokemon')[1]).toEqual([pokemons[1].id])
    expect(wrapper.emitted('selectionPokemon')[2]).toEqual([pokemons[2].id])
    expect(wrapper.emitted('selectionPokemon')[3]).toEqual([pokemons[3].id])
  })
})