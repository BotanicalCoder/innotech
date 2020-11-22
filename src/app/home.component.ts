import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-about></app-about>

  <app-schedule></app-schedule>
  
  <app-contact></app-contact>
  `
})
export class HomeComponent {
  pageTitle: string = 'Acme Product Management';
}