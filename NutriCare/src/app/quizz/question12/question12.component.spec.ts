import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question12Component } from './question12.component';

describe('Question12Component', () => {
  let component: Question12Component;
  let fixture: ComponentFixture<Question12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
