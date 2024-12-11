import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * ButtonSecondaryComponent
 * 
 * A reusable secondary button component styled with Angular Material.
 * This component supports customization through inputs and emits an event when clicked.
 * 
 * Inputs:
 * - `label` (string): The text displayed on the button (default: 'BUTTON').
 * 
 * Outputs:
 * - `clicked` (EventEmitter<void>): Emits an event when the button is clicked.
 * 
 * Usage Example:
 * <app-button-secondary 
 *   label="Cancel" 
 *   (clicked)="onCancel()">
 * </app-button-secondary>
 */
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
  styleUrls: ['./button-secondary.component.scss'], 
})
export class ButtonSecondaryComponent {
  /**
   * The text displayed on the button.
   * Default: 'BUTTON'.
   */
  @Input() label: string = 'BUTTON';

  /**
   * Event emitted when the button is clicked.
   */
  @Output() clicked = new EventEmitter<void>();

  /**
   * Handles the button click event and emits the `clicked` output.
   */
  onClick(): void {
    this.clicked.emit();
  }
}
