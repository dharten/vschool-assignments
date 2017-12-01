import React from "react";
import {connect} from "react                                                               -redux";

function ActivitiesList(props) {
  const activities = props.activities.map((activity, i) =>
      <li key={ activity.activity + i }>{ activity.activity }</li>)
  return(
    <ul>
      { activities }
    </ul>
  )
}

export default connect(state => state, null)(ActivitiesList);
