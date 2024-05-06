import { Component, EventEmitter, Output } from '@angular/core';
import {  FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  TodoValue=new FormControl();
  @Output() handleAddingTodo = new EventEmitter();
  handleTodo(){
    const todoText = this.TodoValue.value; 

    if (!todoText) {
      alert('Todo value cannot be empty');
      return;
    }
  this.handleAddingTodo.emit(this.TodoValue.value);
 }
}
