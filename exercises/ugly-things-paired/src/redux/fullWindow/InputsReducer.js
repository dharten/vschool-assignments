export default function reducerInputs(prevState = [], action) {
  switch(action.type) {
    case "ADD_UGLY":
      return [...prevState, action.ugly];
    default:
      return prevState;
  }
}

export function addUgly(ugly) {
  return {
    type: "ADD_UGLY",
    ugly
  }
}
