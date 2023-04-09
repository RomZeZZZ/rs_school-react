import ICardProps from '../interfaces/ICardProps';
import React, { useEffect, useState } from 'react';
import '../styles/modal.css';

function Modal(props: { id: number | null; onClick: () => void }) {
  const [character, setCharacterDb] = useState<ICardProps>();
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${props.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCharacterDb(data);
        console.log(character);
        console.log(data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="modal_overlay">
      {character ? (
        <div className="modal_card_container">
          <div className="modal_close" onClick={props.onClick}>
            &#10005;
          </div>
          <img
            className="modal_card_container_img"
            loading="lazy"
            src={character.image}
            alt="card"
          />
          <div className="modal_card_container_info">
            <div>Name: {character.name}</div>
            <div>Species: {character.species}</div>
            <div>Gender: {character.gender}</div>
            <div>Status: {character.status}</div>
            <div>Location: {character.location.name}</div>
            <div>Origin: {character.origin.name}</div>
          </div>
        </div>
      ) : (
        <div className="modal_processing">Processing...</div>
      )}
    </div>
  );
}
export default Modal;
