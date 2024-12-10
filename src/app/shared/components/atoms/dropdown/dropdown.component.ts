import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() label: string = 'Select an option';
  @Input() id: string = 'dropdown';
  @Input() options: { value: string | number; tag: string }[] = [];
  @Input() dropdownClass: string = ''; // Optional for custom styles
  @Input() optionClass: string = ''; // Optional for custom option styles
  @Output() selectionChange = new EventEmitter<string | number>();

  onSelectionChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectionChange.emit(value);
  }
}
