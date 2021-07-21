import './App.css';
import React from 'react'
import {useState, useEffect, useMemo} from "react";
import RenderCompoment from "./RenderCompoment/RenderCompoment";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [updateTodo, setUpdateTodo] = useState({})
    const [editMode, setEditMode] = useState(false)
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            return JSON.parse(savedTodos)
        } else {
            return []
        }
    })
    const [valueInput, setValueInput] = useState("")

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    const inputChange = (e) => {
        setTodo(e.target.value);

    }
    const formSubmit = (e) => {
        debugger;
        e.preventDefault();
        if (todo !== "") {
            setTodos([
                ...todos, {

                    id: todos.length + 1,
                    text: todo.trim(),
                }
            ])
        }

        setTodo("");
    }
    const deleteToDo = (id) => {
        const removeItems = todos.filter((todo) => {
            return todo.id !== id;
        })
        setTodos(removeItems)
    }

    const activateEditMode = (todo) => {


        setUpdateTodo({...todo})


        setEditMode(true)

    }

    const updateText = (e) => {
        if (updateTodo) {
            setUpdateTodo({...updateTodo, text: e.currentTarget.value}
            )
        }

    }
    const deactivateEditMode = (id) => {


        const updateItem = todos.map((todo) => {
            return todo.id === id ? updateTodo : todo;
        })
        setEditMode(false);
        setTodos(updateItem);
    }

    const changeValueFilter = (e) => {
        setValueInput(e.target.value)
    }

    let value = useMemo(() => todos.filter(x => {

        return x.text.includes(valueInput)
    }), [valueInput, todos]);

    return (

        <RenderCompoment formSubmit={formSubmit} inputChange={inputChange} todos={todos} editMode={editMode}
                         activateEditMode={activateEditMode} deleteToDo={deleteToDo} updateTodo={updateTodo}
                         deactivateEditMode={deactivateEditMode}
                         updateText={updateText} todo={todo}
                         changeValueFilter={changeValueFilter}  filtersMap={value}
        />


    )
        ;
}

export default App;
