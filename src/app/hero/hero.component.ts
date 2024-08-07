import { Component } from '@angular/core';
import { LinkService } from '../shared/services/link.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  constructor(public linkData: LinkService) {}
}
