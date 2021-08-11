import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewTodoForm from './сomponets/toDoForm/NewTodoForm';
import Item from './сomponets/toDoItem/Item';
import Filter from './сomponets/fillterInput/Filter';
import { useTodos } from './hooks/useTodos';
import styled from 'styled-components';
import Preloader from './сomponets/common/Preloader/Preloader';

const Main = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  align-items: center;
`;

const Content = styled.div`
  background-color: lightgray;
  padding: 10px;
`;

const ListTodo = styled.ul``;

const TextSupport = styled.p`
  position: relative;
  opacity: 0;
  transition: opacity 2s;
  margin: 0;
  ${ListTodo}:hover & {
    opacity: 1;
  }
`;

function App() {
  const { filteredTodos, addTodo, removeTodo, onChangeValueFilter, updateTodo, isValidating } = useTodos();
  return (
    <Main>
      {isValidating ? (
        <Preloader />
      ) : (
        <Content>
          <NewTodoForm addTodo={addTodo} />
          <Filter onChange={onChangeValueFilter} />
          <ListTodo className={'list-group'}>
            <TextSupport> Для обновление задачи, нажмите по ней два раза</TextSupport>
            {filteredTodos.map((todo) => (
              <Item key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} />
            ))}
          </ListTodo>
        </Content>
      )}
    </Main>
  );
}

export default App;
