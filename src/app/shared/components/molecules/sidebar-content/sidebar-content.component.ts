import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
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
import { InputTextComponent } from '../../atoms/input-text/input-text.component';

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss']
})
export class SidebarContentComponent implements OnInit {
  form!: FormGroup;
  levelOptions$!: Observable<{ value: string | number; tag: string; }[]>;
  projectOptions$!: Observable<{ value: string | number; tag: string; }[]>;
  statesOptions$!: Observable<{ value: string | number; tag: string; }[]>;
  typesOptions$!: Observable<{ value: string | number; tag: string; }[]>;
  administrativeCentersOptions$!: Observable<{ value: string | number; tag: string; }[]>;

  constructor(
    private fb: FormBuilder,
    private levelSvc: LevelService,
    private projectSvc: ProjectService,
    private stateSvc: StateService,
    private typeSvc: TypeService,
    private administrativeCenterSvc: AdministrativeCenterService,
  ) {
    this.form = this.fb.group({
      projectCode: [''],
      managementCenter: ['', Validators.required],
      state: [''],
      calls: [''],
      selectionProcess: [''],
      projectType: [''],
    });
  }

  ngOnInit(): void {
    this.levelOptions$ = this.levelSvc.getAll(100, 1).pipe(
      map(response =>
        response.data.niveles.map((level: any) => ({
          value: level.identificador,
          tag: level.nombre
        }))
      )
    );
    this.statesOptions$ = this.stateSvc.getAll(100, 1).pipe(
      map(response =>
        response.data.estados.map((state: any) => ({
          value: state.value,
          tag: state.tag
        }))
      )
    );
    this.typesOptions$ = this.typeSvc.getAll(100, 1).pipe(
      map(response =>
        response.data.tipos.map((type: any) => ({
          value: type.identificador,
          tag: type.nombre
        }))
      )
    );
    this.administrativeCentersOptions$ = this.administrativeCenterSvc.getAll(100, 1).pipe(
      map(response =>
        response.data.centrosAdministrativos.map((center: any) => ({
          value: center.identificador,
          tag: center.nombre
        }))
      )
    );
  }

  // Emit form values when CONSULTAR is clicked
  onSubmit(): void {
    const formValues = this.form.value;
    console.log('Form submitted with values:', formValues);

    // Optionally, emit the projectCode or the entire form values
    const projectCode = formValues.projectCode;
  }

  // Optional: Clear form filters when LIMPIAR FILTROS is clicked
  onClearFilters(): void {
    this.form.reset();
  }
}
