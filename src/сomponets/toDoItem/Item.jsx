import React from 'react';
import PropTypes from 'prop-types';
import ContentItem from './ContentItem';
import UpdateItem from './UpdateItem';
import './Item.css';

const Item = ({
  filterToDO, editMode, activateEditMode, deleteToDo,
  updateTodo, deactivateEditMode, updateText,
}) => (

  <li key={filterToDO.id} className="list-group-item">
    {!editMode
      ? (
        <ContentItem
          activateEditMode={activateEditMode}
          todo={filterToDO}
          deleteToDo={deleteToDo}
        />
      )

      : filterToDO.id === updateTodo.id
        ? (
          <UpdateItem
            deactivateEditMode={deactivateEditMode}
            updateTodoText={updateTodo.text}
            todoId={filterToDO.id}
            updateText={updateText}
          />
        )
        : (
          <ContentItem
            activateEditMode={activateEditMode}
            todo={filterToDO}
            deleteToDo={deleteToDo}
          />
        )}
  </li>
);
Item.propTypes = {
  deactivateEditMode: PropTypes.func.isRequired,
  editMode: PropTypes.bool.isRequired,
  filterToDO: PropTypes.shape({
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
