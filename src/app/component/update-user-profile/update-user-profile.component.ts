import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule



@Component({
  selector: 'app-update-user-profile',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './update-user-profile.component.html',
  styleUrl: './update-user-profile.component.css'
})
export class UpdateUserProfileComponent {

}
