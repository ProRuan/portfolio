import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Link } from '../../interfaces/link';
import { LinkService } from '../../services/link.service';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
})

/**
 * Represents a link component.
 */
export class LinkComponent {
  @Input() link: Link = {
    href: '',
    text: 'link',
    clicked: false,
  };

  /**
   * Creates a link component.
   * @param linkData - The link data to apply.
   */
  constructor(private linkData: LinkService) {}

  /**
   * Closes the menu.
   */
  closeMenu() {
    this.linkData.menuOpened = false;
  }

  /**
   * Underlines the link.
   * @returns - The display value to set.
   */
  underline() {
    return this.link.clicked ? { display: 'unset' } : { display: 'none' };
  }
}
