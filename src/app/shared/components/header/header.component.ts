import { Component, Output, EventEmitter } from '@angular/core';
import { LinkComponent } from '../link/link.component';
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
  menuOpened = false;
  @Output() menuEvent = new EventEmitter<boolean>();

  links: Link[] = [
    { href: '#about-me', text: 'About me', width: 114, clicked: false },
    { href: '#my-skills', text: 'Skills', width: 59, clicked: false },
    { href: '#portfolio', text: 'Portfolio', width: 95, clicked: false },
  ];

  flipMenu() {
    this.menuOpened = !this.menuOpened ? true : false;
    return this.menuEvent.emit(this.menuOpened);
  }

  getClass() {
    if (this.menuOpened) {
      return 'close-btn';
    } else {
      return 'burger-btn';
    }
  }

  // double code!!!
  getAlt() {
    if (this.menuOpened) {
      return 'close-button';
    } else {
      return 'burger-menu';
    }
  }

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
