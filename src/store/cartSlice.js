import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartCount: 0,
  cart: {
    /* B09JQZ3Y7V: { id: 'B09JQZ3Y7V', title: '', price: 193900, image: '', quantity: 1 } */
  }
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ADDTOCART: (state) => {
      state.cartCount += 1;
    },

    FILLCART: (state, action) => {
      if (state.cart[action.payload.id]) {
        state.cart[action.payload.id].quantity += 1;
      } else {
        state.cart[action.payload.id] = { ...action.payload, quantity: 1 };
      }
    },

    DELETEFROMCART: (state, action) => {
      state.cartCount -= state.cart[action.payload].quantity;
      delete state.cart[action.payload];
    },

    ADDQUANTITY: (state, action) => {
      state.cartCount += 1;
      state.cart[action.payload].quantity += 1;
    },

    SUBTRACTQUANTITY: (state, action) => {
      if (state.cart[action.payload].quantity === 1) {
        delete state.cart[action.payload];
        state.cartCount -= 1;
      } else {
        state.cartCount -= 1;
        state.cart[action.payload].quantity -= 1;
      }
    }
  }
});

export const { ADDTOCART, FILLCART, ADDQUANTITY, SUBTRACTQUANTITY, DELETEFROMCART } = cartSlice.actions;

export default cartSlice.reducer;
