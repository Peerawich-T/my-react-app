import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from './Card';
import { useState, useEffect } from 'react';
const initialCards = ['🍕', '🍕', '🐶', '🐶', '🚗', '🚗', '🎮', '🎮'];

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
function NewPage  () {
  const location = useLocation()
  const navigate = useNavigate()

  const {msg} = location.state
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
      const data = await res.json();
      
      const pokemonData = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const detail = await res.json();
          
          return detail.sprites.front_default; // image URL
        })
      );

      const duplicated = shuffle([...pokemonData, ...pokemonData]);
      setCards(duplicated);
    };
    fetchPokemon();
  }, []);

  const handleClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first] === cards[second]) {
        setMatched([...matched, first, second]);
      }

      setTimeout(() => setFlipped([]), 1000);
    }
  };

  const isFlipped = (index) => flipped.includes(index) || matched.includes(index);
  return (
    <>
       <h1>This is a new Page.</h1>
       <p>This is a message from Home : {msg}</p>
       <button onClick={() => navigate('/')}>Back To HomePage</button>

       <div className="board">
    {cards.map((card, index) => {
      const isMatched = matched.includes(index);
      const isCurrentlyFlipped = flipped.includes(index);

      // Skip rendering matched cards
      if (isMatched) return <div key={index} className="card hidden" />;

      return (
        <Card
          key={index}
          emoji={card}
          isFlipped={isCurrentlyFlipped}
          onClick={() => handleClick(index)}
        />
      );
    })}
  </div>
    </>
 
  )
}

export default NewPage