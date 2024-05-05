import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  inputs={
    email:"",
    password:""

  }

 formValueChanged(formRef:any){
    console.log(formRef)
    console.log(this.inputs)
  }
}
