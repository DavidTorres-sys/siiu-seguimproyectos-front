import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
  <mat-card>
    <mat-icon class="alert-icon" *ngIf="icon">{{ icon }}</mat-icon>
    <span class="alert-label">{{ label }}</span>
  </mat-card>
  `,
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() label!: string;
  @Input() icon: string = '';
}
