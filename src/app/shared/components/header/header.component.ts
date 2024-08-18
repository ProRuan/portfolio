import { Component, Output, EventEmitter, inject } from '@angular/core';
import { LinkComponent } from '../link/link.component';
import { CommonModule } from '@angular/common';
import { Link } from '../../interfaces/link';
import { LinkService } from '../../services/link.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

/**
 * Represents a header component.
 */
export class HeaderComponent {
  linkData: LinkService = inject(LinkService);
  langData: LanguageService = inject(LanguageService);

  links: Link[] = [];
  lang: string = 'EN';
  @Output() menuEvent = new EventEmitter<boolean>();

  /**
   * Creates a header component.
   */
  constructor() {
    this.links = this.linkData.get(3);
  }

  /**
   * Resets the menu.
   */
  resetMenu() {
    this.linkData.menuOpened = false;
    this.linkData.unhighlight();
  }

  /**
   * Flips the menu.
   */
  flipMenu() {
    this.linkData.menuOpened = !this.linkData.menuOpened ? true : false;
  }

  /**
   * Provides the attribute value.
   * @returns - The value of the attribute.
   */
  getAttribute() {
    return this.linkData.menuOpened ? 'close-btn' : 'burger-btn';
  }

  /**
   * Changes the language.
   */
  changeLang() {
    this.lang = this.langData.update();
    this.linkData.update(3);
  }
}
