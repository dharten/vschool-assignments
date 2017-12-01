import React from "react";
import {connect} from "react-redux";
import {getAllTodos} from "../../redux/contacts";

class ContactsList extends React.Component {
  componentDidMount() {
    this.props.getAllTodos();
  }

  render() {
    const contacts = this.props.contacts.map(
      (contact, i) => <li key={ contact._id + i }>{ contact.title }</li>)
    return(
      <ul>
        { contacts }
      </ul>
    )
  }
}

export default connect(state => state, { getAllTodos })(ContactsList);
