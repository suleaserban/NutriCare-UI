import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question17Component } from './question17.component';

describe('Question17Component', () => {
  let component: Question17Component;
  let fixture: ComponentFixture<Question17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question17Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
