import { Component, inject } from '@angular/core';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})

/**
 * Represents an imprint component.
 */
export class ImprintComponent {
  langData: LanguageService = inject(LanguageService);

  /**
   * Prints the text based on the set language.
   * @returns - The text to print.
   */
  print() {
    return this.langData.get();
  }
}
