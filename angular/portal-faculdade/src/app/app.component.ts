import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="template-container">
    <app-header></app-header>
    <main class="content">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }