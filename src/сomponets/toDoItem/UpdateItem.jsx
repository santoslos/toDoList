import PropTypes from 'prop-types';
import React from 'react';

const UpdateItem = ({ toggleEditMode, updateText, textUpdateItem }) => (
  <input
    type="text"
    value={textUpdateItem}
    onBlur={() => { toggleEditMode(false); }}
    onChange={updateText}
    autoFocus
  />
);

UpdateItem.propTypes = {

  toggleEditMode: PropTypes.func.isRequired,
  updateText: PropTypes.func.isRequired,
  textUpdateItem: PropTypes.string.isRequired,

};

export default UpdateItem;
