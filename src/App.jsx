// App.jsx
import "./App.scss";
import Card from "./components/Card/Card";
import SearchBox from "./components/SearchBox";
import SearchPokemon from "./containers/SearchPokemon/SearchPokemon";
import PokeList from "../src/containers/Pokelist/Pokelist"

const App = () => {
  // fetch the poke api 



  return (
    <div className="app">
      <SearchPokemon /> 
   
      <PokeList />
   
    </div>
  );
};

export default App;