import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LinkService } from './shared/services/link.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../../src/assets/fonts/font-face.scss'],
})

/**
 * Represents an app component.
 */
export class AppComponent {
  title = 'Rudolf Sachslehner';

  /**
   * Creates an app component.
   * @param linkData - The link data to apply.
   */
  constructor(private linkData: LinkService) {}

  /**
   * Flips the menu.
   * @returns - The class to apply.
   */
  flipMenu() {
    return !this.linkData.menuOpened ? 'menu-out' : '';
  }
}
