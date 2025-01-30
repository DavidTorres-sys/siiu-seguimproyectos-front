import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListComponent } from './pages/projects-list/projects-list.component';
import { FormalStartComponent } from './pages/formal-start/formal-start.component';

const routes: Routes = [
  {
    path: 'seguimientoaproyectos',
    component: ProjectsListComponent
  },
  {
    path: 'seguimientoaproyectos/inicioformal/:id',
    component: FormalStartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
