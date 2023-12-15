import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question14Component } from './question14.component';

describe('Question14Component', () => {
  let component: Question14Component;
  let fixture: ComponentFixture<Question14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
