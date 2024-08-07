import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';
import { Project } from '../shared/interfaces/project';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      path: '../../assets/img/join.png',
      name: 'Join',
      skills: 'JavaScript | HTML | CSS',
      description: `
      Task manager inspired by the Kanban System.
      Create and organize tasks using drag and drop functions,
      assign users and categories.
      `,
      link: 'https://rudolf-sachslehner.developerakademie.net/portfolio-join/login.html',
      github: 'https://github.com/ProRuan/portfolio-join',
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
      link: 'https://rudolf-sachslehner.developerakademie.net/portfolio-raising-fantasy/',
      github: 'https://github.com/ProRuan/portfolio-raising-fantasy',
    },
  ];
}
