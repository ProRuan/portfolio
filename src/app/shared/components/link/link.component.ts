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
export class LinkComponent {
  @Input() link: Link = {
    href: '',
    width: 0,
    text: 'link',
    clicked: false,
  };

  constructor(private linkData: LinkService) {}

  /**
   * Set the width.
   * @returns - The width to set.
   */
  setWidth() {
    return { 'width.px': this.link.width };
  }

  /**
   * Close the menu.
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