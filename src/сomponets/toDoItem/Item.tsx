import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContentItmex from './ContentItmex';
import UpdateItem from './UpdateItem';
import styled from 'styled-components';
import { Todo } from '../../types/TypesTodo';

const StileItem = styled.li.attrs({
  className: 'list-group-item',
})`
  margin-top: 10px;
`;

export interface ItemProps {
  todo: Todo;
  removeTodo: (todoId: number) => void;
  updateTodo: (Todo: Todo) => void;
}

const Item = ({ todo, removeTodo, updateTodo }: ItemProps) => {
  const [updateItem, setUpdateItem] = useState<Todo | null>(null);

  const updateText = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (updateItem) {
      setUpdateItem({ ...updateItem, text: e.currentTarget.value });
    }
  };

  const toggleEditMode = (edit: boolean) => {
    if (edit) {
      setUpdateItem(todo);
    } else if (updateItem) {
      updateTodo(updateItem);
      setUpdateItem(null);
    }
  };

  return (
    <StileItem key={todo.id}>
      {!updateItem ? (
        <ContentItmex toggleEditMode={toggleEditMode} todo={todo} removeTodo={removeTodo} />
      ) : (
        <UpdateItem toggleEditMode={toggleEditMode} updateText={updateText} textUpdateItem={updateItem.text} />
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
