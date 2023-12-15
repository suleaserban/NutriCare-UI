import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question16Component } from './question16.component';

describe('Question16Component', () => {
  let component: Question16Component;
  let fixture: ComponentFixture<Question16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question16Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
