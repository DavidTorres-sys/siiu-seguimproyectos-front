import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { IAdministrativeCenter } from 'src/app/core/interfaces/IAdministrativeCenter';
import { ILevel } from 'src/app/core/interfaces/ILevel';
import { IProject } from 'src/app/core/interfaces/IProject';
import { IState } from 'src/app/core/interfaces/IState';
import { IType } from 'src/app/core/interfaces/IType';
import { AdministrativeCenterService } from 'src/app/shared/services/shared/administrative-center/administrative-center.service';
import { ProjectTypeService } from 'src/app/shared/services/shared/project-type/project-type.service';
import { InputTextComponent } from '../../atoms/input-text/input-text.component';
import { FilterProcessSelectionService } from 'src/app/shared/services/admin/filterProcessSelection/filter-process-selection.service';
import { StatusByUserService } from 'src/app/shared/services/project/status/status-by-user.service';
import { AnnouncementService } from 'src/app/shared/services/announcement/announcement/announcement.service';

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss']
})
export class SidebarContentComponent implements OnInit {
  form!: FormGroup;
  projectTypeOptions$!: Observable<{ value: string | number; tag: string; }[]>;
  administrativeCentersOptions$!: Observable<{ value: string | number; tag: string; }[]>;
  filterProccessSelectionOptions$!: Observable<{ value: string | number; tag: string; }[]>;
  announcementOptions$!: Observable<{ value: string | number; tag: string; }[]>;
  statusByUserOptions$!: Observable<{ value: string | number; tag: string; }[]>;
  typesOptions$!: Observable<{ value: string | number; tag: string; }[]>;

  constructor(
    private fb: FormBuilder,
    private projectTypeSvc: ProjectTypeService,
    private administrativeCenterSvc: AdministrativeCenterService,
    private filterProcessSelectionSvc: FilterProcessSelectionService,
    private statusByUserSvc: StatusByUserService,
    private announcementSvc: AnnouncementService,
  ) {
    this.form = this.fb.group({
      projectCode: [''],
      managementCenter: ['', Validators.required],
      state: [''],
      announcement: [''],
      selectionProcess: [''],
      projectType: [''],
    });
  }

  ngOnInit(): void {
    this.projectTypeOptions$ = this.projectTypeSvc.getAll(100, 1).pipe(
      map(response =>
        response.map((level: any) => ({
          value: level.id,
          tag: level.name
        }))
      )
    );
    this.administrativeCentersOptions$ = this.administrativeCenterSvc.getAll(200, 200).pipe(
      map(response =>
        response.map((state: any) => ({
          value: state.id,
          tag: state.shortName
        }))
      )
    );
    this.announcementOptions$ = this.announcementSvc.getAll(100, 1).pipe(
      map(response =>
        response.map((type: any) => ({
          value: type.id,
          tag: type.name
        }))
      )
    );
    // this.filterProccessSelectionOptions$ = this.filterProcessSelectionSvc.getAll(100, 1).pipe(
    //   map(response =>
    //     response.map((type: any) => ({
    //       value: type.id,
    //       tag: type.name
    //     }))
    //   )
    // );
    // this.statusByUserOptions$ = this.statusByUserSvc.getAll(100, 1).pipe(
    //   map(response =>
    //     response.data.centrosAdministrativos.map((center: any) => ({
    //       value: center.identificador,
    //       tag: center.nombre
    //     }))
    //   )
    // );
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
