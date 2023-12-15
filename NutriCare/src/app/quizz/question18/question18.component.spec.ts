import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question18Component } from './question18.component';

describe('Question18Component', () => {
  let component: Question18Component;
  let fixture: ComponentFixture<Question18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question18Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
