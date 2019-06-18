import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  template: `
    <input type="text" placeholder="할일을 입력" (keyup.enter)="addTodo(input.value)" #input>
  `,
  styles: []
})
export class TodoInputComponent  {
  @Output() add = new EventEmitter<string>();

  addTodo(content: string) {
    this.add.emit(content);
  }

}
