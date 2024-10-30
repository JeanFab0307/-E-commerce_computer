import { CART_ADD_ITEM, CART_REMOVE_ITEM, SET_LOADING_STATE } from "../actions/cartActionType";
import { Map } from "immutable";

export const initialStateCarts = {
  cart: [],
  loading: false
}

export const cartsReducer = (state = Map(initialStateCarts), action) => {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const { user = null, products } = action;  // `products` is a single product ID
      const currentCart = state.get('cart');
    
      // Check if the product already exists in the cart
      const updatedCart = currentCart.map((item) => {
        if (item.product.id === products) {
          // Increase count by 1 if the product already exists in the cart
          return {
            user,
            product: {
              id: item.product.id,
              count: item.product.count + 1
            }
          };
        }
        return item; // Return unchanged items
      });
    
      // Check if the product was not found in the cart, and if so, add it
      const productExistsInCart = currentCart.some((item) => item.product.id === products);
    
      if (!productExistsInCart) {
        updatedCart.push({
          user,
          product: {
            id: products,
            count: 1 // New product added with an initial count of 1
          }
        });
      }
    
      return state.set('cart', updatedCart);
    }
    
    case CART_REMOVE_ITEM: {
      const { user = null, products } = action;  // `products` is a single product ID
      const currentCart = state.get('cart');
    
      // Update cart by mapping over existing items
      const updatedCart = currentCart.map((item) => {
        if (item.product.id === products) {  // Check if the current item matches the product ID
          // Decrease count if product is in the cart
          const updatedCount = item.product.count - 1;
    
          if (updatedCount > 0) {
            // Return updated product with decreased count
            return {
              user,
              product: {
                id: item.product.id,
                count: updatedCount
              }
            };
          }
          // Else, exclude product from cart (set to null to filter out later)
          return null;
        }
        return item; // Return unchanged items
      }).filter(Boolean); // Filter out nulls where count reaches zero
    
      return state.set('cart', updatedCart);
    }
  default: 
    return state;
  }
}

