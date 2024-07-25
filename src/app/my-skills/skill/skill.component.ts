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

  highlightLast(skill: any) {
    if (skill.name == 'Continually leanring') {
      return { color: '#00BEE8' };
    } else {
      return { color: 'white' };
    }
  }

  getAlt(skill: any) {
    let name = skill.name.toLowerCase();
    return `${name}-logo`;
  }
}
