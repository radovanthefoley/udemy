import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private numbers = [];

  onGameEvent(number: number) {
    // console.log(number);
    this.numbers.push(number);
  }
}
