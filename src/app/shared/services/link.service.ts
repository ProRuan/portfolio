import { Injectable } from '@angular/core';
import { Link } from '../interfaces/link';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})

/**
 * Represents a link service.
 */
export class LinkService {
  menuOpened: boolean = false;

  links: Link[] = [
    { href: '#about-me', text: 'About me', clicked: false },
    { href: '#my-skills', text: 'Skills', clicked: false },
    { href: '#portfolio', text: 'Portfolio', clicked: false },
    { href: '#contact', text: 'Contact', clicked: false },
  ];

  /**
   * Creates a link service.
   * @param langData - The language data to apply.
   */
  constructor(private langData: LanguageService) {}

  /**
   * Provides a number of links.
   * @param n - The number of links.
   * @returns - The requested links.
   */
  get(n: number) {
    let links: Link[] = [];
    for (let i = 0; i < n; i++) {
      let link = this.links[i];
      links.push(link);
    }
    return links;
  }

  /**
   * Sets the links.
   */
  set() {
    let lang = this.langData.get();
    this.links.forEach((link: Link, i: number = 0) => {
      link.text = lang.links[i++];
    });
  }

  /**
   * Updates the links.
   * @param n - The number of links.
   * @returns - The updated links.
   */
  update(n: number) {
    this.set();
    return this.get(n);
  }

  /**
   * Highlights the link.
   * @param link - The link to highlight.
   */
  highlight(link: Link) {
    this.unhighlight();
    link.clicked = true;
  }

  /**
   * Unhighlights all links.
   */
  unhighlight() {
    this.links.forEach((link) => {
      link.clicked = false;
    });
  }

  /**
   * Scrolls to the link target.
   * @param target - The target of the link.
   */
  scroll(target: string) {
    window.location.href = target;
  }

  /**
   * Redirects to a website.
   * @param path - The path of the website.
   */
  redirect(path: string) {
    window.open(path, '_blank');
  }
}
