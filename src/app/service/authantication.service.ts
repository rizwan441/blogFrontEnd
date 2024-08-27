import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


export interface LoginForm{
  email:string,
  password:string
}
export interface registrationForm{
  email:string,
  password:string,
  name:string;
  username:string
}


@Injectable({
  providedIn: 'root'
})
export class AuthanticationService {
  constructor(private httpClient: HttpClient) {}

  login(loginForm:LoginForm): Observable<void> {
    return this.httpClient.post<{ accessToken: string }>(
      `http://localhost:3000/api/user/login`,
      {email: loginForm.email,
        password: loginForm.password 
      }
    ).pipe(
      map((token: { accessToken: string }) => {
        localStorage.setItem('blog-token', token.accessToken);
      })
    );
  }


  registration(user:registrationForm){
    return this.httpClient.post<any>(`http://localhost:3000/api/user/`,user).pipe(
      map((user)=>user)
    )
  }
}
