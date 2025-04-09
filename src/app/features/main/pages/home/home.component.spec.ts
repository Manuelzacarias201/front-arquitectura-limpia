import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHome } from './home.component';

describe('HomeComponent', () => {
  let component: MainHome;
  let fixture: ComponentFixture<MainHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
