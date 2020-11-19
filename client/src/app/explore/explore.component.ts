import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  public user;
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(data => {
      console.log(data);
      this.user = data;
    })
  }

}
