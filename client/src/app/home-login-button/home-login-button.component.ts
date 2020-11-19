import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home-login-button',
  templateUrl: './home-login-button.component.html',
  styleUrls: ['./home-login-button.component.scss']
})
export class HomeLoginButtonComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() { }
}