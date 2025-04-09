import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAlumns } from './view-alumns.component';

describe('ViewStudentsComponent', () => {
  let component: ViewAlumns;
  let fixture: ComponentFixture<ViewAlumns>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAlumns]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAlumns);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
