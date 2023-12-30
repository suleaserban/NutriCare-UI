import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question27Component } from './question27.component';

describe('Question27Component', () => {
  let component: Question27Component;
  let fixture: ComponentFixture<Question27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question27Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
