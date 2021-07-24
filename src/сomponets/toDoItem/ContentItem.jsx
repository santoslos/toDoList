import React from 'react';
import './Item.css';
import PropTypes from 'prop-types';

const ContentItem = ({ toggleEditMode, todo, removeToDo }) => (
  <div
    className="contentItem"
    onDoubleClick={() => { toggleEditMode(true); }}
  >

    <span>{todo.text}</span>
    <button
      onClick={() => removeToDo(todo.id)}
      type="button"
      className="btn btn-danger"
    >
      X
    </button>
  </div>

);

ContentItem.propTypes = {
  toggleEditMode: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  }).isRequired,
  removeToDo: PropTypes.func.isRequired,
};

export default ContentItem;
