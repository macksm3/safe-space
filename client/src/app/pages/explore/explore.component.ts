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
      console.log("I'm your user data")
      console.log(data);
      this.user = data;
      this.welcomeTitle = "Welcome " + data.given_name + "!";
    })
  }

}
