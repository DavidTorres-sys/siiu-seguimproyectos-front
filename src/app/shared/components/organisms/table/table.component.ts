import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ProjectDataService } from 'src/app/shared/services/project/project-data/project-data.service';
import { Router } from '@angular/router';
import { IProject } from 'src/app/core/interfaces/IProject';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['code', 'project', 'state', 'calls', 'responsable', 'ip', 'projectType', 'actions'];
  dataSource = new MatTableDataSource<IProject>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  get projectsNumber(): number {
    return this.dataSource.data.length;
  }

  constructor(
    private projectDataService: ProjectDataService,
    private router: Router,
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.projectDataService.projects$.subscribe((projects) => {
      this.dataSource.data = projects.map((project) => ({
        ...project,
        menuItems: [
          {
            icon: 'edit',
            label: 'Realizar inicio formal',
            action: () => this.navegateToFormalStart(project.code),
          },
          {
            icon: 'visibility',
            label: 'Ver detalles del proyecto',
            action: () => this.checkVoicemail(),
          },
        ],
      }));
    });
  }
  

  navegateToFormalStart(projectId: string) {
    console.log('administrativos/seguimientoaproyectos/inicioformal', projectId);
    this.router.navigate(['administrativos/seguimientoaproyectos/inicioformal', projectId]);
  }
  

  checkVoicemail() {
    console.log('Check voice mail clicked');
  }
}
