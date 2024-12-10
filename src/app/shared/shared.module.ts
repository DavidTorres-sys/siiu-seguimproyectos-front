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

@NgModule({
  declarations: [
    AlertComponent,
    InputTextComponent,
    ButtonSecondaryComponent,
    ButtonPrimaryComponent,
    SidebarContentComponent,
    SidebarComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule, 
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
