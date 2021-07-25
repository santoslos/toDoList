import React, { useState } from 'react';
import PropTypes from 'prop-types';

interface FormAddProps {
  addTodo:( newTextTodo : string ) => void
}
const NewTodoForm = ({ addTodo }: FormAddProps) => {

  const [newTodoText, setTodoText] = useState('');
  const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const submitHander = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(newTodoText);
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
  addTodo: PropTypes.func.isRequired,
};
export default NewTodoForm;
