import { CART_ADD_ITEM, CART_REMOVE_ITEM, SET_LOADING_STATE } from "../actions/cartActionType";
import { Map } from "immutable";

export const initialStateCarts = {
  cart: [],
  loading: false
}

export const cartsReducer = (state = Map(initialStateCarts), action) => {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const data = action.products.map((id) => ({id, count : 1 }))
      return state.set('cart', data);
    }
    case CART_REMOVE_ITEM: {
      const data = action.products.map((id) => ({id, count : -1 }))
      return state.set('cart', data);
    }
    case SET_LOADING_STATE: {
      return state.set('loading', action.loadingState);
    }
    default: 
    return state;
  }
}

