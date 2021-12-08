import React, { useEffect, useState } from "react";
import SearchBox from "../../components/SearchBox";
import Card from "../../components/Card/Card";




const SearchPokemon= (props) => {


  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon,setPokemon] = useState (null) ; //SETS POKEMON TO NULL SO WHEN PAGE LOADS NOTHING SHOWS 

  //when dealing wiht onjects u git it null or an empty object 

  //we want to fetch when search term changes 
  const URL = ('https://pokeapi.co/api/v2/pokemon/')
  useEffect (() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`; 
    if (searchTerm) {
    fetch(URL).then(response => response.json()).then(pokemon => {
      //we want to set it state so it shows up on the screen 
      setPokemon(pokemon)
    });   }
  }, [searchTerm])

// 1st parameter - in curly braces 
// second parameter is an arrau 

  const handleSubmit = (event) => {
    event.preventDefault (); 
    const input = (event.target[0].value)
    setSearchTerm (input)
  }

  return (
<div>
  <h2> Search for Pokemon</h2>
  <SearchBox handleSubmit = {handleSubmit} /> 
  
  {pokemon && <Card name={pokemon.name} image={pokemon.sprites.back_default} /> }
</div>
  )
}
export default SearchPokemon

// searcht erm linked to state- want to use the search term when we use the api 
//updating when stage changes- component reloads- here we want the page to reload when seatch term changes 
// if second array is empty it will only run once when page run- if ti changes to search term- will upload when search term changes 
//line 37 - if pokemon is truthey- ie not null thenrun card .