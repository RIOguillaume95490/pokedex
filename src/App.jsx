import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/PokemonCard'
import PokemonCard from './components/PokemonCard'

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

const App =() => {
  const[pokemonIndex, setpokemonIndex]=useState(0);
  
  const clickNext = () =>  setpokemonIndex(pokemonIndex +1);
  const clickPrevious= () =>  setpokemonIndex(pokemonIndex -1);
     
      return ( 
        <>
          <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
          {pokemonIndex > 0 ? (
            <input type="button" value="Précédent" onClick={clickPrevious}/>
            ): null }
          {pokemonIndex < pokemonList.length -1 ? (
            <input type="button" value="suivant" onClick={clickNext}/>
            ): null }
        </>
      )
    }

export default App
