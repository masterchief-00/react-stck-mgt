import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./HomeSlice";
import UserSlice from "./UserSlice";

const store = configureStore({
  reducer: {
    home: HomeSlice.reducer,
    user: UserSlice.reducer,
  },
});

export default store;
