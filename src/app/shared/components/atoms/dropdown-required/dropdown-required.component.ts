import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-required',
  templateUrl: './dropdown-required.component.html',
  styleUrls: ['./dropdown-required.component.scss']
})
export class DropdownRequiredComponent {
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
