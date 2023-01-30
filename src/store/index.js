import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./slice/basketSlice";

export default configureStore({
  reducer: {
    basket: basketReducer,
  },
});
