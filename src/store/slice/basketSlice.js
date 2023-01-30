import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketItem: [],
  total: 0,
  amount: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      state.basketItem.push({
        name: action.payload.name,
        price: action.payload.price,
        image: action.payload.image,
        id: action.payload.id,
      });
    },
    removeBasket: (state, action) => {
      const removeId = action.payload;
      const selectedRemove = state.basketItem.findIndex(
        (item) => item.id === removeId
      );
      if (selectedRemove > -1) {
        state.basketItem.splice(selectedRemove, 1);
      }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.basketItem.forEach((item) => {
        amount += 1;
        total += 1 * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});
// Action creators are generated for each case reducer function
export const { addBasket, removeBasket, calculateTotals } = basketSlice.actions;

export default basketSlice.reducer;
