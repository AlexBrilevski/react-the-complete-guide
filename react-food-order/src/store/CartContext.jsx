import { createContext, useReducer } from "react";
import { CART_ACTION_TYPE, initCartState, cartReducer } from "./cartReducer.js";

const CartContex = createContext({
  items: [],
  addToCart: (item) => { },
  updateItemQuantity: (id) => { },
  removeItem: (id) => { },
  clearCart: () => { },
});

export function CartContexProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initCartState);

  const addToCart = (item) => {
    dispatchCartAction({ type: CART_ACTION_TYPE.addItem, payload: item });
  };

  const updateItemQuantity = (updateType, id) => {
    dispatchCartAction({ type: CART_ACTION_TYPE.updateQuantity, payload: { updateType, id } });
  };

  const removeItem = (id) => {
    dispatchCartAction({ type: CART_ACTION_TYPE.removeItem, payload: id });
  };

  const clearCart = () => {
    dispatchCartAction({ type: CART_ACTION_TYPE.clearCart });
  };

  const cartCtx = {
    items: cartState.items,
    addToCart,
    updateItemQuantity,
    removeItem,
    clearCart,
  }

  console.log(cartState);

  return (
    <CartContex.Provider value={cartCtx}>
      {children}
    </CartContex.Provider>
  );
}

export default CartContex;
