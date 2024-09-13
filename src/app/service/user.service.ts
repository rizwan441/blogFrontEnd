import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { User } from '../component/users/users.component';

export interface UserData{
  item:[],
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(`http://localhost:3000/api/user/`).pipe(
      map((userdata)=>userdata
    ),
      catchError(err=>throwError(err))
    )
  }
  findByID(id:number):Observable<User>{
    return this.httpClient.get<User>('http://localhost:3000/api/user/' + id).pipe(
      map((user:User)=>user)
    )
  }



  
  
}
