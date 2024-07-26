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
    { href: '#about-me', text: 'About me', width: 114 },
    { href: '#my-skills', text: 'Skills', width: 59 },
    { href: '#portfolio', text: 'Portfolio', width: 95 },
  ];
}
