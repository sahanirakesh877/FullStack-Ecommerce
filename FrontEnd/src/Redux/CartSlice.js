import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      const product = action.payload;
      state.push(product);
    },
    remove: (state, action) => {
      const productId = action.payload;
      return state.filter((product) => product.id !== productId);
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.items.find((item) => item.id === productId);
      if (product) {
        product.quantity += 1;
        state.total += product.price;
      }
      console.log("State after increaseQuantity:", state);
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.items.find((item) => item.id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.total -= product.price;
      }
      console.log("State after decreaseQuantity:", state);
    },
  },
});
export const { add, remove, increaseQuantity, decreaseQuantity } =
  CartSlice.actions;

export default CartSlice.reducer;
