import { Injectable } from '@angular/core';

import { todo } from './todo';
import { TODOS } from './mock-todos';

@Injectable()
export class TodoService {
  getTodos(): Promise<todo[]> {
    return Promise.resolve(TODOS);
  }

  getTodo(id: number): Promise<todo> {
    return this.getTodos()
               .then(todos => todos.find(todo => todo.id === id));
  }
}