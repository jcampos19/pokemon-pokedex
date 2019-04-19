import React from 'react';
import PokeCell from './PokeCell';
import { pokeClasses } from '../pokeClasses';
import '../style/pokedex.css';


//import react package
//import the pokemonList style
//create a new function named PokemonList
//return an empty section with className poke-list
//export the newly created function

const PokeList = () => {
    return (
        <section className="poke-list">
            <PokeCell />
            <PokeCell />
            <PokeCell />
            <PokeCell />
        </section>
    )
}

//create a new array of PokeCells with info of each element in the pokeClasses array
//add map to our pokeClasses array and return a PokeCell tag that stored in the cell variable
const cells = pokeClasses.map(pokeClass => <PokeCell />)

export default PokeList;


