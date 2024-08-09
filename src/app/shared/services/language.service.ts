import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currLang: string = '';

  english = {
    links: ['About me', 'Skills', 'Portfolio', 'Contact'],
    heroButton: 'Let´s talk!',
    scrollHint: 'Scroll down',
    introText: `
      Hi, I´m an Austrian Frontend Developer based at the center of Lower Austria.
      Delighted by the limitless opportunities within IT,
      I discovered programming as my mission to craft
      salient and intuitve websites and applications.
    `,
    location: `
      Flexible in terms of working environments,
      I can work effectively both on-site and remotely.
    `,
    bulb: `
      My strategy is purposeful and
      I am always looking for personal challenges
      to constantly improve my
      knowledge and skills.
    `,
    puzzle: `
      In my profession, coding is a creative form of problem-solving.
      Complex technical challenges are transformed into simple, user-friendly solutions.
      This way, I help you to achieve your goals and bring your visions to life.
    `,
  };

  german = {
    links: ['Über mich', 'Fertigkeiten', 'Portfolio', 'Kontakt'],
    heroButton: 'Auf geht´s!',
    scrollHint: 'Scrollen',
    introText: `
      Ich bin ein Frontend-Webentwickler im Zentrum von Niederösterreich.
      Meine Mission lautet, meine Programmier-Fertigkeiten zu nutzen,
      um hervorragende und inuitive Webseiten und Applikationen zu schaffen.
    `,
    location: `
      Hinsichtlich meines Arbeitsumfeldes bin ich flexibel und
      kann vor Ort bzw. aus der Ferne arbeiten.
    `,
    bulb: `
      Meine Vorgehensweise ist zielgerichtet und
      jede Herausforderung hilft mir,
      mein Wissen und meine Fertigkeiten zu verbessern.
    `,
    puzzle: `
      Programmierung ist eine kreative Form der Problemlösung und
      erlaubt simple, benutzerfreundliche Lösungen.
      Auf diese Weise kann ich helfen, Träume zu erreichen und
      Visionen zum Leben zu erwecken.
    `,
  };

  constructor() {}

  get() {
    return this.currLang == 'german' ? this.german : this.english;
  }
}
