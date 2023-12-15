import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question20Component } from './question20.component';

describe('Question20Component', () => {
  let component: Question20Component;
  let fixture: ComponentFixture<Question20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question20Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
