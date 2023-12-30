import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question29Component } from './question29.component';

describe('Question29Component', () => {
  let component: Question29Component;
  let fixture: ComponentFixture<Question29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question29Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
