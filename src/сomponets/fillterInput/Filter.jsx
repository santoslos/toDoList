import React from 'react';
import PropTypes from 'prop-types';

const Filter = (props) => {
  const { changeValueFilter } = props;
  return (
    <div>
      <h2>Поиск</h2>
      <input placeholder="Поиск" onChange={changeValueFilter} />
    </div>
  );
};
Filter.propTypes = {
  changeValueFilter: PropTypes.func.isRequired,
};
export default Filter;
