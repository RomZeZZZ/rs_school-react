import IFormData from '../interfaces/IForm';
import React from 'react';

function SignCard(card: IFormData) {
  return (
    <div className="card">
      <p>Name: {card.name}</p>
      <p>Surname: {card.surname}</p>
      <p>Country: {card.country}</p>
      <p>Gender: {card.gender}</p>
      <img className="card_img" src={card.img} alt="Profile picture" />
    </div>
  );
}
export default SignCard;
