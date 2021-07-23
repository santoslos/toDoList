import React from 'react';
import PropTypes from 'prop-types';

const Filter = (props) => {
  const { onChange } = props;
  return (
    <div>
      <h2>Поиск</h2>
      <input placeholder="Поиск" onChange={onChange} />
    </div>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default Filter;
