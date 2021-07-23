import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ formSubmit, textTodo, inputChange }) => (

  <form onSubmit={formSubmit}>
    <input
      name="todo"
      type="text"
      placeholder="Create a new todo"
      value={textTodo}
      onChange={inputChange}
    />
  </form>

);
Form.propTypes = {
  formSubmit: PropTypes.func.isRequired,
  textTodo: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
};
export default Form;
