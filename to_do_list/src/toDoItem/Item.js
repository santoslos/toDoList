import React from 'react'

import ContentItem from "./ContentItem";
import UpdateItem from "./UpdateItem";
import "./Item.css"
const Item = (props) => {
    return (

        <li key={props.todo.id} className={"list-group-item"}>
            {!props.editMode ?
                <ContentItem activateEditMode={props.activateEditMode} todo={props.todo}
                             deleteToDo={props.deleteToDo}/>

                :
                props.todo.id === props.updateTodo.id ?
                    <UpdateItem deactivateEditMode={props.deactivateEditMode} updateTodo={props.updateTodo}
                                todo={props.todo} updateText={props.updateText}/>
                    :
                    <ContentItem activateEditMode={props.activateEditMode} todo={props.todo}
                                 deleteToDo={props.deleteToDo}/>}
        </li>)
}
export default Item