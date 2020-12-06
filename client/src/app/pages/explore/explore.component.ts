import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  public user: string;
  public welcomeTitle: string;

  constructor(public auth: AuthService) { }

  

  ngOnInit(): void {
    this.auth.userProfile$.subscribe(data => {
      this.user = data;
      localStorage.setItem('userData', data.given_name);
      this.welcomeTitle = "Welcome " + data.given_name + "!";
    })
  }

}
