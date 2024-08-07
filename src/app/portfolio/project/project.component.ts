import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LinkService } from '../../shared/services/link.service';
import { Project } from '../../shared/interfaces/project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  @Input() index: number = 0;
  @Input() project: Project = {
    path: '../../assets/img/join_photo.png',
    name: 'Join',
    skills: 'Angular | TypeScript | HTML | CSS | Firebase',
    description:
      'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    link: 'https://join-43.developerakademie.net/join-43/login.html',
    github: 'https://github.com/joNsiii/join-group',
  };

  constructor(public linkData: LinkService) {}

  /**
   * Provide the alternative text.
   * @param project - The providing projecct.
   * @returns - The alternative text.
   */
  getAlt(project: any) {
    let name = project.name.toLowerCase();
    return `${name}-photo`;
  }

  /**
   * Set the style.
   * @param property - The property to set.
   * @param valueA - The value a to set.
   * @param valueB - The value b to set.
   * @returns - The style to apply.
   */
  setStyle(property: string, valueA: string, valueB: string) {
    let value = this.index % 2 == 1 ? valueA : valueB;
    return { [property]: value };
  }
}
