import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule, LinkComponent],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
})
export class LinkComponent {
  @Input() link: any = {
    href: '',
    width: '',
    text: 'link',
    clicked: false,
  };

  /**
   * Set the width.
   * @returns - The width to set.
   */
  setWidth() {
    return { 'width.px': this.link.width };
  }

  /**
   * Underlines the link.
   * @returns - The display value to set.
   */
  underline() {
    return this.link.clicked ? { display: 'unset' } : { display: 'none' };
  }
}
