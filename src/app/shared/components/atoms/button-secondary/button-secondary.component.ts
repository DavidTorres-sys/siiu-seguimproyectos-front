import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-secondary',
  template: `
  <button mat-raised-button 
        class="button-secondary mat-raised-button"
        [disabled]="disabled"
        (click)="onClick()">
  {{ label }}
  </button>
  `,
  styleUrls: ['./button-secondary.component.scss']
})
export class ButtonSecondaryComponent {
  @Input() label: string = 'BUTTON';
  @Input() disabled: boolean = false;
  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
