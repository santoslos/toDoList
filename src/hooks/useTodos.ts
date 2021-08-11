import { useMemo, useState, useCallback } from 'react';
import axios from 'axios';
import { Taxios } from '@simplesmiler/taxios';
import { TodoStore } from '../TodoStore';
import useSWR from 'swr';
import { Todo } from 'types/TypesTodo';

const taxios = new Taxios<TodoStore>(axios.create({ baseURL: 'http://localhost:3000' }));

const getTodos = async (url: '/todo-list') => {
  let response = await taxios.get(url);
  return response.data;
};

const addPost = async (url: '/todo-list', dataText: string) => {
  let response = await taxios.post(url, { textTodo: dataText });
  return response;
};

export function useTodos() {
  let { data, mutate, isValidating } = useSWR('/todo-list', getTodos);
  const [valueInput, setValueInput] = useState<string>('');

  const addTodo = useCallback(async (newTodoText: string) => {
    if (newTodoText !== '') {
      addPost('/todo-list', newTodoText).then((res) => {
        if (res.status === 201) {
          mutate(data, true);
        }
      });
    }
  }, []);

  const removeTodo = useCallback(async (id: number) => {
    await taxios.delete('/todo-list/{id}', { params: { id: id } }).then((res) => {
      if (res.status === 200) {
        mutate(data, true);
      }
    });
  }, []);

  const onChangeValueFilter = useCallback((newValueInput: string): void => {
    setValueInput(newValueInput);
  }, []);

  const updateTodo = useCallback(async (updateItem: Todo) => {
    if (Array.isArray(data) && data.some((todo) => JSON.stringify(todo) === JSON.stringify(updateItem))) {
      return;
    }

    taxios.put('/todo-list/{id}', { ...updateItem }, { params: { id: updateItem.id } }).then((res) => {
      if (res.status === 200) {
        mutate(data, true);
      }
    });
  }, []);

  const filteredTodos = useMemo(() => {
    if (Array.isArray(data)) {
      return data.filter((x) => x.textTodo.includes(valueInput));
    }
    return [];
  }, [valueInput, data]);

  return {
    filteredTodos,
    addTodo,
    removeTodo,
    onChangeValueFilter,
    updateTodo,
    isValidating,
  };
}
