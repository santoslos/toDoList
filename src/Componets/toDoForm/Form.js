import React from 'react'


const Form = (props) => {
    return (

            <form onSubmit={props.formSubmit}>
                <input name={"todo"} type={"text"} placeholder={"Create a new todo"} value={props.todo}
                       onChange={props.inputChange} />
            </form>


    )
}
export default Form