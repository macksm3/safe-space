import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { DataService } from "../services/data.service";

@Component({
  selector: 'app-state-template',
  // providers: [DataService],
  templateUrl: './state-template.component.html',
  styleUrls: ['./state-template.component.scss']
})

export class StateTemplateComponent implements OnInit {

  public stateName: string;

  constructor(private route: ActivatedRoute) { }
  // private data: DataService

  ngOnInit() {
    this.route.data
      .subscribe((data) => {
        this.stateName = data.stateName;
        console.log(data)
      });
    // this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    // this.data.changeMessage("Hello from Sibling")
  }

}
