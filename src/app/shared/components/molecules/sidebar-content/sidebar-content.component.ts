import { Component, OnInit } from '@angular/core';
import { ILevel } from 'src/app/core/interfaces/ILevel';
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

  constructor(
    private levelSvc: LevelService,
    private projectSvc: ProjectService,
    private stateSvc: StateService,
    private typeSvc: TypeService,
    private administrativeCenterSvc: AdministrativeCenterService,
  ) { }

  ngOnInit(): void {
    this.levelSvc.getAll(100, 1).subscribe((response) => {
      console.log('Levels:', response);
    });
  }

}
