import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroItemComponent } from './intro-item.component';

describe('IntroItemComponent', () => {
  let component: IntroItemComponent;
  let fixture: ComponentFixture<IntroItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IntroItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
