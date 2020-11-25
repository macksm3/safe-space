import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { DataService } from "../services/data.service";

@Component({
  selector: 'app-state-template',
  templateUrl: './state-template.component.html',
  styleUrls: ['./state-template.component.scss']
})

export class StateTemplateComponent implements OnInit {

  public stateTitle: string;
  public stateName: string;

  public restaurantPath: string;
  public cafePath: string;
  public resourcePath: string;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data) => {
        this.stateName = data.stateName;
        this.stateTitle = data.stateTitle;
        
        this.resourcePath = "/" + this.stateName + "-resources";
        this.cafePath = "/" + this.stateName + "-cafe";
        this.restaurantPath = "/" + this.stateName + "-restaurants";

        console.log(this.stateTitle);
        console.log(this.resourcePath);
        console.log(this.restaurantPath);
        console.log(this.cafePath);
      });
  }

}
