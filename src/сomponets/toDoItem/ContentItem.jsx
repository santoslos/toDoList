import React from 'react';
import './Item.css';
import PropTypes from 'prop-types';

const ContentItem = ({ toggleEditMode, todo, removeTodo }) => (
  <div
    className="contentItem"
    onDoubleClick={() => { toggleEditMode(true); }}
  >

    <span>{todo.text}</span>
    <button
      onClick={() => removeTodo(todo.id)}
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
  removeTodo: PropTypes.func.isRequired,
};

export default ContentItem;
