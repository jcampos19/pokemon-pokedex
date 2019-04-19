import React, { Component } from 'react';
import PokemonList from './PokemonList';
import '../style/App.css';

class App extends Component {
    //in the constructor we call super
    constructor() { 
        super();
        this.state = {};
    }

    //returns jsx syntax. Can return one element 
    render() {
        return (
            <div className="App">
                <PokemonList />
            </div>
        );
    }
}

export default App;
