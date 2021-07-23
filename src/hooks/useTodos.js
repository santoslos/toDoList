import { useEffect, useMemo, useState } from 'react';

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

export default function useTodos() {
  const [todo, setTodo] = useState('');
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
  const inputChange = (e) => {
    setTodo(e.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    if (todo !== '') {
      setTodos([
        ...todos, {

          id: todos.length + randomInteger(1, 550000),
          text: todo.trim(),
        },
      ]);
    }
    setTodo('');
  };
  const deleteToDo = (id) => {
    const removeItems = todos.filter((todoTrue) => todoTrue.id !== id);
    setTodos(removeItems);
    setUpdateTodo({});
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
    todo,
    updateTodo,
    editMode,
    filtersMap,
    inputChange,
    formSubmit,
    deleteToDo,
    activateEditMode,
    updateText,
    deactivateEditMode,
    changeValueFilter,

  };
}
