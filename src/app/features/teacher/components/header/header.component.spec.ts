import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherHeader } from './header.component';

describe('HeaderComponent', () => {
  let component: TeacherHeader;
  let fixture: ComponentFixture<TeacherHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
