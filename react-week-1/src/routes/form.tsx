import React, { RefObject } from 'react';
import '../styles/form.css';
import IForm from 'interfaces/IForm';
import ISignState from '../interfaces/ISignState';
import SignCard from '../components/signCard';
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
    if (this.validateForm()) {
      const name = this.inputName.current.value;
      const country = this.inputCountry.current.value;
      const surname = this.inputSurname.current.value;
      const gender = this.inputGender.current.checked ? 'Female' : 'Male';
      const img = this.inputImg === null ? 'https://i.ibb.co/cCX7H8d/pngegg.png' : this.inputImg;
      const newCard = { name, country, surname, gender, img };
      const cards = [...this.state.cards, newCard];
      this.setState({ cards });
      this.inputImg = null;
      event.currentTarget.reset();
    }
  }
  handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    reader.readAsDataURL(file!);
    reader.onload = (e) => {
      this.inputImg = e.target?.result as string;
    };
  }
  validateForm(): boolean {
    console.log(this.inputName.current?.value);
    if (!this.inputName.current?.value || !this.inputSurname.current?.value) {
      alert('Please fill out all required fields.');
      return false;
    } else {
      return true;
    }
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
            <SignCard key={index} {...card} />
          ))}
        </div>
      </div>
    );
  }
}
export default SignUp;
