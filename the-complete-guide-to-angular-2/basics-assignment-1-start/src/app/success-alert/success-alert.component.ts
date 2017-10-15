import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
    <p class="alert alert-success">Success!</p>
  `
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
