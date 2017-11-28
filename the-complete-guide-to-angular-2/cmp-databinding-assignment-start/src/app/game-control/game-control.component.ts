import { Component, EventEmitter, Output } from '@angular/core';
import Timer = NodeJS.Timer;

@Component({
  selector: 'app-game-control',
  template: `
    <p>
      <button (click)="onStart()" [disabled] = "isRunning" [ngClass]="{'btn-success' : !isRunning}">Start</button>
      <button (click)="onStop()" [disabled] = "!isRunning" [ngClass]="{'btn-danger' : isRunning}">Stop</button>
    </p>
  `,
  styles: []
})
export class GameControlComponent {

  @Output('onGameEvent')
  public gameEvent: EventEmitter<number> = new EventEmitter();
  private isRunning = false;
  private timer: Timer;

  onStart() {
    // console.log('start');
    if (!this.isRunning) {
      this.isRunning = true;
      let increment = 0;
      this.gameEvent.emit(increment);
      this.timer = setInterval(() => {
        increment++;
        this.gameEvent.emit(increment);
        // console.log(increment);
      }, 1000);
    }
  }

  onStop() {
    // console.log('stop');
    if (this.isRunning) {
      this.isRunning = false;
      clearInterval(this.timer);
    }
  }

}
