import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h2>Child Component</h2>
    <p>Received from parent: {{ inputValue }}</p>
    <button (click)="sendOutput()">Send Output to Parent</button>
    <h2>Parent Component</h2>
  `,
})
export class ChildComponent {
  @Input() inputValue!: string;
  @Output() outputEvent: EventEmitter<string> = new EventEmitter<string>();

  sendOutput() {
    this.outputEvent.emit('Hello from child!');
  }
}
