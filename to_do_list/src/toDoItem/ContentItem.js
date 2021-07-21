import React from 'react'
import "./Item.css"

const ContentItem = (props) => {


    return (
            <div className={"contentItem"}
                 onDoubleClick={() => props.activateEditMode(props.todo)} >
                <span>{props.todo.text}</span>
                <button onClick={() => props.deleteToDo(props.todo.id)} type="button"
                        className={"btn btn-danger"}>
                    X
                </button>
        </div>


    )

}
export default ContentItem