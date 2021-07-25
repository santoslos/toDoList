import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onChange }) => {

  const handlerOnChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <h2>Поиск</h2>
      <input placeholder="Поиск" onChange={handlerOnChange}  type="text"/>
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  valueInput: PropTypes.string.isRequired,
};

export default Filter;
