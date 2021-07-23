import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewTodoForm from './сomponets/toDoForm/NewTodoForm';
import Item from './сomponets/toDoItem/Item';
import Filter from './сomponets/fillterInput/Filter';
import { useTodos } from './hooks/useTodos';

function App() {
  const {
    filteredTodos, addToDo,
    removeToDo, onChangeValueFilter, updateToDo,
  } = useTodos();

  return (

    <div className="App">
      <div className="content">
        <NewTodoForm
          addToDo={addToDo}
        />
        <Filter onChange={onChangeValueFilter} />
        <ul className="list-group">
          <p className="textSupprot"> Для обновление задачи, нажмите по ней два раза</p>
          {
                        filteredTodos.map((todo) => (
                          <Item
                            todo={todo}
                            removeToDo={removeToDo}
                            updateToDo={updateToDo}
                          />
                        ))
                    }
        </ul>

      </div>

    </div>

  );
}

export default App;
