/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { fetchProductsSuccess } from './productsSlice';

export function* fetchProducts(): Generator<any, void, any> {
  try {
    const response = yield call(axios.get, 'https://api.jsonbin.io/v3/b/642d7741ebd26539d0a50878');
    yield put(fetchProductsSuccess(response.data.record));
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default function* productsSaga(): Generator<any, void, any> {
  yield takeEvery('products/fetchProductsStart', fetchProducts);
}

