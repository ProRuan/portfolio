import { Component, inject } from '@angular/core';
import { SkillComponent } from './skill/skill.component';
import { CommonModule } from '@angular/common';
import { LinkService } from '../shared/services/link.service';
import { Skill } from '../shared/interfaces/skill';
import { StudySkillComponent } from './study-skill/study-skill.component';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, SkillComponent, StudySkillComponent],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  linkData: LinkService = inject(LinkService);
  langData: LanguageService = inject(LanguageService);

  skills: Skill[] = [
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
  ];

  constructor() {}

  update() {
    return this.langData.get();
  }
}
