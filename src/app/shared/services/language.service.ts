import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

/**
 * Represents a language service.
 */
export class LanguageService {
  currLang: string = '';
  lang;

  english = {
    links: ['About me', 'Skills', 'Portfolio', 'Contact'],
    heroButton: 'Let´s talk!',
    scrollHint: 'Scroll down',
    headlines: ['About me', 'My skills', 'Portfolio', 'Contact'],
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
    expText: `
      I have gained experience in building projects
      with different frontend technologies and concepts.
    `,
    anotherSkill: ['Looking for', 'another skill'],
    anotherText: `
      Feel free to contact me.
      I look forward to expand my previous knowledge.
    `,
    skillButton: 'Get in touch',
    projectIntro: `
      Explore a selection of my work here - Interact
      with a project to see my skills in action.
    `,
    testButton: 'Live test',
    joinDesc: `
      Task manager inspired by the Kanban System.
      Create and organize tasks using drag and drop functions,
      assign users and categories.
    `,
    gameDesc: `
      A simple Jump-and-Run game based on an object-oriented approach.
      Help the knight to collect items and unlock the key capability
      to defeat the shaman.
    `,
    contactIntro: 'Got a problem to solve?',
    contactText: `
      Contact me through this form.
      I am interested in hearing from you,
      knowing your ideas and
      contributing to your projects with my work.
    `,
    contactLine: ['Need a Frontend developer?', 'Contact me!'],
    placeholder: {
      name: 'Your name',
      email: 'Your email',
      message: 'Your message',
    },
    nameHint: {
      default: 'Your name is required.',
      enhanced: 'Please use at least 2 signs.',
    },
    emailHint: {
      default: 'Your email is required.',
      enhanced: 'Please enter a valid email.',
    },
    messageHint: {
      default: 'Your message is empty.',
      enhanced: 'Please use at least 20 signs.',
    },
    privacyPolicy: [
      "I've read the",
      'privacy policy',
      'and agree to the processing of my data as outlined.',
    ],
    checkHint: 'Please accept the privacy policy.',
    confirmation: 'Thank you for your message!',
    submitButton: 'Send message :)',
    imprint: 'Imprint',
    state: 'Austria',
    platform:
      'The official website of the European Commission for the Online Dispute Resolution',
    term: `
      We are neither obliged or willing to participate in a dispute resolution procedure 
      before a consumer arbitration board.
    `,
  };

  german = {
    links: ['Über mich', 'Skills', 'Portfolio', 'Kontakt'],
    heroButton: 'Auf geht´s!',
    scrollHint: 'Scrollen',
    headlines: ['Über mich', 'Skills', 'Portfolio', 'Kontakt'],
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
    expText: `
      Bei der Umsetzung meiner Projekte konnte ich
      verschiedene Technologien und Konzepte anwenden.
    `,
    anotherSkill: ['Sie brauchen', 'andere Skills'],
    anotherText: `
      Lassen Sie es mich wissen.
      Ich freue mich darauf, mein Wissen zu erweitern.
    `,
    skillButton: 'Kontaktieren',
    projectIntro: `
      Here eine Auswahl meiner Projekte -
      Interagieren Sie mit einem Projekt und
      überzeugen Sie sich selbst.
    `,
    testButton: 'Live-Test',
    joinDesc: `
      Ein Taskmanager inspiriert nach dem Kanban-Prinzip.
      Kreiere und verwalte Aufgaben und
      weise diese Benutzern bzw. Kategorien zu.
    `,
    gameDesc: `
      Ein simples Jump-and-Run-Spiel nach einem objektorientierten Ansatz.
      Hilf dem Ritter Gegenstände zu sammeln und
      den Schamanen zu besiegen.
    `,
    contactIntro: 'Haben Sie eine Aufgabe zu bewältigen?',
    contactText: `
      Kontaktieren Sie mich.
      Ich freue mich, von Ihnen und
      Ihren Ideen zu hören sowie
      mit meiner Arbeit zu Ihren Projekten beizutragen.
    `,
    contactLine: ['Frontend-Webentwickler gesucht?', 'Melden Sie sich!'],
    placeholder: {
      name: 'Ihr Name',
      email: 'Ihre E-Mail',
      message: 'Ihre Nachricht',
    },
    nameHint: {
      default: 'Bitte geben Sie Ihren Namen ein.',
      enhanced: 'Bitte verwenden Sie zumindest 2 Zeichen.',
    },
    emailHint: {
      default: 'Bitte geben Sie Ihre E-Mail ein.',
      enhanced: 'Bitte geben Sie eine gültige E-Mail ein.',
    },
    messageHint: {
      default: 'Ihre Nachricht ist leer.',
      enhanced: 'Bitte verwenden Sie zumindest 20 Zeichen.',
    },
    privacyPolicy: [
      'Ich habe die',
      'Datenschutzerklärung',
      'gelesen und stimme der Verarbeitung meiner Daten zu.',
    ],
    checkHint: 'Bitte akzeptieren Sie die Datenschutzerklärung.',
    confirmation: 'Vielen Dank für Ihre Nachricht!',
    submitButton: 'Nachricht senden :)',
    imprint: 'Impressum',
    state: 'Österreich',
    platform: 'Plattform der EU-Kommission zur Online-Streitbeilegung',
    term: `
        Wir sind zur Teilnahme an einem Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
      `,
  };

  /**
   * Creates a language service.
   */
  constructor() {
    this.lang = this.english;
  }

  /**
   * Provides the object of the current language.
   * @returns - The object of the current language.
   */
  get() {
    return this.currLang == 'german' ? this.german : this.english;
  }

  /**
   * Updates the language and the language button.
   * @returns - The name of the language button.
   */
  update() {
    this.change();
    return this.currLang == 'german' ? 'DE' : 'EN';
  }

  /**
   * Changes the language.
   */
  change() {
    this.currLang = this.currLang != 'german' ? 'german' : 'english';
    this.lang = this.currLang == 'german' ? this.german : this.english;
  }
}
