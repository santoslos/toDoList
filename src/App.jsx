import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './сomponets/toDoForm/Form';
import Item from './сomponets/toDoItem/Item';
import Filter from './сomponets/fillterInput/Filter';
import useTodos from './hooks/useTodos';

function App() {
  const {
    todo, updateTodo, editMode, filtersMap, inputChange, formSubmit,
    deleteToDo, activateEditMode, updateText, deactivateEditMode, changeValueFilter,
  } = useTodos();

  return (

    <div className="App">
      <div className="content">
        <Form
          formSubmit={formSubmit}
          textTodo={todo}
          inputChange={inputChange}
        />
        <Filter changeValueFilter={changeValueFilter} />
        <ul className="list-group">
          <p className="textSupprot"> Для обновление задачи, нажмите по ней два раза</p>
          {
                        filtersMap.map((filterToDO) => (
                          <Item
                            filterToDO={filterToDO}
                            editMode={editMode}
                            activateEditMode={activateEditMode}
                            deleteToDo={deleteToDo}
                            updateTodo={updateTodo}
                            deactivateEditMode={deactivateEditMode}
                            updateText={updateText}
                          />
                        ))
                    }
        </ul>

      </div>

    </div>

  );
}

export default App;
