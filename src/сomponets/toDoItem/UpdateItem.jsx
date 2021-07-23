import React from 'react';
import PropTypes from 'prop-types';

const UpdateItem = ({
  deactivateEditMode, updateTodoText, todoId, updateText,
}) => (
  <input
    type="text"
    value={updateTodoText}
    onBlur={() => deactivateEditMode(todoId)}
    onChange={updateText}
  />
);
UpdateItem.propTypes = {
  deactivateEditMode: PropTypes.func.isRequired,
  todoId: PropTypes.number.isRequired,
  updateTodoText: PropTypes.string.isRequired,
  updateText: PropTypes.func.isRequired,
};
export default UpdateItem;
