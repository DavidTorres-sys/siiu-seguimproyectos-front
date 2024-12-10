import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/atoms/alert/alert.component';
import { InputSelectComponent } from './components/atoms/input-select/input-select.component';
import { InputTextComponent } from './components/atoms/input-text/input-text.component';
import { ButtonSecondaryComponent } from './components/atoms/button-secondary/button-secondary.component';
import { ButtonPrimaryComponent } from './components/atoms/button-primary/button-primary.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AlertComponent,
    InputSelectComponent,
    InputTextComponent,
    ButtonSecondaryComponent,
    ButtonPrimaryComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    MatIconModule,
  ]
})
export class SharedModule { }
