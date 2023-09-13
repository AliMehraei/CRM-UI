import { createSlice } from '@reduxjs/toolkit';

const permissionSlice = createSlice({
  name: 'permissions',
  initialState: {
    userPermissions: [],
  },
  reducers: {
    setPermissions: (state, action) => {
      state.userPermissions = action.payload;
    },
  },
});

export const { setPermissions } = permissionSlice.actions;

export default permissionSlice.reducer;
