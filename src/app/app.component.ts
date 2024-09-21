import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { link } from 'fs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
HttpClientModule

// interface Food {
//   value: string;
//   viewValue: string;
// }
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,RouterOutlet,RouterLink,MatSelectModule,HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})




export class AppComponent {
  constructor(private router:Router){}
  title = 'frontEnd';
  entriese = [
    {
      name:'Login',
      link:'login'
    },
    {
      name:"Register",
      link:"register"
    },
    {
      name:"Update-profile",
      link:"updateprofile"
    }
   
  ];

  navigateto(value:any){
    this.router.navigate(['../',value])

  }
}
