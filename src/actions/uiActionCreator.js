import {
  LOGIN,
  LOGOUT,
  DISPLAY_CART_DRAWER,
  HIDE_CART_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './uiActionType';

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: {
      email,
      password
    }
  };
};

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE
  };
};


export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const displayCartDrawer = () => {
  return {
    type: DISPLAY_CART_DRAWER
  };
};

export const hideCartDrawer = () => {
  return {
    type: HIDE_CART_DRAWER
  };
};
