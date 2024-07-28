import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent {
  @Input() skill: any = {
    path: '',
    name: 'HTML',
  };

  /**
   * Highlight the last skill.
   * @param skill - The skill to highlight.
   * @returns - The style to apply.
   */
  highlightLast(skill: any) {
    if (skill.name == 'Continually learning') {
      return { color: '#00BEE8' };
    } else {
      return { color: 'white' };
    }
  }

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
