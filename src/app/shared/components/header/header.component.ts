import { Component } from '@angular/core';
import { LinkComponent } from './link/link.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  links = [
    { text: 'About me', width: 114 },
    { text: 'Skills', width: 59 },
    { text: 'Portfolio', width: 95 },
  ];
}
