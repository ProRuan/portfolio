import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from '../link/link.component';
import { Link } from '../../interfaces/link';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, LinkComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  links: Link[];

  constructor(private data: DataService) {
    this.links = this.data.getLinks(4);
  }

  /**
   * Highlight the link.
   * @param link - The link to highlight.
   */
  highlight(link: Link) {
    this.data.highlight(link);
    setTimeout(() => {
      link.clicked = false;
    }, 100);
  }
}
