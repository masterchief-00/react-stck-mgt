import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    userData: {
      names: null,
      email: null,
      phone: null,
      ID_NO: null,
      user_type: null,
    },
  },
  reducers: {
    setUserData(state, action) {
      state.userData = {
        names: action.payload.names,
        email: action.payload.email,
        phone: action.payload.phone,
        ID_NO: action.payload.ID_NO,
        user_type: action.payload.user_type,
      };
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const UserActions = UserSlice.actions;
export default UserSlice;
