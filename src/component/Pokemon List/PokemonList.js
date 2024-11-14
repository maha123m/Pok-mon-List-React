import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import PokemonModal from './PokemonModal';
import Loader from './Loader'; 
import ErrorMessage from './ErrorMessage'; 
import './PokemonList.css';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null); 
    const [modalOpen, setModalOpen] = useState(false); 

    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=150';

    useEffect(() => {
        fetchPokemonData();
    }, []);

    const fetchPokemonData = async () => {
        try {
            setLoading(true);
            const offset = Math.floor(Math.random() * 900); 
            const response = await fetch(`${apiUrl}&offset=${offset}`);
            if (!response.ok) {
                throw new Error('Failed to fetch Pokémon data');
            }
            const data = await response.json();

            
            const pokemonDetailsPromises = data.results.map(async (pokemon) => {
                const pokemonResponse = await fetch(pokemon.url);
                return pokemonResponse.json();
            });

            const detailedPokemons = await Promise.all(pokemonDetailsPromises);

            const sortedPokemons = detailedPokemons.sort((a, b) => 
                a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
            );

            setPokemons(sortedPokemons);
            setFilteredPokemons(sortedPokemons);
        } catch (error) {
            setError('Failed to load Pokémon data. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
        if (term === '') {
            setFilteredPokemons(pokemons);
        } else {
            const filtered = pokemons.filter(pokemon =>
                pokemon.name.toLowerCase().includes(term.toLowerCase())
            );
            setFilteredPokemons(filtered);
        }
    };

    const openModal = (pokemon) => {
        setSelectedPokemon(pokemon);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedPokemon(null);
        setModalOpen(false);
    };

    return (
        <div className="pokemon-page">
            <h1>Pokémon Cards</h1>
            <input
                type="text"
                placeholder="Search Pokémon..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="search-bar"
            />
            {loading && <Loader />}
            {error && <ErrorMessage/>}
            <div className="cards-container">
                {filteredPokemons.length > 0 ? (
                    filteredPokemons.map((pokemon, index) => (
                        <PokemonCard
                            key={index}
                            pokemon={pokemon}
                            onClick={() => openModal(pokemon)}
                        />
                    ))
                ) : (
                    <p>No Pokémon found</p>
                )}
            </div>
            {selectedPokemon && (
                <PokemonModal
                    isOpen={modalOpen}
                    onClose={closeModal}
                    pokemonDetails={selectedPokemon}
                />
            )}
        </div>
    );
}    
export default PokemonList;
