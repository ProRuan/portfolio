import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects: any = [
    {
      path: '../../assets/img/join_photo.png',
      name: 'Join',
      skills: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: `
      Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.
      `,
    },
    {
      path: '../../assets/img/sharkie_photo.png',
      name: 'Sharkie',
      skills: 'JavaScript | HTML | CSS',
      description: `
      A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.
      `,
    },
  ];
}
