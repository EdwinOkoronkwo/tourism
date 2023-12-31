import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DividerComponent } from '../../shared/divider/divider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, DividerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  pyramidsUrl =
    'https://cdn.pixabay.com/photo/2016/02/02/18/33/sphinx-1175828__340.jpg';
}
