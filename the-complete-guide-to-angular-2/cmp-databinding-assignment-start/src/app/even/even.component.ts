import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  template: `
      <p class="text-center" style="background-color: thistle; margin: 0">
          {{ number }}
      </p>
  `,
  styles: []
})
export class EvenComponent {

  @Input()
  private number: number;

}
