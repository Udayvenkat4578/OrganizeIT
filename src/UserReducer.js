import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    userList: [], 
  },
  reducers: {
    addUser: (state, action) => {
      state.userList.push(action.payload);
      console.log("the data",action.payload)
    },
    removeItem: (state, action) => {
      const itemIndexToRemove = action.payload.index;
      state.userList = state.userList.filter((_, index) => index !== itemIndexToRemove);
    },              },
});

export const { addUser,removeItem } = userSlice.actions;

export default userSlice.reducer;
