import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onChange }) => {
  const handlerOnChange = (e) => {
    onChange(e.currentTarget.value);
  };
  return (
    <div>
      <h2>Поиск</h2>
      <input placeholder="Поиск" onChange={handlerOnChange} />
    </div>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default Filter;
