import { Component, Input } from '@angular/core';
import { IntroItem } from '../../shared/interfaces/intro-item';

@Component({
  selector: 'app-intro-item',
  standalone: true,
  imports: [],
  templateUrl: './intro-item.component.html',
  styleUrl: './intro-item.component.scss',
})
export class IntroItemComponent {
  @Input() item: IntroItem = {
    path: '',
    alt: '',
    text: '',
  };
}
