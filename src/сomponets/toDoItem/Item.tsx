import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContentItmex from './ContentItmex';
import UpdateItem from './UpdateItem';
import styled from 'styled-components';
import { Todo } from '../../TypesTodo';

const StileItem = styled.li.attrs({
  className: 'list-group-item',
})
`margin-top: 10px;`;

export interface ItemProps {
  todo: Todo;
  removeTodo: (todoId: number) => void;
  updateTodo: (Todo: Todo ) => void;
}

const Item = ({
  todo, removeTodo,
  updateTodo,
} :ItemProps) => {
  const [updateItem, setUpdateItem] = useState<Todo>({id:-1,
    text:''});

  const updateText = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (updateItem) {
      setUpdateItem({ ...updateItem, text: e.currentTarget.value });
    }
  };

  const toggleEditMode = (edit: boolean) => {
    if (edit) {
      setUpdateItem(todo);
    }
    else {
      updateTodo(updateItem);
      setUpdateItem({id:-1,text:''});
    }
  };

  return (
    <StileItem key={todo.id} >
      {!updateItem.text
        ? (
          <ContentItmex
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
