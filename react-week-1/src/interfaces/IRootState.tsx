import IFormData from './IForm';

interface IRootState {
  users: {
    users: IFormData[];
  };
  inputSearch: {
    text: string;
    page: number;
  };
}
export default IRootState;
