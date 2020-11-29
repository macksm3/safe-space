import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent {
  
  public message:string;

  @Input() label: string; 
  @Input() pathName: string;
  
  constructor() { }

}
