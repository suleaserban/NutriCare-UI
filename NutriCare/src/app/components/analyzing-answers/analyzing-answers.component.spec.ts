import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzingAnswersComponent } from './analyzing-answers.component';

describe('AnalyzingAnswersComponent', () => {
  let component: AnalyzingAnswersComponent;
  let fixture: ComponentFixture<AnalyzingAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyzingAnswersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyzingAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
