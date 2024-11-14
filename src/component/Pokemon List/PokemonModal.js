import React from 'react';
import './PokemonModal.css';

const PokemonModal = ({ isOpen, onClose, pokemonDetails }) => {
    if (!isOpen) return null;

   
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{pokemonDetails.name}</h2>
                <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
                <p><strong>HP:</strong> {pokemonDetails.stats[0].base_stat}</p>
                <p><strong>Attack:</strong> {pokemonDetails.stats[1].base_stat}</p>
                <p><strong>Defense:</strong> {pokemonDetails.stats[2].base_stat}</p>
                <p><strong>Special Attack:</strong> {pokemonDetails.stats[3].base_stat}</p>
                <p><strong>Special Defense:</strong> {pokemonDetails.stats[4].base_stat}</p>
                <p><strong>Speed:</strong> {pokemonDetails.stats[5].base_stat}</p>
            </div>
        </div>
    );
};

export default PokemonModal;
