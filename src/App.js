import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./Componets/toDoForm/Form";
import Item from "./Componets/toDoItem/Item";
import Filter from "./Componets/fillterInput/Filter";
import useTodos from "./hooks/useTodos";

function App() {
    const {
        todo, updateTodo, editMode, filtersMap, inputChange, formSubmit,
        deleteToDo, activateEditMode, updateText, deactivateEditMode, changeValueFilter
    } = useTodos()

    return (


        <div className={"App"}>
            <div className={"content"}>
                <Form formSubmit={formSubmit} todo={todo} inputChange={inputChange}
                />
                <Filter changeValueFilter={changeValueFilter}/>
                <ul className={"list-group"}>
                    <p className={"textSupprot"}> Для обновление задачи, нажмите по ней два раза</p>
                    {
                        filtersMap.map((todo) => (
                            <Item todo={todo} editMode={editMode} activateEditMode={activateEditMode}
                                  deleteToDo={deleteToDo} updateTodo={updateTodo}
                                  deactivateEditMode={deactivateEditMode} updateText={updateText}/>))
                    }
                </ul>

            </div>

        </div>


    )
        ;
}

export default App;
