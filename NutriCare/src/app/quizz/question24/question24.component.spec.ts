import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question24Component } from './question24.component';

describe('Question24Component', () => {
  let component: Question24Component;
  let fixture: ComponentFixture<Question24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question24Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
