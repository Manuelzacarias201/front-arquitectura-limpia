import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnHome } from './home.component';

describe('HomeComponent', () => {
  let component: AlumnHome;
  let fixture: ComponentFixture<AlumnHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
