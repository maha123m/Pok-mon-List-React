import React from 'react';
import './PokemonCard.css';

const PokemonCard = ({ pokemon, onClick }) => {
    return (
        <div className="pokemon-card" onClick={onClick}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
            <p>Type: {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
            <p>Number: #{pokemon.id}</p> {}
        </div>
    );
};

export default PokemonCard;
