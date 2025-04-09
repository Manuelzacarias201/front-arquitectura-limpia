import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlumnsComponent } from './list-alumns.component';

describe('ListAlumnsComponent', () => {
  let component: ListAlumnsComponent;
  let fixture: ComponentFixture<ListAlumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAlumnsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAlumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
