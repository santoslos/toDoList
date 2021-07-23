import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewTodoForm from './сomponets/toDoForm/NewTodoForm';
import Item from './сomponets/toDoItem/Item';
import Filter from './сomponets/fillterInput/Filter';
import { useTodos } from './hooks/useTodos';

function App() {
  const {
    filtersMap, addToDo,
    removeToDo, changeValueFilter, updateToDo,
  } = useTodos();

  return (

    <div className="App">
      <div className="content">
        <NewTodoForm
          addToDo={addToDo}
        />
        <Filter onChange={changeValueFilter} />
        <ul className="list-group">
          <p className="textSupprot"> Для обновление задачи, нажмите по ней два раза</p>
          {
                        filtersMap.map((todo) => (
                          <Item
                            todo={todo}
                            deleteToDo={removeToDo}
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
