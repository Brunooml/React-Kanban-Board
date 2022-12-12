import React from "react";
import "./TaskList.css";
import PropTypes from "prop-types";

function TaskList({ title }) {
  return(
    <div className="tasklist">
      <div className="title">{ title }</div>
      <div className="content"></div>
    </div>
  )
};

TaskList.propTypes = {
  title: PropTypes.string.isRequired
};

export default TaskList;