import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';

// interface Food {
//   value: string;
//   viewValue: string;
// }
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,RouterOutlet,RouterLink,MatSelectModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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
    }
   
  ];

  navigateto(value:any){
    this.router.navigate(['../',value])

  }
}
