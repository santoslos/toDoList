import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContentItem from './ContentItem';
import UpdateItem from './UpdateItem';
import './Item.css';

const Item = ({
  todo, deleteToDo,
  updateToDo,
}) => {
  const [updateItem, setUpdateItem] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const updateText = (e) => {
    if (updateItem) {
      setUpdateItem({ ...updateItem, text: e.currentTarget.value });
    }
  };
  const toggleEditMode = (toDoUpdate, enable) => {
    if (!enable) {
      setUpdateItem(toDoUpdate);
      setEditMode(true);
    } else {
      updateToDo(updateItem);
      setEditMode(false);
    }
  };
  return (
    <li key={todo.id} className="list-group-item">
      {!editMode
        ? (
          <ContentItem
            toggleEditMode={() => { toggleEditMode(todo, editMode); }}
            todo={todo}
            deleteToDo={deleteToDo}
          />
        )

        : todo.id === updateItem.id
          ? (
            <UpdateItem
              toggleEditMode={() => { toggleEditMode(todo, editMode); }}
              updateText={updateText}
              textUpdateItem={updateItem.text}
            />
          )
          : (
            <ContentItem
              activateEditMode={() => { toggleEditMode(todo, editMode); }}
              todo={todo}
              deleteToDo={deleteToDo}
            />
          )}
    </li>
  );
};
Item.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  }).isRequired,
  updateToDo: PropTypes.func.isRequired,
  deleteToDo: PropTypes.func.isRequired,
};
export default Item;
