import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainCoverComponent } from './rain-cover.component';

describe('RainCoverComponent', () => {
  let component: RainCoverComponent;
  let fixture: ComponentFixture<RainCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
