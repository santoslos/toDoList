import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewTodoForm from './сomponets/toDoForm/NewTodoForm';
import Item from './сomponets/toDoItem/Item';
import Filter from './сomponets/fillterInput/Filter';
import { useTodos } from './hooks/useTodos';

function App() {

  const {
    filteredTodos, addTodo,
    removeTodo, onChangeValueFilter, updateTodo,
  } = useTodos();

  return (

    <div className="App">
      <div className="content">
        <NewTodoForm
          addTodo={addTodo}
        />
        <Filter onChange={onChangeValueFilter} />
        <ul className="list-group">
          <p className="textSupprot"> Для обновление задачи, нажмите по ней два раза</p>
          {
                        filteredTodos.map((todo) => (
                          <Item key={todo.id}
                            todo={todo}
                            removeTodo={removeTodo}
                            updateTodo={updateTodo}
                          />
                        ))
                    }
        </ul>

      </div>

    </div>

  );
}

export default App;
