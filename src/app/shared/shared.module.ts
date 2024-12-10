import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { AlertComponent } from './components/atoms/alert/alert.component';
import { InputTextComponent } from './components/atoms/input-text/input-text.component';
import { ButtonSecondaryComponent } from './components/atoms/button-secondary/button-secondary.component';
import { ButtonPrimaryComponent } from './components/atoms/button-primary/button-primary.component';
import { SidebarContentComponent } from './components/molecules/sidebar-content/sidebar-content.component';
import { SidebarComponent } from './components/organisms/sidebar/sidebar.component';
import { DropdownComponent } from './components/atoms/dropdown/dropdown.component';
import { DropdownRequiredComponent } from './components/atoms/dropdown-required/dropdown-required.component';


import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AlertComponent,
    InputTextComponent,
    ButtonSecondaryComponent,
    ButtonPrimaryComponent,
    SidebarContentComponent,
    SidebarComponent,
    DropdownComponent,
    DropdownRequiredComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule, 
    MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule
  ],
  exports: [
    MatIconModule,
    AlertComponent,
    InputTextComponent,
    ButtonSecondaryComponent,
    ButtonPrimaryComponent,
    MatIconModule,
    MatButtonModule, 
    DropdownComponent,
    SidebarContentComponent
  ]
})
export class SharedModule { }
