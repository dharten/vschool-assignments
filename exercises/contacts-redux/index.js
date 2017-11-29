const redux = require("redux");

function reducer(prevState = [], action) {
  switch(action.type) {
    case "ADD_CONTACT":
      return [...prevState, action.contact]
    case "DELETE_CONTACT":
      return prevState.filter(contact => contact.email !== action.email);
    default:
      return prevState
  }
}

const store = redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
  console.log("");
})

function addContact(contact) {
  return {
    type: "ADD_CONTACT",
      contact
  }
}

function deleteContact(email) {
  return {
    type: "DELETE_CONTACT",
      email
  }
}

store.dispatch(addContact({name: "dan", phone: "123-123-1234", email: "d@d.com"}))
store.dispatch(addContact({name: "fred", phone: "555-555-5555", email: "f@f.com"}))
store.dispatch(deleteContact("d@d.com"))
