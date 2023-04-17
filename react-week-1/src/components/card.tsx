import React from 'react';
import ICardProps from '../interfaces/ICardProps';

function Card({ card, onClick }: { card: ICardProps; onClick: () => void }) {
  return (
    <div data-testid="card" className="card_container" onClick={onClick}>
      <img className="card_container_img" loading="lazy" src={card.image} alt="card" />
      <div className="card_container_info">
        <div>Name: {card.name}</div>
        <div>Species: {card.species}</div>
        <div>Gender: {card.gender}</div>
        <div>Status: {card.status}</div>
      </div>
    </div>
  );
}
export default Card;
