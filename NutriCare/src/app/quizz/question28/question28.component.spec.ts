import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question28Component } from './question28.component';

describe('Question28Component', () => {
  let component: Question28Component;
  let fixture: ComponentFixture<Question28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question28Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
