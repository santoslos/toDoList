import React from 'react';
import PropTypes from 'prop-types';
import ContentItem from './ContentItem';
import UpdateItem from './UpdateItem';
import './Item.css';

const Item = ({
  todo, editMode, activateEditMode, deleteToDo,
  updateTodo, deactivateEditMode, updateText,
}) => (

  <li key={todo.id} className="list-group-item">
    {!editMode
      ? (
        <ContentItem
          activateEditMode={activateEditMode}
          todo={todo}
          deleteToDo={deleteToDo}
        />
      )

      : todo.id === updateTodo.id
        ? (
          <UpdateItem
            deactivateEditMode={deactivateEditMode}
            updateTodoText={updateTodo.text}
            todoId={todo.id}
            updateText={updateText}
          />
        )
        : (
          <ContentItem
            activateEditMode={activateEditMode}
            todo={todo}
            deleteToDo={deleteToDo}
          />
        )}
  </li>
);
Item.propTypes = {
  deactivateEditMode: PropTypes.func.isRequired,
  editMode: PropTypes.bool.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  }).isRequired,
  updateTodo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  }).isRequired,
  updateText: PropTypes.func.isRequired,
  activateEditMode: PropTypes.func.isRequired,
  deleteToDo: PropTypes.func.isRequired,
};
export default Item;
