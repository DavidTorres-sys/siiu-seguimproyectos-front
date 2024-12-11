import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * DropdownComponent
 * 
 * A reusable dropdown component that allows users to select an option from a list.
 * This component is highly customizable and emits an event whenever the selected option changes.
 * 
 * Inputs:
 * - `label` (string): The label for the dropdown (default: 'Select an option').
 * - `id` (string): The unique identifier for the dropdown element (default: 'dropdown').
 * - `options` (array): An array of objects representing the options in the dropdown. Each option has a `value` and a `tag` (default: empty array).
 * - `dropdownClass` (string): Additional class(es) to apply to the dropdown element (optional).
 * - `optionClass` (string): Additional class(es) to apply to the option elements (optional).
 * 
 * Outputs:
 * - `selectionChange` (EventEmitter<string | number>): Emits the value of the selected option when it changes.
 * 
 * Usage Example:
 * <app-dropdown 
 *   label="Choose a fruit" 
 *   [options]="[{ value: 'apple', tag: 'Apple' }, { value: 'banana', tag: 'Banana' }]" 
 *   (selectionChange)="onSelectionChange($event)">
 * </app-dropdown>
 */
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  /**
   * The label for the dropdown.
   * Default: 'Select an option'.
   */
  @Input() label: string = 'Select an option';

  /**
   * The unique identifier for the dropdown element.
   * Default: 'dropdown'.
   */
  @Input() id: string = 'dropdown';

  /**
   * An array of options to display in the dropdown.
   * Each option must have a `value` and a `tag`.
   * Default: an empty array.
   */
  @Input() options: { value: string | number; tag: string }[] = [];

  /**
   * Additional class(es) to apply to the dropdown element.
   * This input is optional.
   */
  @Input() dropdownClass: string = ''; 

  /**
   * Additional class(es) to apply to the option elements.
   * This input is optional.
   */
  @Input() optionClass: string = '';

  /**
   * Event emitted when the selected option changes.
   * Emits the `value` of the selected option.
   */
  @Output() selectionChange = new EventEmitter<string | number>();

  /**
   * Handles the selection change event from the dropdown and emits the selected value.
   * @param event The change event triggered by the dropdown.
   */
  onSelectionChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectionChange.emit(value);
  }
}
