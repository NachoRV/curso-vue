import { getPokemons, getPokemonNames, getPokemonOptions } from '@/helpers/getPokemonOptions.js'

describe('getPokemonsOptions helpers', () => {
  test('debe regreasr un arreglo de numeros', ()=> {
    const pokemons = getPokemons()
    expect(pokemons.length).toBe(650)
  })

  test('debe retornar un arreglo de 4 pokemons con sus nombres', async () => {
    const pokemons = await getPokemonNames([1,2,3,4])

    const pokemosArr =     [
      { name: 'bulbasaur', id: 1 },
      { name: 'ivysaur', id: 2 },
      { name: 'charmander', id: 3 },
      { name: 'venusaur', id: 4 }
    ]
    expect(pokemons).toStrictEqual(pokemosArr)

  })

  test('debe retornar un arreglo de 4 pokemons con sus aleatorios', async () => {
    const pokemons = await getPokemonOptions()

    const pokemosArr =     [
      { name: expect.any(String), id:expect.any(Number) },
      { name: expect.any(String), id:expect.any(Number) },
      { name: expect.any(String), id:expect.any(Number) },
      { name: expect.any(String), id:expect.any(Number) }
    ]
    expect(pokemons).toEqual(pokemosArr)

  })
})