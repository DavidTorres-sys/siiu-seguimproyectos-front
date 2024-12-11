import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {
  @Input() label!: string;
  @Output() selectionChange = new EventEmitter<string | number>();
  
  onSelectionChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectionChange.emit(value);
  }
}
