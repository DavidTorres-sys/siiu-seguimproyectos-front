import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ProjectDataService } from 'src/app/shared/services/project/project-data/project-data.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['code', 'project', 'state', 'calls', 'responsable', 'ip', 'projectType', 'actions'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  menuItems = [
    {
      icon: 'edit',
      label: 'Realizar inicio formal',
      action: () => this.redial(),
    },
    {
      icon: 'visibility',
      label: 'Ver detalles del proyecto',
      action: () => this.checkVoicemail(),
    },
  ];

  get projectsNumber(): number {
    return this.dataSource.data.length;
  }

  constructor(private projectDataService: ProjectDataService) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    // Subscribe to the project data stream
    this.projectDataService.projects$.subscribe(projects => {
      this.dataSource.data = projects;
    });
  }

  redial() {
    console.log('Redial clicked');
  }

  checkVoicemail() {
    console.log('Check voice mail clicked');
  }
}
