import { Component, Input } from '@angular/core';
import { LinkComponent } from './link/link.component';
import { CommonModule } from '@angular/common';
import { Link } from '../../interfaces/link';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  links: Link[] = [
    { href: '#about-me', text: 'About me', width: 114, clicked: false },
    { href: '#my-skills', text: 'Skills', width: 59, clicked: false },
    { href: '#portfolio', text: 'Portfolio', width: 95, clicked: false },
  ];

  /**
   * Highlight the link.
   * @param link - The link to highlight.
   */
  highlight(link: Link) {
    this.unhighlight();
    link.clicked = true;
  }

  /**
   * Unhighlight all links.
   */
  unhighlight() {
    this.links.forEach((link) => {
      link.clicked = false;
    });
  }
}
