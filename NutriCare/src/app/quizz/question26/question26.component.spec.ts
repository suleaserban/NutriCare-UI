import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question26Component } from './question26.component';

describe('Question26Component', () => {
  let component: Question26Component;
  let fixture: ComponentFixture<Question26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question26Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
