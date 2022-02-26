import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartCount: 0,
  cart: {}
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ADDTOCART: (state) => {
      return {
        ...state,
        cartCount: state.cartCount + 1
      };
    }
  }
});

export const { ADDTOCART } = cartSlice.actions;

export default cartSlice.reducer;
