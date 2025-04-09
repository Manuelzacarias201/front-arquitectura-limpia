import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherFormPage } from './form.component';

describe('FormComponent', () => {
  let component: TeacherFormPage;
  let fixture: ComponentFixture<TeacherFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherFormPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
