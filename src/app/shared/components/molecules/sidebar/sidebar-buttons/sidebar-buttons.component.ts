import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-buttons',
  templateUrl: './sidebar-buttons.component.html',
  styleUrls: ['./sidebar-buttons.component.scss']
})
export class SidebarButtonsComponent {
  onSubmit() {
    console.log('Button clicked!');
  }
}
