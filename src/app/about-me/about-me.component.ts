import { Component, Input } from '@angular/core';
import { IntroItemComponent } from './intro-item/intro-item.component';
import { CommonModule } from '@angular/common';
import { IntroItem } from '../shared/interfaces/intro-item';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, IntroItemComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})

/**
 * Represents an about-me component.
 */
export class AboutMeComponent {
  @Input() items: IntroItem[] = [
    {
      path: '../assets/img/location.svg',
      alt: 'location',
      text: `
        Flexible in terms of working environments,
        I can work effectively both on-site and remotely.
      `,
    },
    {
      path: '../assets/img/bulb.svg',
      alt: 'bulb',
      text: `
        My strategy is purposeful and
        I am always looking for personal challenges
        to constantly improve my
        knowledge and skills.
      `,
    },
    {
      path: '../assets/img/puzzle.svg',
      alt: 'puzzle',
      text: `
        In my profession, coding is a creative form of problem-solving.
        Complex technical challenges are transformed into simple, user-friendly solutions.
        This way, I help you to achieve your goals and bring your visions to life.
      `,
    },
  ];

  /**
   * Creates an about-me component.
   * @param langData - The language data to apply.
   */
  constructor(public langData: LanguageService) {}

  /**
   * Prints the text based on the set language.
   * @returns - The text to print.
   */
  print() {
    this.updateItems();
    return this.langData.get();
  }

  /**
   * Updates the text of the items.
   */
  updateItems() {
    let lang = this.langData.get();
    this.items[0].text = lang.location;
    this.items[1].text = lang.bulb;
    this.items[2].text = lang.puzzle;
  }
}
