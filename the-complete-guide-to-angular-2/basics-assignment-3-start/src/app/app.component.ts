import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .white-text {
        color: white;
    }
  `]
})
export class AppComponent {
  paragraphShown = false;
  clicksHistory: number[] = [];

  decideButtonLabel(): string {
    if (this.paragraphShown) {
      return 'Hide Details';
    } else {
      return 'Display Details';
    }
  }

  onButtonClick(event: Event) {
    this.paragraphShown = !this.paragraphShown;
    this.clicksHistory.push(event.timeStamp);
  }

  decideBackground(entry: number): string {
    if (this.clicksHistory.indexOf(entry) < 4) {
      return 'white';
    } else {
      return 'blue';
    }
  }
}
