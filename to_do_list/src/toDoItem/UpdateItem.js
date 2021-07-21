import React from 'react'


const UpdateItem = (props) => {

    return (
        <input type="text" value={props.updateTodo.text}
               onBlur={() => props.deactivateEditMode(props.todo.id)}
               autoFocus={true} onChange={props.updateText} />
    )
}
export default UpdateItem