import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isDisabled = false;
  showFiller = false;

  onSubmit() {
    console.log('Button clicked!');
  }
}
