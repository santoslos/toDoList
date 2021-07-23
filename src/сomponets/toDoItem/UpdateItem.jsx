import PropTypes from 'prop-types';

const UpdateItem = ({ toggleEditMode, updateText, textUpdateItem }) => (
  <input
    type="text"
    value={textUpdateItem}
    onBlur={toggleEditMode}
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
