const redux = require("redux");

// Reducer's Job: Take an action and update the state
function reducer(prevState = 0, action) {
  switch(action.type) {
    case "INCREMENT":
      return prevState + 1;
    case "DECREMENT":
      return prevState - 1;
    case "INCREASE_BY":
      return prevState + action.amount;
    case "DECREASE_BY":
      return prevState - action.amount;
    default:
      return prevState;
  }
}

const store = redux.createStore(reducer);

store.subscribe(() => {
  const currentState = store.getState();
  console.log(currentState);
})

// Action creators: return an action object
function increment() {
  return {
    type: "INCREMENT"
  }
}

function decrement() {
  return {
    type: "DECREMENT"
  }
}

function increaseBy(amount) {
  return {
    type: "INCREASE_BY",
    amount
  }
}

function decreaseBy(amount) {
  return {
    type: "DECREASE_BY",
    amount
  }
}

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increaseBy(7))
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(decreaseBy(14))
store.dispatch(decrement())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(increaseBy(6))
