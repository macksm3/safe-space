import { Component, Input, OnInit  } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-planet',
  providers: [DataService],
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit  {
  
  public message:string;

  @Input() label: string; 
  @Input() pathName: string;
  
  constructor(private data: DataService) { }


  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }
  
  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }

}
