import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/atoms/alert/alert.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { InputSelectComponent } from './components/atoms/input-select/input-select.component';
import { InputTextComponent } from './components/atoms/input-text/input-text.component';



@NgModule({
  declarations: [
    AlertComponent,
    ButtonComponent,
    InputSelectComponent,
    InputTextComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
