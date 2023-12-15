import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question21Component } from './question21.component';

describe('Question21Component', () => {
  let component: Question21Component;
  let fixture: ComponentFixture<Question21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question21Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
