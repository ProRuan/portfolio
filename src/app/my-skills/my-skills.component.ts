import { Component } from '@angular/core';
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
  headline: string = '';
  expText: string = '';
  subheadline: string[] = [];
  anotherText: string = '';
  buttonText: string = '';

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

  constructor(public linkData: LinkService, private langData: LanguageService) {
    this.set();
  }

  set() {
    let lang = this.langData.get();
    this.headline = lang.headlines[1];
    this.expText = lang.expText;
    this.subheadline = lang.anotherSkill;
    this.anotherText = lang.anotherText;
    this.buttonText = lang.skillButton;
  }
}
