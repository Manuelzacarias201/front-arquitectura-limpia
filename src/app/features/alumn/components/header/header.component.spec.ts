import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnHeader } from './header.component';

describe('HeaderComponent', () => {
  let component: AlumnHeader;
  let fixture: ComponentFixture<AlumnHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
