import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public auth: AuthService) { }

  public user: any;

  ngOnInit(): void {
    this.auth.userProfile$.subscribe(data => {
      console.log(data);
      this.user = data;
  })
  }

}
