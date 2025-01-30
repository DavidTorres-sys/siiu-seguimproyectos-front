import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsListComponent } from './pages/projects-list/projects-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormalStartComponent } from './pages/formal-start/formal-start.component';


@NgModule({
  declarations: [
    ProjectsListComponent,
    FormalStartComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ]
})
export class ProjectsModule { }
