import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTodoForm = ({ addToDo }) => {
  const [newTodoText, setTodoText] = useState('');
  const onChange = (e) => {
    setTodoText(e.target.value);
  };
  const submitHander = (e) => {
    e.preventDefault();
    addToDo(newTodoText);
    setTodoText('');
  };
  return (
    <form onSubmit={submitHander}>
      <input
        name="todo"
        type="text"
        placeholder="Create a new todo"
        value={newTodoText}
        onChange={onChange}
      />
    </form>
  );
};
NewTodoForm.propTypes = {
  addToDo: PropTypes.func.isRequired,
};
export default NewTodoForm;
