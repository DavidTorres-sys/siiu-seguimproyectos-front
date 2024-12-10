import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  template: `
    <button 
      [type]="type" 
      mat-raised-button 
      (click)="onClick()">
      <span class="label">{{ label }}</span>
      <mat-icon *ngIf="icon">{{ icon }}</mat-icon>
    </button>
  `,
  styleUrls: ['./button-primary.component.scss']
})
export class ButtonPrimaryComponent {
  @Input() label: string = 'BUTTON';
  @Input() icon: string = '';
  @Input() type: string = 'button';
  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
