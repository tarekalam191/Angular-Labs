import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})

export class SignUpComponent {
signUpForm:FormGroup;

constructor(){
  this.signUpForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email ,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/)]),
    password:new FormControl('',[Validators.minLength(8),Validators.required,    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)

  ]),
    name:new FormControl('',[Validators.minLength(3),Validators.required]),
    userName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    confirmPassword:new FormControl('',[Validators.required]),
  })
}
handleSubmit(){
console.log(this.signUpForm)
console.log(this.signUpForm.value)
}
}
