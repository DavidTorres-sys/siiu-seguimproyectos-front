import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';;
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AlertComponent } from './components/atoms/alert/alert.component';
import { InputTextComponent } from './components/atoms/input-text/input-text.component';
import { ButtonSecondaryComponent } from './components/atoms/button-secondary/button-secondary.component';
import { ButtonPrimaryComponent } from './components/atoms/button-primary/button-primary.component';
import { SidebarContentComponent } from './components/molecules/sidebar-content/sidebar-content.component';
import { SidebarComponent } from './components/organisms/sidebar/sidebar.component';
import { DropdownComponent } from './components/atoms/dropdown/dropdown.component';
import { DropdownRequiredComponent } from './components/atoms/dropdown-required/dropdown-required.component';
import { SidebarButtonsComponent } from './components/molecules/sidebar-buttons/sidebar-buttons.component';
import { TableComponent } from './components/organisms/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { ButtonRoundedComponent } from './components/atoms/button-rounded/button-rounded.component';
import { MenuComponent } from './components/atoms/menu/menu.component';
import { PaginationComponent } from './components/atoms/pagination/pagination.component';
import { FooterComponent } from './components/molecules/footer/footer.component';
import { StatusComponent } from './components/atoms/status/status.component';
import { StatusIndicatorComponent } from './components/molecules/status-indicator/status-indicator.component';
import { ProjectInfoFormalStartComponent } from './components/molecules/project-info-formal-start/project-info-formal-start.component';
import { FormalStartComponent } from './components/organisms/formal-start/formal-start.component';
import { StepperComponent } from './components/molecules/stepper/stepper.component';

@NgModule({
  declarations: [
    AlertComponent,
    InputTextComponent,
    ButtonSecondaryComponent,
    ButtonPrimaryComponent,
    SidebarContentComponent,
    SidebarComponent,
    DropdownComponent,
    DropdownRequiredComponent,
    SidebarButtonsComponent,
    TableComponent,
    ButtonRoundedComponent,
    MenuComponent,
    PaginationComponent,
    FooterComponent,
    StatusComponent,
    StatusIndicatorComponent,
    ProjectInfoFormalStartComponent,
    FormalStartComponent,
    StepperComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatMenuModule,
    NgFor, 
    MatInputModule, 
    FormsModule,
    MatSidenavModule,
    MatPaginatorModule, 
    NgIf,
    MatCardModule,
    MatTableModule,
    ReactiveFormsModule,
    MatStepperModule,
  ],
  exports: [
    MatIconModule,
    MatIconModule,
    MatButtonModule, 
    SidebarComponent,
    TableComponent,
    FooterComponent,
    FormalStartComponent, 
  ]
})
export class SharedModule { }
