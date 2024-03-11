import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplifiedNavbarComponent } from './simplified-navbar.component';

describe('SimplifiedNavbarComponent', () => {
  let component: SimplifiedNavbarComponent;
  let fixture: ComponentFixture<SimplifiedNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplifiedNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplifiedNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
