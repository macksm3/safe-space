import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  // template: `
  //   <div *ngIf="auth.user$ | async as user">
  //     <h1>{{ user.name }}</h1>
  //     <h4>{{ user.email }}</h4>
  //     <img src="{{ user.picture }}" alt="Profile Picture" />
  //   </div>`
})
// export class UserProfileComponent {
//   constructor(public auth: AuthService) {}
// }

export class UserProfileComponent implements OnInit {
  public user;
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(data => {
      console.log(data);
      this.user = data;
    })
  }

}