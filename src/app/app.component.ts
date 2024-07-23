import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../../src/assets/fonts/font-face.scss'],
})
export class AppComponent {
  title = 'portfolio';
}
