import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * InputTextComponent
 * 
 * A reusable text input component that emits an event whenever the input value changes.
 * This component is designed to capture user input and notify the parent component of any changes.
 * 
 * Inputs:
 * - `label` (string): The label displayed next to the text input (required).
 * 
 * Outputs:
 * - `selectionChange` (EventEmitter<string | number>): Emits the value of the input whenever it changes.
 * 
 * Usage Example:
 * <app-input-text 
 *   label="Enter your name" 
 *   (selectionChange)="onInputChange($event)">
 * </app-input-text>
 */
@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent {
  /**
   * The label displayed next to the text input.
   * This input is required and should be passed by the parent component.
   */
  @Input() label!: string;

  /**
   * Event emitted whenever the input value changes.
   * The emitted value is the current value of the input.
   */
  @Output() selectionChange = new EventEmitter<string | number>();

  /**
   * Handles the input change event and emits the new value.
   * @param event The change event triggered by the text input.
   */
  onSelectionChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.selectionChange.emit(value);
  }
}
