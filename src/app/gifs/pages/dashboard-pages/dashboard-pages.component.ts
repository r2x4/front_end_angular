import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  selector: 'app-dashboard-pages',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, SideMenuComponent,
  ],
  templateUrl: './dashboard-pages.component.html',
})
export default class DashboardPagesComponent {}
