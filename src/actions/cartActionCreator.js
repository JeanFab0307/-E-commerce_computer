import { CART_ADD_ITEM, CART_REMOVE_ITEM, SET_LOADING_STATE } from "./cartActionType";

export const cartAddItem = (products) => {
  return {
    type: CART_ADD_ITEM,
    products
  };
};

export const cartRemoveItem = (products) => {
  return {
    type: CART_REMOVE_ITEM,
    products
  };
}

export const setLoadingState = (loadingState) => {
  return {
    type: SET_LOADING_STATE,
    loadingState
  };
};
