import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { LinkService } from './shared/services/link.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    MenuComponent,
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
