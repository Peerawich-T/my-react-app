import './Card.css';

function Card({ emoji, isFlipped, onClick }) {
  return (
    <div className="card" onClick={onClick}>
    {isFlipped ? (
      <img src={emoji} alt="pokemon" className="front" />
    ) : (
      <span className="back">❓</span>
    )}
  </div>

  );
}

export default Card;
