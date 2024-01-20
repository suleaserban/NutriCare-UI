import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecoComponent } from './my-reco.component';

describe('MyRecoComponent', () => {
  let component: MyRecoComponent;
  let fixture: ComponentFixture<MyRecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRecoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
