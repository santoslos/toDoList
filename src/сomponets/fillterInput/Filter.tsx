import React from 'react';
import PropTypes from 'prop-types';

export interface FilterItemProps {
  onChange: (newValueInput: string) => void;
}

const Filter = ({ onChange }: FilterItemProps) => {
  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <h2>Поиск</h2>
      <input placeholder="Поиск" onChange={handlerOnChange} type="text" />
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
