import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question23Component } from './question23.component';

describe('Question23Component', () => {
  let component: Question23Component;
  let fixture: ComponentFixture<Question23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question23Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
