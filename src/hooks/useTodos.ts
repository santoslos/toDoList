import { useEffect, useMemo, useState } from 'react';
import { Todo } from 'TypesTodo';


export function useTodos() {

  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  });

  const [valueInput, setValueInput] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodoText:string):void => {
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

  const removeTodo = (id: number):void => {
    const removeItems = todos.filter((todoTrue) => todoTrue.id !== id);
    setTodos(removeItems);
  };

  const onChangeValueFilter = (newValueInput: string): void => {
    setValueInput(newValueInput);
  };

  const updateTodo = (updateItem: Todo) => {
    const updateTodos = todos.map((todoUp) => (todoUp.id === updateItem.id ? updateItem : todoUp));
    setTodos(updateTodos);
  };

  const filteredTodos  = useMemo(() => todos.filter((x) => x.text.includes(valueInput)),
    [valueInput, todos]);

  return {
    filteredTodos,
    addTodo,
    removeTodo,
    onChangeValueFilter,
    updateTodo,

  };
}
