import {
  DISPLAY_CART_DRAWER,
  HIDE_CART_DRAWER,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actions/uiActionType";
import { Map } from 'immutable';

export const initialStateUi = {
  isCartDrawerVisible : false,
  isUserLoggedIn: false,
  user: null,
};

export const userInteractionReducer = (state = Map(initialStateUi), action) => {
  switch (action.type) {
    case DISPLAY_CART_DRAWER: {
      return state.set('isCartDrawerVisible', true);
    }
    case HIDE_CART_DRAWER: {
      return state.set('isCartDrawerVisible', false);
    }
    case LOGIN: {
      return state.set('user', action.user);
    }
    case LOGIN_SUCCESS: {
      return state.set('isUserLoggedIn', true).set('user', action.user);
    }
    case LOGIN_FAILURE: {
      return state.set('isUserLoggedIn', false);
    }
    case LOGOUT: {
      return state.set('isUserLoggedIn', false).set('user', null);
    }
    default: {
      return state;
    }
  }
};