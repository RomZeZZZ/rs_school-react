import React from 'react';
import ICardProps from '../interfaces/ICardProps';

function Card({ card }: { card: ICardProps }) {
  return (
    <div data-testid="card" className="card_container">
      <img className="card_container_img" loading="lazy" src={card.thumbnail} alt="card" />
      <div className="card_container_info">
        <div>{card.title}</div>
        <div>Price: {card.price}$ </div>
        <div>Rating: {card.rating}</div>
      </div>
    </div>
  );
}
export default Card;
