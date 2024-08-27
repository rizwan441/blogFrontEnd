import { Component } from '@angular/core';
import { AuthanticationService } from '../../service/authantication.service';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthanticationService],

})
export class LoginComponent {
  loginForm!: FormGroup
  constructor(private authService:AuthanticationService,
    private router:Router
  ){}

  ngOnInit():void{
    this.loginForm = new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email,Validators.minLength(6)]),
      password: new FormControl (null,[Validators.required,Validators.minLength(4)])
    })
  }

  // login(){
  //   this.authService.login('rizwanzafar12@gmail.com', "asdfgh")
  //   .subscribe({
  //     next: (data: any) => console.log(data),
  //     complete: () => console.log('Login request complete')
  //   });
  
  onSubmit(){
    if(this.loginForm.invalid){
      return
    }
    this.authService.login(this.loginForm.value).pipe(
      map((token) => {
        this.router.navigate(['/admin']);
      })
    ).subscribe();
  }

  }




