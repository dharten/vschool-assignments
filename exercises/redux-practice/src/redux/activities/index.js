export default function reducer(prevState = [], action) {
  switch(action.type) {
    case "ADD_ACTIVITY":
      return [...prevState, action.activity]
    default:
      return prevState;
  }
}

export function addActivity(activity) {
  return {
    type: "ADD_ACTIVITY",
    activity
  }
}
