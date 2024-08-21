import { Component } from '@angular/core';
import { LinkService } from '../../services/link.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})

/**
 * Represents a footer component.
 */
export class FooterComponent {
  /**
   * Creates a footer component.
   * @param linkData - The link data to apply.
   */
  constructor(public linkData: LinkService) {}
}
