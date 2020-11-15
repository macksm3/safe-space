import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'safe-space';
}

@Component({
  selector: 'app-auth-button',
  template: '<button mat-raised-button (click)="auth.loginWithRedirect()">LOG IN / SIGN UP</button>',
  styleUrls: ['./app.component.scss']
})
export class AuthButtonComponent {
  // Inject the authentication service into your component through the constructor
  constructor(public auth: AuthService) {}
}