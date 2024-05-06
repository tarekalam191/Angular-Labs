import { Component } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-wrapper',
  standalone: true,
  imports: [TodoFormComponent,TodoListComponent],
  templateUrl: './todo-wrapper.component.html',
  styleUrl: './todo-wrapper.component.css'
})
export class TodoWrapperComponent {
  list:any=[];
  index:number = 1;
  isComplete:boolean=false;

  AddingTodoToList(value:string){
    const todoItem = {
      id: this.index++, // Assuming you want to assign a unique ID
      task: value,
      status:this.isComplete
    };

    // Push the object into the list array
    this.list.push(todoItem);
  }
  ChangeStatus(id: number) {


    const taskToUpdate = this.list.find((task:any) => task.id == id);

      // Toggle the status of the task
      if(taskToUpdate){
        taskToUpdate.status = !(taskToUpdate.status);
       
      }

  }
  DeleteTask(id:number){
    this.list = this.list.filter((task : any) => task.id !== id)
  }


}
