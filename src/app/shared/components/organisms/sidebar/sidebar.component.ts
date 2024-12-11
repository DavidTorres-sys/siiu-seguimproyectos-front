import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isSmallScreen: boolean = false;

  ngOnInit(): void {
    this.checkScreenSize();
  }

  onSubmit() {
    console.log('Button clicked!');
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }


  private checkScreenSize() {
    this.isSmallScreen = window.innerWidth <= 768;
  }
}
