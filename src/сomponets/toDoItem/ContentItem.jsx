import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContentItemStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Button = styled.button.attrs({
  className : 'btn btn-danger',
})``;

const ContentItem = ({ toggleEditMode, todo, removeTodo }) => (
  <ContentItemStyle
    onDoubleClick={() => { toggleEditMode(true); }}
  >

    <span>{todo.text}</span>
    <Button
      onClick={() => removeTodo(todo.id)}
      type="button"
    >
      X
    </Button>
  </ContentItemStyle>

);

ContentItem.propTypes = {
  toggleEditMode: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  }).isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default ContentItem;
