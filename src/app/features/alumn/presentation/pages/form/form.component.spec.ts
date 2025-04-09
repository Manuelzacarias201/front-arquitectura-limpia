import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnFormPage } from './form.component';

describe('FormComponent', () => {
  let component: AlumnFormPage;
  let fixture: ComponentFixture<AlumnFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnFormPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
