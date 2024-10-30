import { CART_ADD_ITEM, CART_REMOVE_ITEM, SET_LOADING_STATE } from "../actions/cartActionType";
import { Map } from "immutable";

export const initialStateCarts = {
  cart: [],
  loading: false
}

export const cartsReducer = (state = Map(initialStateCarts), action) => {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const { products, user = null } = action;  // Destructure user with default null
      const currentCart = state.get('cart');

      const updatedCart = products.map((productId) => {
        const existingProductIndex = currentCart.findIndex((item) => item.product.id === productId);

        if (existingProductIndex !== -1) {
          // Product exists, increase count
          const updatedProduct = {
            ...currentCart[existingProductIndex],
            product: {
              ...currentCart[existingProductIndex].product,
              count: currentCart[existingProductIndex].product.count + 1
            }
          };
          return updatedProduct;
        } else {
          // Product does not exist, create a new entry with count = 1
          const newProductEntry = {
            product: {
              id: productId,
              count: 1
            }
          };

          // Conditionally add user data only if provided
          if (user) {
            newProductEntry.user = user;
          }

          return newProductEntry;
        }
      });

      // Return updated state with new cart array
      return state.set('cart', updatedCart);
    }
    case CART_REMOVE_ITEM: {
      const { user = null, products } = action;
      const currentCart = state.get('cart');

      const updatedCart = currentCart.map((item) => {
        if (products.includes(item.product.id)) {
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
          // Else, exclude product from cart (filter it out)
          return null;
        }
        return item; // Return unchanged items
      }).filter(Boolean); // Filter out nulls where count reaches zero

      return state.set('cart', updatedCart);
    }
    case SET_LOADING_STATE: {
      return state.set('loading', action.loadingState);
    }
    default: 
    return state;
  }
}

