import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
})
export class LinkComponent {
  // replace with object!
  @Input() href: string = '';
  @Input() width: string = '';
  @Input() text: string = 'link';
}
