import { createContext, useReducer } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products.js';

const CART_ACTION_TYPE = {
  addItem: 'ADD_ITEM',
  updateItem: 'UPDATE_ITEM',
};

const initialCartState = {
  items: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTION_TYPE.addItem: {
      const updatedItems = [...state.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
        updatedItems.push({
          id: action.payload,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        ...state,
        items: updatedItems,
      };
    }
    case CART_ACTION_TYPE.updateItem: {
      const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += action.payload.amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        ...state,
        items: updatedItems,
      };
    }
    default: {
      return state;
    }
  }
};

export const CartContext = createContext({
  items: [],
  addItemToCart: () => { },
  updateItemQuantity: () => { },
});

export default function CartContextProvider({ children }) {
  const [cartState, cartStateDispatch] = useReducer(cartReducer, initialCartState);

  function handleAddItemToCart(id) {
    cartStateDispatch({ type: CART_ACTION_TYPE.addItem, payload: id });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    cartStateDispatch({ type: CART_ACTION_TYPE.updateItem, payload: { productId, amount } });
  }

  const cartCtx = {
    items: cartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {children}
    </CartContext.Provider>
  );
}
