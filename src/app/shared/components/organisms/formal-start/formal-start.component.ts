import { Component, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute } from '@angular/router';
import { IProject } from 'src/app/core/interfaces/IProject';
import { ProjectSelectionService } from 'src/app/shared/services/project/project-selection/project-selection.service';
import { StepperComponent } from '../../molecules/stepper/stepper.component';

@Component({
  selector: 'app-formal-start',
  templateUrl: './formal-start.component.html',
  styleUrls: ['./formal-start.component.scss']
})
export class FormalStartComponent {

  project!: IProject | null;
  projectStatus!: string;
  projectShortName!: string;
  projectCode!: string;

  constructor(private projectSelectionService: ProjectSelectionService) { }

  ngOnInit() {
    this.projectSelectionService.selectedProject$.subscribe((project) => {
      if (project) {
        this.setProject(project);
        localStorage.setItem('selectedProject', JSON.stringify(project));
      }
    });

    if (!this.project) {
      const storedProject = localStorage.getItem('selectedProject');
      if (storedProject) {
        this.setProject(JSON.parse(storedProject));
      }
    }
  }

  private setProject(project: IProject) {
    this.project = project;
    this.projectStatus = project.status || '';
    this.projectShortName = project.shortName || '';
    this.projectCode = project.code || '';
  }

}
