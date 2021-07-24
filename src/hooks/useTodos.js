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

  const addTodo = (newTodoText) => {
    if (newTodoText !== '') {
      setTodos(() => (
        [
          ...todos, {
            id: todos.length ? todos[todos.length - 1].id + 1 : 0,
            text: newTodoText.trim(),
          },
        ]
      ));
    }
  };

  const removeTodo = (id) => {
    const removeItems = todos.filter((todoTrue) => todoTrue.id !== id);
    setTodos(removeItems);
  };

  const onChangeValueFilter = (newValueInput) => {
    setValueInput(newValueInput);
  };

  const updateTodo = (updateItem) => {
    const updateTodos = todos.map((todoUp) => (todoUp.id === updateItem.id ? updateItem : todoUp));
    setTodos(updateTodos);
  };

  const filteredTodos = useMemo(() => todos.filter((x) => x.text.includes(valueInput)),
    [valueInput, todos]);

  return {
    filteredTodos,
    addTodo,
    removeTodo,
    onChangeValueFilter,
    updateTodo,

  };
}
