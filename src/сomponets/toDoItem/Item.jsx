import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContentItem from './ContentItem';
import UpdateItem from './UpdateItem';
import './Item.css';

const Item = ({
  todo, removeTodo,
  updateTodo,
}) => {

  const [updateItem, setUpdateItem] = useState(null);

  const updateText = (e) => {
    if (updateItem) {
      setUpdateItem({ ...updateItem, text: e.currentTarget.value });
    }
  };

  const toggleEditMode = (edit) => {
    if (edit) {
      setUpdateItem(todo);
    }
    else {
      updateTodo(updateItem);
      setUpdateItem(null);
    }
  };

  return (
    <li key={todo.id} className="list-group-item">
      {!updateItem
        ? (
          <ContentItem
            toggleEditMode={toggleEditMode}
            todo={todo}
            removeTodo={removeTodo}
          />
        )
        : (
          <UpdateItem
            toggleEditMode={toggleEditMode}
            updateText={updateText}
            textUpdateItem={updateItem.text}
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
  updateTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};
export default Item;
