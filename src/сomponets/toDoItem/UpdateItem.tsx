import PropTypes from 'prop-types';
import React from 'react';

export interface UpdateItemProps {
  toggleEditMode: (enable: boolean) => void;
  updateText: (e : React.ChangeEvent<HTMLInputElement>) => void;
  textUpdateItem: string;
}

const UpdateItem = ({ toggleEditMode, updateText, textUpdateItem }: UpdateItemProps) => (
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
