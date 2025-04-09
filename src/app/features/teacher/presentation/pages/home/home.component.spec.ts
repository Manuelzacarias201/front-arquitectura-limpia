import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherHome } from './home.component';

describe('HomeComponent', () => {
  let component: TeacherHome;
  let fixture: ComponentFixture<TeacherHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
