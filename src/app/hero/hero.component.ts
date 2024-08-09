import { Component } from '@angular/core';
import { LinkService } from '../shared/services/link.service';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  buttonText: string = '';
  scrollHint: string = '';

  constructor(public linkData: LinkService, public langData: LanguageService) {
    this.set();
  }

  set() {
    let lang = this.langData.get();
    this.buttonText = lang.heroButton;
    this.scrollHint = lang.scrollHint;
  }
}
