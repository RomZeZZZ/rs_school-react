import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import IFormData from 'interfaces/IForm';
interface IUsersState {
  users: IFormData[];
}
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  } as IUsersState,
  reducers: {
    addUser(state, action: PayloadAction<IFormData>) {
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
