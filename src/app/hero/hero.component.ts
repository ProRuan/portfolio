import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  /**
   * Scroll to contact section.
   */
  scroll() {
    window.location.href = '#contact';
  }

  /**
   * Redirects to another website.
   * @param path - The path of the other website.
   */
  redirect(path: string) {
    window.open(path, '_blank');
  }
}
