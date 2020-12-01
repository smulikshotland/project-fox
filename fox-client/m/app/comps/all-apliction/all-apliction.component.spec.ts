import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAplictionComponent } from './all-apliction.component';

describe('AllAplictionComponent', () => {
  let component: AllAplictionComponent;
  let fixture: ComponentFixture<AllAplictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAplictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAplictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
