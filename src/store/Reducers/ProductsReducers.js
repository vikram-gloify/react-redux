import { Types } from '../Action/Type';

const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case Types.SET_PRODUCTS:
      return { ...state, products: payload };
    case Types.FETCH_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case Types.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case Types.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};
