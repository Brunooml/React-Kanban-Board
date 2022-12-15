import React, { useState } from "react";
import "./TaskItem.css";
import PropTypes from "prop-types";

function TaskItem({ id, title, taskState, onTaskUpdate}){
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  const onTitleChange = ({ target }) => {
    const newTitle = target.value
    setEditableTitle(newTitle)
    onTaskUpdate(id, newTitle, taskState);
  };

  const onKeyPress = (event) => {
    if(event.key === 'Enter'){
      setIsEditing(false);
    }
  };

  if(isEditing) {
    return <input type="text" value={ editableTitle } onChange={ onTitleChange } onKeyPress={ onKeyPress }></input>
  };

  return(
    <div onClick={(event) => setIsEditing(true) }>{ editableTitle }</div>
  )
};

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired,
};

export default TaskItem;