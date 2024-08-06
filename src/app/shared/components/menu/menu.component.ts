import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from '../link/link.component';
import { Link } from '../../interfaces/link';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, LinkComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  links: Link[] = [
    { href: '#about-me', text: 'About me', width: 114, clicked: false },
    { href: '#my-skills', text: 'Skills', width: 59, clicked: false },
    { href: '#portfolio', text: 'Portfolio', width: 95, clicked: false },
    { href: '#contact', text: 'Contact', width: 95, clicked: false },
  ];

  /**
   * Highlight the link.
   * @param link - The link to highlight.
   */
  highlight(link: Link) {
    this.unhighlight();
    link.clicked = true;
    setTimeout(() => {
      link.clicked = false;
    }, 100);
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
