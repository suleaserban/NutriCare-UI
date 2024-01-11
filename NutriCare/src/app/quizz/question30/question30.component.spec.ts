import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question30Component } from './question30.component';

describe('Question30Component', () => {
  let component: Question30Component;
  let fixture: ComponentFixture<Question30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question30Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
