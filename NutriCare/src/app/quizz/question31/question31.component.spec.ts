import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question31Component } from './question31.component';

describe('Question31Component', () => {
  let component: Question31Component;
  let fixture: ComponentFixture<Question31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question31Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
