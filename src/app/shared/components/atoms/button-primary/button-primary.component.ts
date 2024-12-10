import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  template: `
    <button 
      [type]="type" 
      mat-raised-button 
      class="button-with-icon" 
      [disabled]="disabled" 
      (click)="onClick()">
      {{ label }}
      <mat-icon *ngIf="icon">{{ icon }}</mat-icon>
    </button>
  `,
  styleUrls: ['./button-primary.component.scss']
})
export class ButtonPrimaryComponent {
  @Input() label: string = 'BUTTON';
  @Input() icon: string = '';
  @Input() disabled: boolean = false;
  @Input() type: string = 'button';
  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
