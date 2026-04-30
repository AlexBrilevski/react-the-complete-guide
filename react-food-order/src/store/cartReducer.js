export const CART_ACTION_TYPE = {
  addItem: 'ADD_ITEM',
  updateQuantity: 'UPDATE_QUANTITY',
  removeItem: 'REMOVE_ITEM',
  clearCart: 'CLEAR_CART',
};

export const initCartState = {
  items: [],
};

export const cartReducer = (state = initCartState, action) => {
  switch (action.type) {
    case CART_ACTION_TYPE.addItem: {
      let updatedItems = [...state.items];

      if (updatedItems.find(item => item.id === action.payload.id)) {
        updatedItems = updatedItems.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity++ } : item);
      } else {
        updatedItems = [...updatedItems, { ...action.payload, quantity: 1 }];
      }

      return { ...state, items: updatedItems };
    }
    case CART_ACTION_TYPE.updateQuantity: {
      let updatedItems = [...state.items];

      if (action.payload.updateType === 'increase') {
        updatedItems = updatedItems.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity++ } : item);
      }

      if (action.payload.updateType === 'decrease') {
        const updatedItemIndex = updatedItems.findIndex(item => item.id === action.payload.id);
        const updatedItem = { ...updatedItems[updatedItemIndex] };
        const decreasedQuantity = updatedItem.quantity - 1;

        if (decreasedQuantity === 0) {
          updatedItems = updatedItems.filter(item => item.id !== action.payload.id);
        } else {
          updatedItems = updatedItems.map(item => item.id === action.payload.id ? { ...item, quantity: decreasedQuantity } : item);
        }
      }
      return { ...state, items: updatedItems };
    }
    case CART_ACTION_TYPE.removeItem: {
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    }
    case CART_ACTION_TYPE.clearCart: {
      return {...state, items: []};
    }
    default: {
      return state;
    }
  }
}
