import { Component, OnInit  } from '@angular/core';


import { todo } from './todo';
import { TodoService } from './todo.service';


@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  
})

export class DashboardComponent implements OnInit {

  todolist: todo[] =  [];

  constructor(private TodoService: TodoService) { }

  ngOnInit(): void {
    this.TodoService.getTodos()
      .then(todos => this.todolist = todos);

  }
}
