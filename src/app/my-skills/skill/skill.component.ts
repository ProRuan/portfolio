import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Skill } from '../../shared/interfaces/skill';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent {
  @Input() skill: Skill = {
    path: '',
    name: 'HTML',
  };

  /**
   * Provides the alternative text.
   * @param skill - The providing skill.
   * @returns - The alternative text.
   */
  getAlt(skill: any) {
    let name = skill.name.toLowerCase();
    return `${name}-logo`;
  }
}
