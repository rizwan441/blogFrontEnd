import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { map, Observable } from 'rxjs';
import { JwtHelperService,  } from "@auth0/angular-jwt";
import { isPlatformBrowser } from '@angular/common';




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

export   const AccessToken = "blog-token"


@Injectable({
  providedIn: 'root'
})
export class AuthanticationService {
  constructor(private httpClient: HttpClient,private jwtHelper:JwtHelperService, @Inject(PLATFORM_ID) private platformId: Object) {}


  login(loginForm:LoginForm): Observable<void> {
    return this.httpClient.post<{ accessToken: string }>(
      `http://localhost:3000/api/user/login`,
      {email: loginForm.email,
        password: loginForm.password 
      }
    ).pipe(
      map((token: { accessToken: string }) => {
        localStorage.setItem(AccessToken, token.accessToken);
      })
    );
  }


  registration(user:registrationForm){
    return this.httpClient.post<any>(`http://localhost:3000/api/user/`,user).pipe(
      map((user)=>user)
    )
  }

  isAuthenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem(AccessToken);
      return token ? !this.jwtHelper.isTokenExpired(token) : false;
    }
    return false; // Not running in the browser
  }

}
