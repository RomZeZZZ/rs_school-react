import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addUser } from '../store/usersSlice';
import '../styles/form.css';
import IFormData from 'interfaces/IForm';
import SignCard from '../components/signCard';
interface IRootState {
  users: {
    users: IFormData[];
  };
}
function SignUp() {
  const userCards = useSelector((state: IRootState) => {
    return state.users.users;
  });
  console.log(userCards);
  const [cards, setCards] = useState<IFormData[]>([]);
  const dispatch = useDispatch();
  const addCardToStore = (data: IFormData) => dispatch(addUser(data));
  const [imgSrc, setImgSrc] = useState<string>('https://i.ibb.co/Csh999Y/pngegg.png');
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>();
  const onSubmit = handleSubmit((data: IFormData) => {
    data.img = imgSrc;
    setImgSrc('https://i.ibb.co/Csh999Y/pngegg.png');
    setCards([...cards, data]);
    addCardToStore(data);
    setIsSubmitSuccessful(true);
    setTimeout(() => {
      setIsSubmitSuccessful(false);
    }, 1200);
    reset();
  });
  function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    reader.readAsDataURL(file!);
    reader.onload = (e) => {
      setImgSrc(e.target?.result as string);
    };
  }
  return (
    <div>
      {isSubmitSuccessful && <p className="submit">Form submitted successfully!</p>}
      <form className="form" onSubmit={onSubmit}>
        <label className="form_label">
          Name:
          <input
            {...register('name', { required: true })}
            placeholder="Enter your name"
            className="form_input_text"
            type="text"
          />
          {errors.name && <p className="error-message">This field is required</p>}
        </label>
        <label data-testid="surname" className="form_label">
          Surname:
          <input
            {...register('surname', { required: true })}
            placeholder="Enter your surname"
            className="form_input_text"
            type="text"
          />
          {errors.surname && <p className="error-message">This field is required</p>}
        </label>
        <label className="form_label">
          Picture:
          <input
            {...register('img')}
            onChange={handleFileUpload}
            className="input_file"
            id="files"
            name="img"
            type="file"
          />
        </label>
        <label className="form_label">
          Country:
          <select
            {...register('country', { required: true, validate: (value) => value !== 'noValue' })}
          >
            <option value="noValue">Your country</option>
            <option value="Belarus">Belarus</option>
            <option value="Poland">Poland</option>
            <option value="Germany">Germany</option>
            <option value="England">England</option>
          </select>
          {errors.country && <p className="error-message">This field is required</p>}
        </label>
        <label className="form_label">
          Gender:
          <input {...register('gender', { required: true })} type="radio" value="male" />
          Male
          <input {...register('gender', { required: true })} type="radio" value="female" />
          Female
          {errors.gender && <p className="error-message">This field is required</p>}
        </label>
        <label className="form_label">
          <input {...register('consent', { required: true })} type="checkbox" />I consent to my
          personal data
          {errors.consent && <p className="error-message">This field is required</p>}
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className="field_card">
        {userCards.map((card, index) => (
          <SignCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default SignUp;
