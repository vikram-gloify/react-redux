import fakestoreapi from '../../api/FakeStoreApi';
import { Types } from './Type';

export const fetchProducts = () => async (dispatch) => {
  const response = await fakestoreapi.get(`/products`);

  dispatch({ type: Types.FETCH_PRODUCTS, payload: response.data });
};
export const fetchProduct = (id) => async (dispatch) => {
  const response = await fakestoreapi.get(`/products/${id}`);

  dispatch({ type: Types.SELECTED_PRODUCT, payload: response.data });
};


export const setProducts  = (products) => {
  return {
    type: Types.SET_PRODUCTS,
    payload:products,
  }
}

export const selectedProduct = (product)=> {
  return {
    type: Types.SELECTED_PRODUCT,
    payload: product,
  }
}

export const removeSelectedProduct = () => {
  return {
    type:Types.REMOVE_SELECTED_PRODUCT,
  }
}