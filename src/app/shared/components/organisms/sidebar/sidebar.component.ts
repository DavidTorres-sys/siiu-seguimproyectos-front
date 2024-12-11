import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isSmallScreen = false;
  drawerOpened = false; // Track whether the sidebar is opened

  constructor(private breakpointObserver: BreakpointObserver) { }
  
  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(result => {
      this.isSmallScreen = result.matches;
      if (!this.isSmallScreen) this.drawerOpened = true; // Default to always open for large screens
    });
    this.checkScreenSize();
  }

  toggleDrawer(): void {
    this.drawerOpened = !this.drawerOpened;
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
