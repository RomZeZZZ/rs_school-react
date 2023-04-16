import IFormData from './IForm';

interface IRootState {
  users: {
    users: IFormData[];
  };
  inputSearch: {
    text: string;
  };
}
export default IRootState;
