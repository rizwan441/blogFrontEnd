import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { AuthanticationService } from '../../service/authantication.service';
import { map } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';




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
