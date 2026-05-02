import { useSelector, useDispatch } from 'react-redux';
import { COUNTER_ACTION_TYPE } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: COUNTER_ACTION_TYPE.increment });
  };

  const increaseHandler = () => {
    dispatch({ type: COUNTER_ACTION_TYPE.increase, payload: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: COUNTER_ACTION_TYPE.decrement });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: COUNTER_ACTION_TYPE.toggle });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
