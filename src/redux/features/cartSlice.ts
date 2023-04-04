import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/Product';

interface CartState {
  products: Product[];
  quantity: number;
  total: number;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: JSON.parse(localStorage.getItem('cart') ?? '[]'),
    quantity: JSON.parse(localStorage.getItem('quantity') ?? '0'),
    total: JSON.parse(localStorage.getItem('total') ?? '0'),
  } as CartState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price;
      localStorage.setItem('cart', JSON.stringify(state.products));
      localStorage.setItem('quantity', JSON.stringify(state.quantity));
      localStorage.setItem('total', JSON.stringify(state.total));
    },
    removeProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.products.splice(index, 1);
        state.quantity -= 1;
        state.total -= action.payload.price;
        localStorage.setItem('cart', JSON.stringify(state.products));
        localStorage.setItem('quantity', JSON.stringify(state.quantity));
        localStorage.setItem('total', JSON.stringify(state.total));
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;