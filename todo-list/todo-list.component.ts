import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li *ngFor="let todo of todos" [id]="todo.id">
        <input type="checkbox" checked="{{todo.completed ? 'checked' : ''}}" (change)="changeTodo(todo.id)">
        {{todo.content}}
        <button (click)="removeTodo(todo.id)">X</button>
      </li>
    </ul>
  `,
  styles: []
})
export class TodoListComponent {
  @Input() todos:Todo;
  @Output() remove = new EventEmitter();
  @Output() change = new EventEmitter();

  removeTodo(id: number) {
    this.remove.emit(id);
  }

  changeTodo(id: number) {
    this.change.emit(id);
  }
}
