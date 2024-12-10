import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-secondary',
  template: `
  <button 
    mat-raised-button 
    class="button-secondary"
    (click)="onClick()">
    <span class="label">{{ label }}</span>
  </button>
  `,
  styleUrls: ['./button-secondary.component.scss']
})
export class ButtonSecondaryComponent {
  @Input() label: string = 'BUTTON';
  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
