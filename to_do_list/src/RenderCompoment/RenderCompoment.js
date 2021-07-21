import React from 'react'
import Item from "../toDoItem/Item";
import Form from "../toDoForm/Form";
import "./renderComponent.css"
import Filter from "../fillter/Filter";

const renderComponent = (props) => {

    return (
        <div className={"App"}>
            <div className={"content"}>
                <Form formSubmit={props.formSubmit} todo={props.todo} inputChange={props.inputChange}
                      deactivatedFilterMode={props.deactivatedFilterMode}/>
                <ul className={"list-group"}>
                    <p className={"textSupprot"}> Для обновление задачи, нажмите по ней два раза</p>
                    {

                        props.filtersMap.map((todo) => (
                            <Item todo={todo} editMode={props.editMode} activateEditMode={props.activateEditMode}
                                  deleteToDo={props.deleteToDo} updateTodo={props.updateTodo}
                                  deactivateEditMode={props.deactivateEditMode} updateText={props.updateText}/>))
                    }
                </ul>
                <Filter changeValueFilter={props.changeValueFilter}/>
            </div>

        </div>

    )
}
export default renderComponent