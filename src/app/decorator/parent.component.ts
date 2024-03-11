import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    
    <app-child
      [inputValue]="parentInput"
      (outputEvent)="handleOutput($event)"
    ></app-child>
    <p>Received from child: {{ childOutput }}</p>
  `,
})
export class ParentComponent {
  parentInput: string = 'Hello from parent!';
  childOutput: string = '';

  handleOutput(value: string) {
    this.childOutput = value;
  }
}
