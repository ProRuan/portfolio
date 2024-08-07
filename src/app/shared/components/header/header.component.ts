import { Component, Output, EventEmitter } from '@angular/core';
import { LinkComponent } from '../link/link.component';
import { CommonModule } from '@angular/common';
import { Link } from '../../interfaces/link';
import { LinkService } from '../../services/link.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  links: Link[] = [];
  @Output() menuEvent = new EventEmitter<boolean>();

  constructor(public linkData: LinkService) {
    this.links = this.linkData.get(3);
  }

  /**
   * Reset the menu.
   */
  resetMenu() {
    this.linkData.menuOpened = false;
    this.linkData.unhighlight();
  }

  /**
   * Flip the menu.
   */
  flipMenu() {
    this.linkData.menuOpened = !this.linkData.menuOpened ? true : false;
  }

  /**
   * Get the attribute value.
   * @returns - The value of the attribute.
   */
  getAttribute() {
    return this.linkData.menuOpened ? 'close-btn' : 'burger-btn';
  }
}
