import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';
import { Project } from '../shared/interfaces/project';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})

/**
 * Represents a portfolio component.
 */
export class PortfolioComponent {
  projects: Project[] = [
    {
      path: '../../assets/img/videoflix.png',
      name: 'Videoflix',
      skills: 'Django | Python | Google Cloud',
      description: `
      A video platform using a Django-based backend.
      Register and log in to browse a library and
      watch videos by player.
      `,
      link: 'https://videoflix.rudolf-sachslehner.eu/',
      github: 'https://github.com/ProRuan/videoflix-frontend',
    },
    {
      path: '../../assets/img/join.png',
      name: 'Join',
      skills: 'Angular | TypeScript | Firebase',
      description: `
      Task manager inspired by the Kanban System.
      Create and organize tasks using drag and drop functions,
      assign users and categories.
      `,
      link: 'https://join.rudolf-sachslehner.eu/',
      github: 'https://github.com/ProRuan/join-angular',
    },
    {
      path: '../../assets/img/raising_fantasy.jpg',
      name: 'Raising Fantasy',
      skills: 'JavaScript | HTML | CSS',
      description: `
      A simple Jump-and-Run game based on an object-oriented approach.
      Help the knight to collect items and unlock the key capability
      to defeat the shaman.
      `,
      link: 'https://raising-fantasy.rudolf-sachslehner.eu/',
      github: 'https://github.com/ProRuan/portfolio-raising-fantasy',
    },
  ];

  /**
   * Creates a portfolio component.
   * @param langData - The language data to apply.
   */
  constructor(public langData: LanguageService) {}

  /**
   * Prints the text based on the set language.
   * @returns - The text to print.
   */
  print() {
    this.updateProjects();
    return this.langData.get();
  }

  /**
   * Updates the description of the projects.
   */
  updateProjects() {
    let lang = this.langData.get();
    this.projects[0].description = lang.videoflixDesc;
    this.projects[1].description = lang.joinDesc;
    this.projects[2].description = lang.gameDesc;
  }
}
