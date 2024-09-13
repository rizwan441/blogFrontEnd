import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { UserService } from '../../service/user.service';
import { User } from '../users/users.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,HttpClientModule,CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
  providers: [UserService],
})
export class UserProfileComponent implements OnInit {
  userId? :number;
  private sub:Subscription | undefined;
  user?:User


  constructor(
    private activateRoute: ActivatedRoute, // Corrected typo
    private userService: UserService
  ){}

  ngOnInit(): void {
    this.sub = this.activateRoute.params.subscribe(params => {
      this.userId = parseInt(params['id'], 10);
      
      if (this.userId) {
        this.userService.findByID(this.userId).subscribe({
          next: (user: User) => {
            this.user = user;
            console.log(this.user)

          },
          error: (err) => {
            console.error('API call failed:', err);
          }
        });
      }

    });
  }
  


}
