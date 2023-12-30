import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question25Component } from './question25.component';

describe('Question25Component', () => {
  let component: Question25Component;
  let fixture: ComponentFixture<Question25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question25Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
