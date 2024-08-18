import { Component, inject } from '@angular/core';
import { LinkService } from '../shared/services/link.service';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})

/**
 * Represents a hero component.
 */
export class HeroComponent {
  linkData: LinkService = inject(LinkService);
  langData: LanguageService = inject(LanguageService);

  /**
   * Prints the text based on the set language.
   * @returns - The text to print.
   */
  print() {
    return this.langData.get();
  }
}
