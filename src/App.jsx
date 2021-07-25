import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewTodoForm from './сomponets/toDoForm/NewTodoForm';
import Item from './сomponets/toDoItem/Item';
import Filter from './сomponets/fillterInput/Filter';
import { useTodos } from './hooks/useTodos';
import styled from 'styled-components';

const Main = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    height: 100%;
    align-items: center;
`;

const Content = styled.div`
    background-color: lightgray;
    padding: 10px;
`;

const ListTodo = styled.ul.attrs({
  className : 'list-group',
})``;

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

  const {
    filteredTodos, addTodo,
    removeTodo, onChangeValueFilter, updateTodo,
  } = useTodos();

  return (

    <Main>
      <Content>
        <NewTodoForm
          addTodo={addTodo}
        />
        <Filter onChange={onChangeValueFilter} />
        <ListTodo>
          <TextSupport> Для обновление задачи, нажмите по ней два раза</TextSupport>
          {
                        filteredTodos.map((todo) => (
                          <Item key={todo.id}
                            todo={todo}
                            removeTodo={removeTodo}
                            updateTodo={updateTodo}
                          />
                        ))
                    }
        </ListTodo>
      </Content>
   </Main>
  );
}

export default App;
