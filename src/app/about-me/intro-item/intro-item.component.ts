import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-intro-item',
  standalone: true,
  imports: [],
  templateUrl: './intro-item.component.html',
  styleUrl: './intro-item.component.scss',
})
export class IntroItemComponent {
  @Input() item: any = {
    path: '',
    alt: '',
    text: '',
  };
}
