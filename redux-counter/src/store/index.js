import { createStore } from "redux";

const initState = {
  counter: 0,
  showCounter: true,
};

export const COUNTER_ACTION_TYPE = {
  increment: 'INCREMENT',
  increase: 'INCREASE',
  decrement: 'DECREMENT',
  toggle: 'TOGGLE',
};

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case COUNTER_ACTION_TYPE.increment: {
      return { ...state, counter: state.counter + 1 };
    }
    case COUNTER_ACTION_TYPE.increase: {
      return { ...state, counter: state.counter + action.payload };
    }
    case COUNTER_ACTION_TYPE.decrement: {
      return { ...state, counter: state.counter - 1 };
    }
    case COUNTER_ACTION_TYPE.toggle: {
      return { ...state, showCounter: !state.showCounter };
    }
    default: {
      return state;
    }
  }
}

const store = createStore(counterReducer);

export default store;
