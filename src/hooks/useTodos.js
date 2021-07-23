import { useEffect, useMemo, useState } from 'react';

export function useTodos() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  });
  const [valueInput, setValueInput] = useState('');
  const [updateTodo, setUpdateTodo] = useState({});
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const addToDo = (newTodoText) => {
    if (newTodoText !== '') {
      setTodos(() => (
        [
          ...todos, {
            id: todos.length ? todos[todos.length - 1].id + 1 : 0,
            text: newTodoText.trim(),
          },
        ]));
    }
  };
  const deleteToDo = (id) => {
    const removeItems = todos.filter((todoTrue) => todoTrue.id !== id);
    setTodos(removeItems);
  };

  const activateEditMode = (todoUpdate) => {
    setUpdateTodo({ ...todoUpdate });

    setEditMode(true);
  };

  const updateText = (e) => {
    if (updateTodo) {
      setUpdateTodo({ ...updateTodo, text: e.currentTarget.value });
    }
  };
  const deactivateEditMode = (id) => {
    const updateItem = todos.map((todoUp) => (todoUp.id === id ? updateTodo : todoUp));
    setEditMode(false);
    setTodos(updateItem);
  };

  const changeValueFilter = (e) => {
    setValueInput(e.target.value);
  };

  const filtersMap = useMemo(() => todos.filter((x) => x.text.includes(valueInput)),
    [valueInput, todos]);
  return {
    updateTodo,
    editMode,
    filtersMap,
    addToDo,
    deleteToDo,
    activateEditMode,
    updateText,
    deactivateEditMode,
    changeValueFilter,

  };
}
