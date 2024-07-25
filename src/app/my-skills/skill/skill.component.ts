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
  @Input() path: string = '';
  @Input() name: string = 'HTML';

  highlightLast(name: any) {
    if (name == 'Continually leanring') {
      return { color: '#00BEE8' };
    } else {
      return { color: 'white' };
    }
  }
}
