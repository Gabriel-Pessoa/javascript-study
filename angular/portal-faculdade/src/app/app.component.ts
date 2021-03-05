import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-template">
    <app-header></app-header>
    <div class="content">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }