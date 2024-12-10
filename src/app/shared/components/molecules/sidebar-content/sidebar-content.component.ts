import { Component, OnInit } from '@angular/core';
import { IAdministrativeCenter } from 'src/app/core/interfaces/IAdministrativeCenter';
import { ILevel } from 'src/app/core/interfaces/ILevel';
import { IProject } from 'src/app/core/interfaces/IProject';
import { IState } from 'src/app/core/interfaces/IState';
import { IType } from 'src/app/core/interfaces/IType';
import { AdministrativeCenterService } from 'src/app/shared/services/administrative-center/administrative-center.service';
import { LevelService } from 'src/app/shared/services/level/level.service';
import { ProjectService } from 'src/app/shared/services/project/project.service';
import { StateService } from 'src/app/shared/services/state/state.service';
import { TypeService } from 'src/app/shared/services/type/type.service';

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss']
})
export class SidebarContentComponent implements OnInit {
  levels: ILevel[] = [];
  projects: IProject[] = [];
  states: IState[] = [];
  types: IType[] = [];
  administrativeCenters: IAdministrativeCenter[] = [];

  constructor(
    private levelSvc: LevelService,
    private projectSvc: ProjectService,
    private stateSvc: StateService,
    private typeSvc: TypeService,
    private administrativeCenterSvc: AdministrativeCenterService,
  ) { }

  ngOnInit(): void {
    this.levelSvc.getAll(100, 1).subscribe((response) => {
      this.levels = response.data.niveles;
    });
    this.stateSvc.getAll(100, 1).subscribe((response) => {
      this.states = response.data.estados;
    });
    this.typeSvc.getAll(100, 1).subscribe((response) => {
      this.types = response.data.tipos;
    });
    this.administrativeCenterSvc.getAll(100, 1).subscribe((response) => {
      this.administrativeCenters = response.data.centrosAdministrativos;
    });
  }

  onLevelChange(selectedLevel: string | number): void {
    console.log('Selected Level:', selectedLevel);
  }

  onStateChange(selectedState: string | number): void {
    console.log('Selected State:', selectedState);
  }

  onTypeChange(selectedType: string | number): void {
    console.log('Selected Type:', selectedType);
  }

  onAdministrativeCenterChange(selectedCenter: string | number): void {
    console.log('Selected Administrative Center:', selectedCenter);
  }

  get levelOptions() {
    return this.levels.map(level => ({
      value: level.identificador,
      tag: level.nombre
    }));
  }

  get stateOptions() {
    return this.states.map(state => ({
      value: state.value,
      tag: state.tag
    }));
  }

  get typeOptions() {
    return this.types.map(type => ({
      value: type.identificador,
      tag: type.nombre
    }));
  }

  get administrativeCenterOptions() {
    return this.administrativeCenters.map(center => ({
      value: center.identificador,
      tag: center.nombre
    }));
  }
  

}
