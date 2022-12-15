import React, { useState } from "react";
import "./TaskItem.css";
import PropTypes from "prop-types";

function TaskItem({ id, title, taskState, onTaskUpdate, onDeleteTask }){
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
      if(editableTitle.length === 0){
        onDeleteTask(id);
      }
    }
  };

  const onTaskStateChange = (event) => {
    onTaskUpdate(id, title, event.target.value)
  };

  if(isEditing) {
    return <input type="text" value={ editableTitle } onChange={ onTitleChange } onKeyPress={ onKeyPress }></input>
  };

  return(
    <div>
    <div onClick={(event) => setIsEditing(true) }>{ editableTitle }</div>
    <select onChange={ onTaskStateChange } value={ taskState }>
      <option value="Pendente">Pendente</option>
      <option value="Fazendo">Fazendo</option>
      <option value="Completa">Completa</option>
    </select>
    </div>
  )
};

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired,
};

export default TaskItem;