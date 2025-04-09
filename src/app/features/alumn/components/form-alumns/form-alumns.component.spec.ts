import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlumnsComponent } from './form-alumns.component';

describe('FormAlumnsComponent', () => {
  let component: FormAlumnsComponent;
  let fixture: ComponentFixture<FormAlumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAlumnsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAlumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
