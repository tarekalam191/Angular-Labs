import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
@Input() TodoTask:any;
@Output() changeStatus = new EventEmitter();
@Output() deleteTask = new EventEmitter();
ChangeStatus(id:number){
this.changeStatus.emit(id);
}
DeleteTask(id:number){
this.deleteTask.emit(id);
}
}
