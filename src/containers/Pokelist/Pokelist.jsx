import React, {useEffect,  useState }  from "react";
import PokeTile from "../../components/Card/Poketile/PokeTile";



const PokeList = () => {
  const [pokemon, setPokemon] = useState ({results: []}); 
  const [URL, setURL] = useState ('https://pokeapi.co/api/v2/pokemon/?limit=5')

  useEffect(() => {
    fetch(URL)
    .then (response => response.json())
    .then (pokemon => {
      console.log(pokemon);
      setPokemon (pokemon)
    });

  }, [URL]);
  //above we set the pokearr to pokemon,results
  // below we use this pokeArr - 
  const handleClick = () => {
    setURL(pokemon.next)
  }



  const pokeJSX = pokemon.results.map (poke => {
    console.log(poke.name)
    return <PokeTile name = {poke.name} img= {poke.url} /> 
  })


  return <>
  <div>
    {pokeJSX}
  </div>
  <button onClick = {handleClick}>Next</button>
  </>
}

export default PokeList;


// import React, {useEffect,  useState }  from "react";
// import PokeTile from "../../components/Card/Poketile/PokeTile";



// const PokeList = () => {
//   const [pokeArr, setPokeArr] = useState ([]); 

//   useEffect(() => {
//     const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=5'
//     fetch(URL)
//     .then (response => response.json())
//     .then (pokemon => {
//       console.log(pokemon);
//       setPokeArr (pokemon.results)
//     });

//   }, []);
//   //above we set the pokearr to pokemon,results
//   // below we use this pokeArr - 

//   console.log (pokeArr)

//   const pokeJSX = pokeArr.map (poke => {
//     console.log(poke.name)
//     return <PokeTile name = {poke.name} img= {poke.url} /> 
//   })


//   return <div>
//     {pokeJSX}
//   </div>
// }

// export default PokeList;