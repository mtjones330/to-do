import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'td-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Output()
  add = new EventEmitter<string>()

  constructor() {}

  addToDo = (todo: HTMLInputElement) => {

    this.add.emit(todo.value);

    todo.value = "";
  }
}
