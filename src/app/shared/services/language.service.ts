import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currLang: string = '';

  english = {
    links: ['About me', 'Skills', 'Portfolio', 'Contact'],
  };

  german = {
    links: ['Über mich', 'Fertigkeiten', 'Portfolio', 'Kontakt'],
  };

  constructor() {}

  get() {
    return this.currLang == 'german' ? this.german : this.english;
  }
}
