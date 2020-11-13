import { Component, Input, OnInit } from '@angular/core';
// Nov 13 MWE imports needed for routes
// import { Router, ActivatedRoute, ParamMap } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(
    // Nov 13 MWE inject instance of ActivatedRoute to constructor
    // private route: ActivatedRoute,
  ) { }

  // Nov 13 MWE update this method to access the ActivatedRoute
  ngOnInit(): void {
    
  }

}
