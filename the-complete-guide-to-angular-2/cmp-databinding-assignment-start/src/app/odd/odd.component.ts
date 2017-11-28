import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  template: `
      <p class="text-center" style="background-color: beige; margin: 0">
          {{ number }}
      </p>
  `,
  styles: []
})
export class OddComponent {

  @Input()
  private number: number;

}