import { Injectable } from '@angular/core';
import { Link } from './shared/interfaces/link';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  menuOpened: boolean = false;

  links: Link[] = [
    { href: '#about-me', text: 'About me', width: 114, clicked: false },
    { href: '#my-skills', text: 'Skills', width: 59, clicked: false },
    { href: '#portfolio', text: 'Portfolio', width: 95, clicked: false },
    { href: '#contact', text: 'Contact', width: 95, clicked: false },
  ];

  constructor() {}

  getLinks(n: number) {
    let links: Link[] = [];
    for (let i = 0; i < n; i++) {
      let link = this.links[i];
      links.push(link);
    }
    return links;
  }

  /**
   * Highlight the link.
   * @param link - The link to highlight.
   */
  highlight(link: Link) {
    this.unhighlightLinks();
    link.clicked = true;
  }

  /**
   * Unhighlight all links.
   */
  unhighlightLinks() {
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

  // Create LinkService, AboutMeService, MySkillsService, ProjectService, GlobalService ...
}
