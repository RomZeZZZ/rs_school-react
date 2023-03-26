import React, { RefObject } from 'react';
import '../styles/form.css';
import IForm from 'interfaces/IForm';
import ISignState from 'interfaces/ISignState';
class SignUp extends React.Component<object, ISignState> {
  inputName: RefObject<HTMLInputElement>;
  inputSurname: RefObject<HTMLInputElement>;
  inputCountry: RefObject<HTMLSelectElement>;
  inputGender: RefObject<HTMLInputElement>;
  inputConsent: RefObject<HTMLInputElement>;
  inputImg: string | null;
  constructor(props: IForm) {
    super(props);
    this.state = {
      cards: [],
    };
    this.inputName = React.createRef();
    this.inputSurname = React.createRef();
    this.inputCountry = React.createRef();
    this.inputGender = React.createRef();
    this.inputConsent = React.createRef();
    this.inputImg = null;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = this.inputName.current.value;
    const country = this.inputCountry.current.value;
    const text = this.inputSurname.current.value;
    const gender = this.inputGender.current.checked ? 'Female' : 'Male';
    const consent = this.inputConsent.current;
    const img = this.inputImg === null ? 'https://i.ibb.co/cCX7H8d/pngegg.png' : this.inputImg;
    const newCard = { name, country, text, gender, consent, img };
    const cards = [...this.state.cards, newCard];
    console.log(consent?.value);
    this.setState({ cards });
    this.inputImg = null;
    event.currentTarget.reset();
  }
  handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    reader.readAsDataURL(file!);
    reader.onload = (e) => {
      console.log(e.target?.result);
      this.inputImg = e.target?.result as string;
    };
  }
  render() {
    const { cards } = this.state;
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="form_label">
            Name:
            <input
              placeholder="Enter your name"
              className="form_input_text"
              type="text"
              ref={this.inputName}
            />
          </label>
          <label className="form_label">
            Surname:
            <input
              placeholder="Enter your surname"
              className="form_input_text"
              type="text"
              ref={this.inputSurname}
            />
          </label>
          <label className="form_label">
            Picture:
            <label className="input_file_label" htmlFor="files">
              {' '}
              Select picture
            </label>
            <input
              className="input_file"
              id="files"
              name="userfile"
              type="file"
              onChange={this.handleFileUpload}
            />
          </label>
          <label className="form_label">
            Country:
            <select className="form_input_select" defaultValue="Choise" ref={this.inputCountry}>
              <option value="Choise">Your country</option>
              <option value="Belarus">Belarus</option>
              <option value="Poland">Poland</option>
              <option value="Germany">Germany</option>
              <option value="England">England</option>
            </select>
          </label>
          <label className="form_label">
            Gender:
            <input type="radio" name="gender" value="male" ref={this.inputGender} /> Male
            <input type="radio" name="gender" value="female" ref={this.inputGender} /> Female
          </label>
          <label className="form_label">
            <input type="checkbox" ref={this.inputConsent} />I consent to my personal data
          </label>
          <button type="submit">Submit</button>
        </form>
        <div className="field_card">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <p>Name: {card.name}</p>
              <p>Surname: {card.text}</p>
              <p>Country: {card.country}</p>
              <p>Gender: {card.gender}</p>
              <img className="card_img" src={card.img} alt="Profile picture" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default SignUp;
