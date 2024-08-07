import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudySkillComponent } from './study-skill.component';

describe('StudySkillComponent', () => {
  let component: StudySkillComponent;
  let fixture: ComponentFixture<StudySkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudySkillComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudySkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
