import {useEffect, useMemo, useState} from "react";
import React from 'react';
export default function useTodos() {
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
    const [updateTodo, setUpdateTodo] = useState({})
    const [editMode, setEditMode] = useState(false)

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

    let filtersMap = useMemo(() => todos.filter(x => {

        return x.text.includes(valueInput)
    }), [valueInput, todos]);
    return {
        todo:todo,
        updateTodo:updateTodo,
        editMode:editMode,
        filtersMap:filtersMap,
        inputChange:inputChange,
        formSubmit:formSubmit,
        deleteToDo:deleteToDo,
        activateEditMode:activateEditMode,
        updateText:updateText,
        deactivateEditMode:deactivateEditMode,
        changeValueFilter:changeValueFilter,

    }
}