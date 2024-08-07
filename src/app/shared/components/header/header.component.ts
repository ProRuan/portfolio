import { Component, Output, EventEmitter } from '@angular/core';
import { LinkComponent } from '../link/link.component';
import { CommonModule } from '@angular/common';
import { Link } from '../../interfaces/link';
import { DataService } from '../../../data.service';

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

  constructor(public data: DataService) {
    this.links = this.data.getLinks(3);
  }

  /**
   * Reset the menu.
   */
  resetMenu() {
    this.data.menuOpened = false;
    this.data.unhighlightLinks();
  }

  /**
   * Flip the menu.
   */
  flipMenu() {
    this.data.menuOpened = !this.data.menuOpened ? true : false;
  }

  /**
   * Get the attribute value.
   * @returns - The value of the attribute.
   */
  getAttribute() {
    return this.data.menuOpened ? 'close-btn' : 'burger-btn';
  }
}
