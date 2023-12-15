import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question22Component } from './question22.component';

describe('Question22Component', () => {
  let component: Question22Component;
  let fixture: ComponentFixture<Question22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question22Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Question22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
