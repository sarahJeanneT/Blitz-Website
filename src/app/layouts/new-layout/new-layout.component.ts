import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-layout',
  template: `
    <div class="new-layout">
      <div class="new-layout__nav">
        <app-nt-header></app-nt-header>
      </div>
      <div class="new-layout__content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['new-layout.component.scss'],
})
export class NewLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
