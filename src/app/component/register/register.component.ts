import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { AuthanticationService } from '../../service/authantication.service';
import { map } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';



class CustomValidator{
//   static passwordContainNumber(control:AbstractControl):ValidationErrors{
//     const regex = /\d/;

//     if(regex.test(control.value)&&control.value !=null){
//       return null;
//     }else{
//       return {passwordInvalid:true}
//     }
//   }

//   static passwordMatch(control:AbstractControl):ValidationErrors{
//     const password = control.get('password')?.value
//     const confirmPassword = control.get('confirmPassword')?.value

//     if(password==confirmPassword &&( password !==null && confirmPassword !==null)){
//       return null

//     }
//     else{

//     }

//   }
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatButtonModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [AuthanticationService],

})

export class RegisterComponent {
 
 

  registrationForm! : FormGroup
  constructor(private authService:AuthanticationService,private router:Router){}

ngOnInit():void{
  this.registrationForm= new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(5)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    username:new FormControl('',[Validators.required,Validators.minLength(5)]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),
    confirmPassword:new FormControl('',[Validators.required,Validators.minLength(5)]),
    
  })
}


onSubmit(){
  console.log(this.registrationForm.value)

  if(!this.registrationForm.valid){
    return
  }
 this.authService.registration(this.registrationForm.value).pipe(
  map((user)=>this.router.navigate(['/login']))
 ).subscribe()

}

}
