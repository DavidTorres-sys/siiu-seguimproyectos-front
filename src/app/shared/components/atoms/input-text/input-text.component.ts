import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * InputTextComponent
 * 
 * A reusable text input component that integrates seamlessly with Angular Reactive Forms
 * and also emits an event whenever the input value changes.
 * 
 * Inputs:
 * - `label` (string): The label displayed next to the text input.
 * - `readonly` (boolean): Whether the input is read-only.
 * 
 * Outputs:
 * - `selectionChange` (EventEmitter<string | number>): Emits the value of the input whenever it changes.
 */
@Component({
  selector: 'app-input-text',
  template: `
    <mat-form-field>
      <mat-label>{{ label }}</mat-label>
      <input 
        matInput
        [value]="value"
        [readonly]="readonly"
        (input)="onInput($event)"
        (blur)="onTouched()"
      />
    </mat-form-field>
  `,
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ],
})
export class InputTextComponent implements ControlValueAccessor {
  /**
   * The label displayed next to the text input.
   */
  @Input() label!: string;

  /**
   * Determines if the input should be read-only.
   */
  @Input() readonly: boolean = false;

  /**
   * Event emitted whenever the input value changes.
   */
  @Output() selectionChange = new EventEmitter<string | number>();

  /**
   * Internal value for the input field.
   */
  @Input() value: string = '';

  /**
   * Callbacks for ControlValueAccessor.
   */
  onChange = (value: any) => {};
  onTouched = () => {};

  /**
   * Writes a new value to the input field.
   * @param value The new value to set.
   */
  writeValue(value: any): void {
    this.value = value || '';
  }

  /**
   * Registers a function to call when the input value changes.
   * @param fn The callback function.
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Registers a function to call when the input is touched (blur event).
   * @param fn The callback function.
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Handles the input event and propagates the value to the parent form control and selectionChange event.
   * @param event The input event.
   */
  onInput(event: Event): void {
    if (this.readonly) return;
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
    this.selectionChange.emit(value);
  }
}
