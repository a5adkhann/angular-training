import { Component } from '@angular/core';
import { UserImageComponent } from '../user-image/user-image.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-user-profile',
  imports: [UserImageComponent, UserDetailComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

}
