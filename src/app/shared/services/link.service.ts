import { Injectable } from '@angular/core';
import { Link } from '../interfaces/link';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  menuOpened: boolean = false;

  links: Link[] = [
    { href: '#about-me', text: 'About me', clicked: false },
    { href: '#my-skills', text: 'Skills', clicked: false },
    { href: '#portfolio', text: 'Portfolio', clicked: false },
    { href: '#contact', text: 'Contact', clicked: false },
  ];

  constructor(private langData: LanguageService) {}

  get(n: number) {
    let links: Link[] = [];
    for (let i = 0; i < n; i++) {
      let link = this.links[i];
      links.push(link);
    }
    return links;
  }

  set() {
    let lang = this.langData.get();
    this.links.forEach((link: Link, i: number = 0) => {
      link.text = lang.links[i++];
    });
  }

  update(n: number) {
    this.set();
    return this.get(n);
  }

  /**
   * Highlight the link.
   * @param link - The link to highlight.
   */
  highlight(link: Link) {
    this.unhighlight();
    link.clicked = true;
  }

  /**
   * Unhighlight all links.
   */
  unhighlight() {
    this.links.forEach((link) => {
      link.clicked = false;
    });
  }

  scroll(target: string) {
    window.location.href = target;
  }

  redirect(path: string) {
    window.open(path, '_blank');
  }
}
