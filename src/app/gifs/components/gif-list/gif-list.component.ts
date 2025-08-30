import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gif-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gif-list.component.html',
})
export class GifListComponent {
  @Input() gifs: string[] = [];
}