import IForm from 'interfaces/IForm';
import React from 'react';

class SignCard extends React.Component<IForm> {
  render() {
    const { name, surname, country, gender, img } = this.props;

    return (
      <div className="card">
        <p>Name: {name}</p>
        <p>Surname: {surname}</p>
        <p>Country: {country}</p>
        <p>Gender: {gender}</p>
        <img className="card_img" src={img} alt="Profile picture" />
      </div>
    );
  }
}
export default SignCard;
