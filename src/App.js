import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//react-redux hooks
// access the state from redux store, retreives count
// dispatch the actions to the store
import { increment, decrement } from './actions';

// create components to dispatch actions
// read state from redux store

const App = () => {
  //access the state from redux store
  const count = useSelector(state => state.count);

  //dispatch the action
  const dispatch = useDispatch();

  return(
    <div classname="App">
      <h1> Count : {count} </h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>

  );
};

export default App;
