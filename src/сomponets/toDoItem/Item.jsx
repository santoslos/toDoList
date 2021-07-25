import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContentItem from './ContentItem';
import UpdateItem from './UpdateItem';
import styled from 'styled-components';

const StileItem = styled.li.attrs({
  className : 'list-group-item',
})
`margin-top: 10px;`;

const Item = ({
  todo, removeTodo,
  updateTodo,
}) => {
  const [updateItem, setUpdateItem] = useState(null);

  const updateText = (e) => {
    if (updateItem) {
      setUpdateItem({ ...updateItem, text: e.currentTarget.value });
    }
  };

  const toggleEditMode = (edit) => {
    if (edit) {
      setUpdateItem(todo);
    }
    else {
      updateTodo(updateItem);
      setUpdateItem(null);
    }
  };

  return (
    <StileItem key={todo.id} >
      {!updateItem
        ? (
          <ContentItem
            toggleEditMode={toggleEditMode}
            todo={todo}
            removeTodo={removeTodo}
          />
        )
        : (
          <UpdateItem
            toggleEditMode={toggleEditMode}
            updateText={updateText}
            textUpdateItem={updateItem.text}
          />
        )}
    </StileItem>
  );
};

Item.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  }).isRequired,
  updateTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};
export default Item;
