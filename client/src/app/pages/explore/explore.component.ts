import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-explore',
  providers: [DataService],
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
