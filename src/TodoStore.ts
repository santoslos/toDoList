export namespace TodoStore {
  export interface Todo {
    id: number;
    textTodo: string;
    [k: string]: unknown;
  }
  export interface UpdateResponse {
    raw: string[];
    affected: number;
    generatedMaps: string[];
    [k: string]: unknown;
  }
  export interface DeleteResponse {
    raw: string[];
    affected: number;
    [k: string]: unknown;
  }
}

export interface TodoStore {
  version: '1';
  routes: {
    '/': {
      GET: {
        response: string;
      };
    };
    '/todo-list': {
      GET: {
        response: TodoStore.Todo[];
      };
      POST: {
        body: {
          textTodo?: string;
          [k: string]: unknown;
        };
      };
    };
    '/todo-list/{id}': {
      PUT: {
        body: TodoStore.Todo;
        params: {
          id: number;
        };
        response: TodoStore.UpdateResponse;
      };
      DELETE: {
        params: {
          id: number;
        };
        response: TodoStore.DeleteResponse;
      };
    };
  };
}
