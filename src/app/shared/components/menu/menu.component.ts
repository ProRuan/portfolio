import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from '../link/link.component';
import { Link } from '../../interfaces/link';
import { LinkService } from '../../services/link.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, LinkComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  linkData: LinkService = inject(LinkService);
  langData: LanguageService = inject(LanguageService);

  links: Link[];
  lang: string = 'EN';

  /**
   * Represents a menu component.
   */
  constructor() {
    this.links = this.linkData.get(4);
  }

  /**
   * Highlights the link.
   * @param link - The link to highlight.
   */
  highlight(link: Link) {
    this.linkData.highlight(link);
    setTimeout(() => {
      link.clicked = false;
    }, 100);
  }

  /**
   * Changes the language.
   */
  changeLang() {
    this.lang = this.langData.update();
    this.linkData.update(4);
  }
}
