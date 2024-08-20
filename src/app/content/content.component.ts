import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    HeroComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactComponent,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})

/**
 * Represents a content component.
 */
export class ContentComponent {}
