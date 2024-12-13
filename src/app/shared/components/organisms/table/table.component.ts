import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

// Temporal, mock data
export interface PeriodicElement {
  code: number;
  project: string;
  state: string;
  calls: string;
  responsable: string;
  ip: string;
  projectType: string;
  actions: string;
}
const ELEMENT_DATA: PeriodicElement[] = [];
for (let i = 1; i <= 80; i++) {
  ELEMENT_DATA.push({
    code: i,
    project: `Project ${i}`,
    state: ['Active', 'Inactive', 'Pending'][Math.floor(Math.random() * 3)],
    calls: `Call ${i}`,
    responsable: `Person ${String.fromCharCode(65 + (i % 26))}`, // This will cycle through A-Z
    ip: `IP ${i}`,
    projectType: `Type ${['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)]}`,
    actions: '',
  });
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['code', 'project', 'state', 'calls', 'responsable', 'ip', 'projectType', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  redial() {
    console.log('Redial clicked');
  }

  checkVoicemail() {
    console.log('Check voice mail clicked');
  }
}
