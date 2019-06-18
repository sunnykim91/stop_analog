import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.interface';
import { generate } from 'rxjs';

@Component({
  selector: 'app-todos',
  template: `
    <app-todo-input (add)="addTodo($event)"></app-todo-input>
    <app-todo-list [todos]="todos" (remove)="removeTodo($event)" (change)="changeTodo($event)"></app-todo-list>
    <pre>{{todos | json}}</pre>
  `,
  styles: []
})
export class TodosComponent {

  newtodo: any;

  todos: Todo[] = [
    { id: 1, content:'HTML', completed: false},
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JAVASCRIPT', completed: false }
  ]

  addTodo(content: string) {
    this.newtodo = { id: this.generateId(), content, completed:false };
    this.todos = [this.newtodo, ...this.todos];
  } 

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo)=>todo.id !== id);
  }

  changeTodo(id: number) {
    this.todos = this.todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }

  generateId() {
    return this.todos.length? Math.max(...this.todos.map((todo)=>todo.id)) + 1 : 1;
  }

}
