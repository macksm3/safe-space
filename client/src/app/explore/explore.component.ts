import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  public user;
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.userProfile$.subscribe(data => {
      this.user = data;
    })
  }

}
