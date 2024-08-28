import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

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
  
}
