import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: '<h1 class="neon">{{title}}</h1>',
  // templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() title: string;

}
