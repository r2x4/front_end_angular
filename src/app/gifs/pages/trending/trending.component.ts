import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifListComponent } from '../../components/gif-list/gif-list.component';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [
    CommonModule,GifListComponent
  ],
  templateUrl: './trending.component.html',
})
export default class TrendingComponent {}
