import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  template: `
    <mat-form-field>
      <mat-label> {{ label }} </mat-label>
      <input matInput [matDatepicker]="picker">
      <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  `,
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {
  @Input() label!: string;

}
