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
  const removeToDo = (id) => {
    const removeItems = todos.filter((todoTrue) => todoTrue.id !== id);
    setTodos(removeItems);
  };
  const changeValueFilter = (newValueInput) => {
    setValueInput(newValueInput);
  };
  const updateToDo = (updateItem) => {
    const updateTodos = todos.map((todoUp) => (todoUp.id === updateItem.id ? updateItem : todoUp));
    setTodos(updateTodos);
  };

  const filtersMap = useMemo(() => todos.filter((x) => x.text.includes(valueInput)),
    [valueInput, todos]);
  return {
    filtersMap,
    addToDo,
    removeToDo,
    changeValueFilter,
    updateToDo,

  };
}
