import { Component } from '@angular/core';
import { SkillComponent } from './skill/skill.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, SkillComponent],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  skills = [
    { path: '../../assets/img/html.svg', name: 'HTML' },
    { path: '../../assets/img/css.svg', name: 'CSS' },
    { path: '../../assets/img/javascript.svg', name: 'JavaScript' },
    { path: '../../assets/img/typescript.svg', name: 'TypeScript' },
    { path: '../../assets/img/angular.svg', name: 'Angular' },
    { path: '../../assets/img/firebase.svg', name: 'Firebase' },
    { path: '../../assets/img/git.svg', name: 'GIT' },
    { path: '../../assets/img/api.svg', name: 'Rest-Api' },
    { path: '../../assets/img/scrum.svg', name: 'Scrum' },
    { path: '../../assets/img/material_design.svg', name: 'Material Design' },
    {
      path: '../../assets/img/continually_learning.svg',
      name: 'Continually learning',
    },
  ];

  /**
   * Scroll to contact section.
   */
  scroll() {
    window.location.href = '#contact';
  }
}
